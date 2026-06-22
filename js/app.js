/* ========================================
   NOX — Main Application Logic
   ======================================== */

// ===== STATE =====
const state = {
  user: {
    name: '',
    age: '',
    timezone: '',
    goals: [],
    story: '',
    energyPeak: '',
    mood: null,
    streak: 7,
    habits: [],
    notes: [],
    journal: [],
  },
  currentStep: 0,
  currentSection: 'dashboard',
  initialized: false,
};

const quotes = [
  "The only way out is through.",
  "Darkness is not the absence of light — it's the beginning of something new.",
  "Embrace the chaos. Find your order.",
  "You are the architect of your own reality.",
  "In the void, we find our purpose.",
  "Discipline is the bridge between goals and accomplishment.",
  "The night is darkest before the dawn.",
  "Your habits shape your destiny.",
  "Master your time, master your life.",
  "Growth begins where comfort ends.",
];

// ===== BOOT SEQUENCE =====
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('boot-screen').style.display = 'none';
    const hasLaunched = localStorage.getItem('nox_launched');
    if (hasLaunched) {
      showApp();
    } else {
      document.getElementById('onboarding').classList.remove('hidden');
    }
  }, 3500);

  updateClock();
  setInterval(updateClock, 1000);
});

// ===== CLOCK =====
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const el = document.getElementById('current-time');
  if (el) el.textContent = `${dateStr} · ${timeStr}`;
}

// ===== ONBOARDING =====
function nextStep() {
  const steps = document.querySelectorAll('.onboard-step');
  const dots = document.querySelectorAll('.step-dot');

  // Collect data from current step
  collectStepData(state.currentStep);

  // Validate
  if (state.currentStep === 0) {
    const name = document.getElementById('user-name').value.trim();
    if (!name) {
      shakeElement(document.getElementById('user-name'));
      return;
    }
  }

  // Move to next step
  steps[state.currentStep].classList.remove('active');
  dots[state.currentStep].classList.remove('active');
  dots[state.currentStep].classList.add('done');

  state.currentStep++;

  if (state.currentStep < steps.length) {
    steps[state.currentStep].classList.add('active');
    dots[state.currentStep].classList.add('active');
  }

  // If final step, populate summary
  if (state.currentStep === steps.length - 1) {
    populateSummary();
  }
}

function collectStepData(step) {
  switch (step) {
    case 0:
      state.user.name = document.getElementById('user-name').value.trim();
      state.user.age = document.getElementById('user-age').value;
      state.user.timezone = document.getElementById('user-timezone').value;
      break;
    case 1:
      state.user.goals = Array.from(document.querySelectorAll('.goal-card.selected'))
        .map(c => c.dataset.goal);
      break;
    case 2:
      state.user.habits = [];
      document.querySelectorAll('.habit-item').forEach(item => {
        const label = item.querySelector('label').textContent;
        const active = item.querySelector('.toggle-btn.active');
        state.user.habits.push({
          question: label,
          value: active ? active.dataset.value : 'no'
        });
      });
      break;
    case 3:
      state.user.story = document.getElementById('user-story').value;
      state.user.energyPeak = document.getElementById('energy-peak').value;
      break;
  }
}

function toggleGoal(el) {
  el.classList.toggle('selected');
}

function selectToggle(btn) {
  const group = btn.parentElement;
  group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function shakeElement(el) {
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = 'shake 0.5s ease';
  el.style.borderColor = 'var(--neon-pink)';
  setTimeout(() => { el.style.borderColor = ''; }, 2000);
}

function populateSummary() {
  document.getElementById('sum-name').textContent = state.user.name || '—';
  document.getElementById('sum-age').textContent = state.user.age || '—';
  document.getElementById('sum-tz').textContent = state.user.timezone || '—';
  document.getElementById('sum-goals').textContent =
    state.user.goals.length > 0 ? state.user.goals.join(', ') : '—';
  document.getElementById('sum-energy').textContent = state.user.energyPeak || '—';
}

function launchNox() {
  collectStepData(3);
  localStorage.setItem('nox_launched', 'true');
  localStorage.setItem('nox_user', JSON.stringify(state.user));
  showApp();
}

function showApp() {
  document.getElementById('onboarding').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  const savedUser = localStorage.getItem('nox_user');
  if (savedUser) {
    state.user = JSON.parse(savedUser);
  }

  // Update UI with user data
  const greetingName = document.getElementById('greeting-name');
  const avatarLetter = document.getElementById('avatar-letter');
  if (greetingName) greetingName.textContent = state.user.name || 'User';
  if (avatarLetter) avatarLetter.textContent = (state.user.name || 'N')[0].toUpperCase();

  updateGreeting();
  updateProgressRing(65);
  updateStreak(state.user.streak);
  document.getElementById('greeting-quote').textContent =
    quotes[Math.floor(Math.random() * quotes.length)];
}

// ===== GREETING =====
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = 'Good evening,';
  if (hour < 12) greeting = 'Good morning,';
  else if (hour < 18) greeting = 'Good afternoon,';
  document.getElementById('greeting-msg').textContent = greeting;
}

// ===== PROGRESS RING =====
function updateProgressRing(pct) {
  const ring = document.getElementById('daily-progress-ring');
  if (!ring) return;
  const circumference = 339.292;
  const offset = circumference - (pct / 100) * circumference;
  ring.style.strokeDashoffset = offset;

  // Also set gradient via SVG defs
  const svg = ring.closest('svg');
  let defs = svg.querySelector('defs');
  if (!defs) {
    defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
      <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#b829dd"/>
        <stop offset="100%" style="stop-color:#05d9e8"/>
      </linearGradient>`;
    svg.prepend(defs);
  }
  ring.style.stroke = 'url(#neon-gradient)';

  document.getElementById('daily-pct').textContent = pct + '%';
}

// ===== STREAK =====
function updateStreak(count) {
  document.getElementById('streak-count').textContent = count;
  const flames = document.getElementById('streak-flames');
  flames.textContent = '🔥'.repeat(Math.min(count, 10));
}

// ===== MOOD =====
function selectMood(btn) {
  document.querySelectorAll('.mood-selector:not(.small) .mood-btn').forEach(b =>
    b.classList.remove('selected')
  );
  btn.classList.add('selected');
  state.user.mood = btn.dataset.mood;

  const hints = {
    great: 'Feeling powerful! Keep that energy going.',
    good: 'Nice! You are on track.',
    neutral: 'Steady. Let NOX help optimize your day.',
    low: 'Tough day? We can adjust your schedule.',
    bad: 'It\'s okay. Take it easy. Tomorrow is new.',
  };
  document.getElementById('mood-hint').textContent = hints[state.user.mood] || '';
}

function selectEntryMood(btn) {
  btn.closest('.mood-selector').querySelectorAll('.mood-btn').forEach(b =>
    b.classList.remove('selected')
  );
  btn.classList.add('selected');
}

// ===== NAVIGATION =====
function switchSection(section, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  document.getElementById('sec-' + section).classList.add('active');
  if (btn) btn.classList.add('active');
  state.currentSection = section;
}

// ===== SCHEDULE =====
function switchScheduleView(view, btn) {
  document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  if (view === 'custom') {
    generateAISchedule();
  }
}

function generateAISchedule() {
  // Placeholder for AI schedule generation
  const slots = document.querySelectorAll('.time-slot');
  const categories = ['work', 'exercise', 'learning', 'morning', 'break', 'evening', 'wind', 'sleep'];
  const names = ['Deep Work', 'Exercise', 'Learning', 'Morning Routine', 'Break', 'Free Time', 'Wind Down', 'Sleep'];

  slots.forEach(slot => {
    slot.className = 'time-slot empty';
    slot.textContent = '';
  });

  // Simple AI: schedule based on energy peak
  const peakHour = state.user.energyPeak ? parseInt(state.user.energyPeak.split(':')[0]) : 10;
  const blocks = document.querySelectorAll('.time-block');

  blocks.forEach(block => {
    const hour = parseInt(block.dataset.hour);
    const slot = block.querySelector('.time-slot');

    if (hour === peakHour - 1 || hour === peakHour) {
      slot.className = 'time-slot task-block work';
      slot.textContent = '🧠 Peak Deep Work';
    } else if (hour === 12) {
      slot.className = 'time-slot task-block break';
      slot.textContent = '🍽️ Lunch Break';
    } else if (hour >= peakHour + 3 && hour < peakHour + 5) {
      slot.className = 'time-slot task-block exercise';
      slot.textContent = '🏃 Exercise';
    } else if (hour >= 18 && hour < 21) {
      slot.className = 'time-slot task-block evening';
      slot.textContent = '🎮 Free Time';
    } else if (hour === 21) {
      slot.className = 'time-slot task-block wind';
      slot.textContent = '📖 Wind Down';
    } else if (hour >= 22 || hour < 6) {
      slot.className = 'time-slot task-block sleep';
      slot.textContent = '😴 Sleep';
    }
  });
}

// ===== HABITS =====
function toggleHabitCheck(btn) {
  btn.classList.toggle('done');
}

// ===== JOURNAL =====
function openNewEntry() {
  document.getElementById('new-entry-form').classList.remove('hidden');
}

function closeNewEntry() {
  document.getElementById('new-entry-form').classList.add('hidden');
  document.getElementById('entry-title').value = '';
  document.getElementById('entry-body').value = '';
  document.querySelectorAll('.journal-form .mood-btn').forEach(b =>
    b.classList.remove('selected')
  );
}

function saveEntry() {
  const title = document.getElementById('entry-title').value.trim();
  const body = document.getElementById('entry-body').value.trim();
  const selectedMood = document.querySelector('.journal-form .mood-btn.selected');

  if (!title || !body) {
    alert('Please fill in both title and content.');
    return;
  }

  const now = new Date();
  const entry = {
    title,
    body,
    mood: selectedMood ? selectedMood.textContent : '😐',
    date: now,
    tags: body.split(' ').filter(w => w.length > 5).slice(0, 2),
  };

  state.user.journal.unshift(entry);
  localStorage.setItem('nox_user', JSON.stringify(state.user));

  renderJournalEntry(entry);
  closeNewEntry();
}

function renderJournalEntry(entry) {
  const container = document.getElementById('journal-entries');
  const now = entry.date;
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const div = document.createElement('div');
  div.className = 'journal-entry';
  div.innerHTML = `
    <div class="entry-date">
      <span class="entry-day">${now.getDate()}</span>
      <span class="entry-month">${months[now.getMonth()]}</span>
    </div>
    <div class="entry-content">
      <h4>${entry.title}</h4>
      <p>${entry.body.substring(0, 150)}${entry.body.length > 150 ? '...' : ''}</p>
      <div class="entry-tags">
        ${entry.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
    <div class="entry-mood">${entry.mood}</div>
  `;
  container.prepend(div);
}

// ===== QUICK NOTE =====
function saveQuickNote() {
  const note = document.getElementById('quick-note').value.trim();
  if (!note) return;

  state.user.notes.unshift({ text: note, time: new Date() });
  localStorage.setItem('nox_user', JSON.stringify(state.user));
  document.getElementById('quick-note').value = '';

  // Visual feedback
  const btn = event.target;
  btn.textContent = 'SAVED ✓';
  btn.style.borderColor = 'var(--neon-green)';
  btn.style.color = 'var(--neon-green)';
  setTimeout(() => {
    btn.textContent = 'SAVE';
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 1500);
}

// ===== AI PANEL =====
function toggleAIPanel() {
  const panel = document.getElementById('ai-panel');
  panel.classList.toggle('hidden');
  document.getElementById('settings-panel').classList.add('hidden');
}

function sendAI() {
  const input = document.getElementById('ai-input');
  const msg = input.value.trim();
  if (!msg) return;

  const messagesContainer = document.getElementById('ai-messages');

  // User message
  const userDiv = document.createElement('div');
  userDiv.className = 'ai-msg user';
  userDiv.textContent = msg;
  messagesContainer.appendChild(userDiv);

  input.value = '';

  // AI response (simulated)
  setTimeout(() => {
    const response = generateAIResponse(msg);
    const aiDiv = document.createElement('div');
    aiDiv.className = 'ai-msg ai';
    aiDiv.textContent = response;
    messagesContainer.appendChild(aiDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 800);

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(msg) {
  const lower = msg.toLowerCase();

  if (lower.includes('schedule') || lower.includes('расписан')) {
    return `Based on your energy peak at ${state.user.energyPeak || '10:00'}, I recommend scheduling your most demanding tasks between 9-12. Your afternoon slot (14-16) would be ideal for physical activities. I've updated your schedule accordingly.`;
  }
  if (lower.includes('habit') || lower.includes('привыч')) {
    return `I've noticed you've been consistent with 2 out of 4 tracked habits this week. Water intake could use improvement — try setting hourly reminders. Your morning routine consistency is at 71%, which is great progress.`;
  }
  if (lower.includes('mood') || lower.includes('настроен')) {
    return `Your mood patterns show you tend to feel best in mornings and dip around 3-4 PM. I suggest scheduling a short break or walk during that window. Your average mood score this week is 3.6/5.`;
  }
  if (lower.includes('help') || lower.includes('помощ')) {
    return `I can help you with: schedule optimization, habit tracking analysis, mood pattern insights, goal progress reports, and personalized recommendations. Just ask!`;
  }

  return `Thanks for your input, ${state.user.name || 'friend'}. I'm analyzing your data to provide better recommendations. Try asking about your schedule, habits, or mood patterns for specific insights.`;
}

// ===== SETTINGS =====
function toggleSettings() {
  const panel = document.getElementById('settings-panel');
  panel.classList.toggle('hidden');
  document.getElementById('ai-panel').classList.add('hidden');
}

function resetData() {
  if (confirm('This will delete all your NOX data. Are you sure?')) {
    localStorage.clear();
    location.reload();
  }
}

// ===== MODAL =====
function openAddTask() {
  document.getElementById('modal-title').textContent = 'ADD TASK';
  document.getElementById('modal-body').innerHTML = `
    <div class="form-group">
      <label>TASK NAME</label>
      <input type="text" id="new-task-name" placeholder="What needs to be done?">
    </div>
    <div class="form-group">
      <label>TIME</label>
      <input type="time" id="new-task-time" value="09:00">
    </div>
    <div class="form-group">
      <label>CATEGORY</label>
      <select id="new-task-cat">
        <option value="work">Work</option>
        <option value="exercise">Exercise</option>
        <option value="learning">Learning</option>
        <option value="break">Break</option>
        <option value="evening">Free Time</option>
      </select>
    </div>
    <button class="btn-primary" onclick="addTask()" style="width:100%">ADD TASK</button>
  `;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function openAddHabit() {
  document.getElementById('modal-title').textContent = 'NEW HABIT';
  document.getElementById('modal-body').innerHTML = `
    <div class="form-group">
      <label>HABIT NAME</label>
      <input type="text" id="new-habit-name" placeholder="What do you want to track?">
    </div>
    <div class="form-group">
      <label>ICON (emoji)</label>
      <input type="text" id="new-habit-icon" placeholder="🏋️" maxlength="2">
    </div>
    <div class="form-group">
      <label>DAILY TARGET</label>
      <input type="number" id="new-habit-target" value="1" min="1" max="30">
    </div>
    <button class="btn-primary" onclick="addHabit()" style="width:100%">ADD HABIT</button>
  `;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function addTask() {
  const name = document.getElementById('new-task-name').value.trim();
  const time = document.getElementById('new-task-time').value;
  const cat = document.getElementById('new-task-cat').value;

  if (!name) {
    shakeElement(document.getElementById('new-task-name'));
    return;
  }

  const hour = parseInt(time.split(':')[0]);
  const block = document.querySelector(`.time-block[data-hour="${hour}"]`);
  if (block) {
    const slot = block.querySelector('.time-slot');
    slot.className = `time-slot task-block ${cat}`;
    slot.textContent = name;
  }

  closeModal();
}

function addHabit() {
  const name = document.getElementById('new-habit-name').value.trim();
  const icon = document.getElementById('new-habit-icon').value.trim() || '⭐';

  if (!name) {
    shakeElement(document.getElementById('new-habit-name'));
    return;
  }

  const grid = document.getElementById('habits-grid');
  const card = document.createElement('div');
  card.className = 'habit-card';
  card.innerHTML = `
    <div class="habit-icon">${icon}</div>
    <div class="habit-info">
      <h4>${name}</h4>
      <div class="habit-progress">
        <div class="habit-bar"><div class="habit-bar-fill" style="width:0%"></div></div>
        <span>Not started</span>
      </div>
    </div>
    <button class="habit-check" onclick="toggleHabitCheck(this)">✓</button>
  `;
  grid.appendChild(card);
  closeModal();
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// ===== SOCIAL =====
function toggleLike(btn) {
  btn.classList.toggle('liked');
  const text = btn.textContent;
  const num = parseInt(text.match(/\d+/)[0]);
  if (btn.classList.contains('liked')) {
    btn.textContent = `♥ ${num + 1}`;
  } else {
    btn.textContent = `♡ ${num - 1}`;
  }
}

// ===== STYLE: Add shake animation =====
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    50% { transform: translateX(8px); }
    75% { transform: translateX(-4px); }
  }
`;
document.head.appendChild(style);
