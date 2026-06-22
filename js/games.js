/* ========================================
   NOX — Mini Games Module
   ======================================== */

let currentGame = null;
let gameScore = 0;
let gameInterval = null;

// ===== GAME LAUNCHER =====
function launchGame(type) {
  const area = document.getElementById('game-area');
  const canvas = document.getElementById('game-canvas');
  const title = document.getElementById('game-title');
  const scoreEl = document.getElementById('game-score');

  area.classList.remove('hidden');
  gameScore = 0;
  scoreEl.textContent = 'Score: 0';

  // Cleanup previous
  if (gameInterval) clearInterval(gameInterval);

  switch (type) {
    case 'memory':
      title.textContent = 'MEMORY CHAIN';
      startMemoryGame(canvas);
      break;
    case 'reaction':
      title.textContent = 'REACTION SPEED';
      startReactionGame(canvas);
      break;
    case 'focus':
      title.textContent = 'FOCUS ZONE';
      startFocusGame(canvas);
      break;
    case 'typist':
      title.textContent = 'SHADOW TYPIST';
      startTypistGame(canvas);
      break;
  }

  currentGame = type;
}

function closeGame() {
  document.getElementById('game-area').classList.add('hidden');
  if (gameInterval) clearInterval(gameInterval);
  currentGame = null;
}

function updateScore(points) {
  gameScore += points;
  document.getElementById('game-score').textContent = `Score: ${gameScore}`;
}

// ===== MEMORY GAME =====
function startMemoryGame(canvas) {
  const symbols = ['◆', '◇', '⬡', '⬠', '▲', '●', '■', '★'];
  const pairs = [...symbols, ...symbols];
  shuffleArray(pairs);

  let flipped = [];
  let matched = 0;
  let locked = false;

  canvas.innerHTML = '';
  canvas.style.display = 'grid';
  canvas.style.gridTemplateColumns = 'repeat(4, 60px)';
  canvas.style.gap = '8px';
  canvas.style.justifyContent = 'center';

  pairs.forEach((symbol, i) => {
    const card = document.createElement('div');
    card.style.cssText = `
      width: 60px; height: 60px;
      background: var(--bg-secondary);
      border: 1px solid var(--neon-purple);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      transition: all 0.3s;
      color: transparent;
    `;
    card.dataset.symbol = symbol;
    card.dataset.index = i;

    card.addEventListener('click', () => {
      if (locked || card.classList.contains('flipped') || card.classList.contains('matched')) return;

      card.style.color = 'var(--neon-cyan)';
      card.style.background = 'rgba(5, 217, 232, 0.1)';
      card.classList.add('flipped');
      flipped.push(card);

      if (flipped.length === 2) {
        locked = true;
        if (flipped[0].dataset.symbol === flipped[1].dataset.symbol) {
          flipped.forEach(c => {
            c.classList.add('matched');
            c.style.borderColor = 'var(--neon-green)';
            c.style.boxShadow = '0 0 10px rgba(57, 255, 20, 0.3)';
          });
          matched += 2;
          updateScore(10);
          flipped = [];
          locked = false;

          if (matched === pairs.length) {
            setTimeout(() => {
              canvas.innerHTML = `<div style="text-align:center;color:var(--neon-green);font-size:20px;">✓ COMPLETE! Score: ${gameScore}</div>`;
            }, 300);
          }
        } else {
          setTimeout(() => {
            flipped.forEach(c => {
              c.style.color = 'transparent';
              c.style.background = 'var(--bg-secondary)';
              c.classList.remove('flipped');
            });
            flipped = [];
            locked = false;
          }, 800);
        }
      }
    });

    canvas.appendChild(card);
  });
}

// ===== REACTION GAME =====
function startReactionGame(canvas) {
  canvas.style.display = 'flex';
  canvas.style.alignItems = 'center';
  canvas.style.justifyContent = 'center';
  canvas.style.flexDirection = 'column';
  canvas.innerHTML = '<p style="color:var(--text-secondary)">Click the red circle when it appears. Be fast!</p>';

  let startTime;
  let timeouts = [];

  function showTarget() {
    canvas.innerHTML = '';
    const target = document.createElement('div');
    target.style.cssText = `
      width: 80px; height: 80px;
      background: var(--neon-pink);
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 30px var(--neon-pink);
      animation: pulse 0.5s ease;
    `;

    const waitTime = 1000 + Math.random() * 3000;
    timeouts.push(setTimeout(() => {
      canvas.innerHTML = '';
      canvas.appendChild(target);
      startTime = Date.now();

      target.addEventListener('click', () => {
        const reactionTime = Date.now() - startTime;
        updateScore(Math.max(0, 100 - Math.floor(reactionTime / 10)));
        canvas.innerHTML = `<div style="text-align:center">
          <p style="font-size:24px;color:var(--neon-cyan);font-family:var(--font-display)">${reactionTime}ms</p>
          <p style="color:var(--text-secondary);margin-top:8px">Click to try again</p>
        </div>`;
        canvas.onclick = () => { canvas.onclick = null; showTarget(); };
      });
    }, waitTime));
  }

  canvas.onclick = showTarget;
  showTarget();
}

// ===== FOCUS GAME =====
function startFocusGame(canvas) {
  canvas.style.display = 'flex';
  canvas.style.alignItems = 'center';
  canvas.style.justifyContent = 'center';
  canvas.style.flexDirection = 'column';

  let phase = 'grow';
  let size = 20;
  let growing = true;

  canvas.innerHTML = `
    <div style="text-align:center;margin-bottom:16px;color:var(--text-secondary)">
      <p>Follow the circle with your eyes. Breathe in as it grows, out as it shrinks.</p>
    </div>
  `;

  const circle = document.createElement('div');
  circle.style.cssText = `
    width: ${size}px; height: ${size}px;
    border: 3px solid var(--neon-cyan);
    border-radius: 50%;
    transition: width 0.1s, height 0.1s;
    box-shadow: 0 0 20px rgba(5, 217, 232, 0.3);
  `;
  canvas.appendChild(circle);

  const breathLabel = document.createElement('p');
  breathLabel.style.cssText = 'margin-top:16px;font-family:var(--font-mono);font-size:14px;color:var(--neon-cyan);';
  breathLabel.textContent = 'BREATHE IN';
  canvas.appendChild(breathLabel);

  gameInterval = setInterval(() => {
    if (growing) {
      size += 1;
      if (size >= 120) growing = false;
      breathLabel.textContent = 'BREATHE IN';
    } else {
      size -= 1;
      if (size <= 20) growing = true;
      breathLabel.textContent = 'BREATHE OUT';
    }
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.boxShadow = `0 0 ${size / 2}px rgba(5, 217, 232, ${size / 200})`;
  }, 50);
}

// ===== TYPIST GAME =====
function startTypistGame(canvas) {
  const words = ['shadow', 'void', 'demon', 'night', 'neon', 'cyber', 'ghost', 'phantom',
    'eclipse', 'abyss', 'inferno', 'venom', 'chaos', 'primal', 'sinister', 'specter',
    'oblivion', 'reaper', 'nether', 'malice', 'dread', 'spectral', 'darkness', 'hex'];

  let currentWord = '';
  let timeLeft = 30;
  let wordIndex = 0;

  canvas.style.display = 'flex';
  canvas.style.flexDirection = 'column';
  canvas.style.alignItems = 'center';

  function showNextWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    canvas.innerHTML = `
      <div style="font-family:var(--font-display);font-size:36px;color:var(--neon-cyan);
        text-shadow:0 0 20px var(--neon-cyan);margin-bottom:16px;letter-spacing:4px">
        ${currentWord.toUpperCase()}
      </div>
      <input type="text" id="typist-input"
        style="background:var(--bg-secondary);border:1px solid var(--neon-purple);
        color:var(--text-primary);padding:12px 20px;border-radius:4px;font-size:18px;
        font-family:var(--font-mono);text-align:center;width:300px;outline:none"
        placeholder="Type here..." autofocus autocomplete="off">
      <p style="margin-top:12px;font-family:var(--font-mono);color:var(--text-secondary)">
        Time: <span id="typist-time" style="color:var(--neon-pink)">${timeLeft}s</span>
      </p>
    `;

    const input = document.getElementById('typist-input');
    input.focus();
    input.addEventListener('input', () => {
      if (input.value.toLowerCase() === currentWord) {
        updateScore(10 + currentWord.length * 2);
        showNextWord();
      }
    });
  }

  showNextWord();

  gameInterval = setInterval(() => {
    timeLeft--;
    const timeEl = document.getElementById('typist-time');
    if (timeEl) timeEl.textContent = timeLeft + 's';

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      canvas.innerHTML = `
        <div style="text-align:center">
          <p style="font-size:24px;color:var(--neon-green);font-family:var(--font-display)">
            TIME'S UP!
          </p>
          <p style="color:var(--text-secondary);margin-top:8px">
            Final Score: ${gameScore}
          </p>
        </div>
      `;
    }
  }, 1000);
}

// ===== UTILITY =====
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
