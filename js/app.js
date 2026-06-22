/* ========================================
   NOX — Main Application Logic
   ======================================== */

const i18n = {
  en: {
    welcome: 'Welcome to your darkness',
    whoAreYou: 'WHO ARE YOU?',
    yourGoals: 'YOUR GOALS',
    currentHabits: 'CURRENT HABITS',
    inYourWords: 'IN YOUR OWN WORDS',
    initialize: 'INITIALIZE',
    continue: 'CONTINUE →',
    launchNox: '◆ LAUNCH NOX',
    goodMorning: 'Good morning,',
    goodAfternoon: 'Good afternoon,',
    goodEvening: 'Good evening,',
    dashboard: 'Dashboard',
    schedule: 'Schedule',
    habits: 'Habits',
    journal: 'Journal',
    games: 'Games',
    social: 'Social',
    chain: 'Chain',
    todayProgress: "TODAY'S PROGRESS",
    nextUp: 'NEXT UP',
    howFeeling: 'HOW ARE YOU FEELING?',
    dayStreak: 'DAY STREAK',
    quickNote: 'QUICK NOTE',
    save: 'SAVE',
    saved: 'SAVED ✓',
    viewFull: 'VIEW FULL →',
    moodHint: 'Tap to log your mood',
    addTask: '+ ADD TASK',
    newHabit: '+ NEW HABIT',
    newEntry: '+ NEW ENTRY',
    add: 'ADD',
    cancel: 'CANCEL',
    title: 'TITLE',
    mood: 'MOOD',
    saveEntry: 'SAVE ENTRY',
    weeklyOverview: 'WEEKLY OVERVIEW',
    comingSoon: 'COMING SOON',
    memoryChain: 'Memory Chain',
    reactionSpeed: 'Reaction Speed',
    focusZone: 'Focus Zone',
    shadowTypist: 'Shadow Typist',
    trainMemory: 'Train your memory',
    testReflexes: 'Test your reflexes',
    deepConcentration: 'Deep concentration',
    typeToSurvive: 'Type to survive',
    close: '✕ CLOSE',
    settings: 'SETTINGS',
    taskDone: 'Task completed!',
    edit: 'Edit',
    makeRecurring: 'Make Recurring',
    delete: 'Delete',
  },
  ru: {
    welcome: 'Добро пожаловать в твою тьму',
    whoAreYou: 'КТО ТЫ?',
    yourGoals: 'ТВОИ ЦЕЛИ',
    currentHabits: 'ТЕКУЩИЕ ПРИВЫЧКИ',
    inYourWords: 'СВОИМИ СЛОВАМИ',
    initialize: 'ИНИЦИАЛИЗАЦИЯ',
    continue: 'ДАЛЕЕ →',
    launchNox: '◆ ЗАПУСТИТЬ NOX',
    goodMorning: 'Доброе утро,',
    goodAfternoon: 'Добрый день,',
    goodEvening: 'Добрый вечер,',
    dashboard: 'Главная',
    schedule: 'Расписание',
    habits: 'Привычки',
    journal: 'Дневник',
    games: 'Игры',
    social: 'Соцсеть',
    chain: 'Блокчейн',
    todayProgress: 'ПРОГРЕСС ЗА ДЕНЬ',
    nextUp: 'ДАЛЕЕ',
    howFeeling: 'КАК ТЫ ЧУВСТВУЕШЬ СЕБЯ?',
    dayStreak: 'ДНЕЙ ПОДРЯД',
    quickNote: 'БЫСТРАЯ ЗАМЕТКА',
    save: 'СОХРАНИТЬ',
    saved: 'СОХРАНЕНО ✓',
    viewFull: 'ПОЛНОСТЬЮ →',
    moodHint: 'Нажми чтобы отметить настроение',
    addTask: '+ ДОБАВИТЬ ЗАДАЧУ',
    newHabit: '+ НОВАЯ ПРИВЫЧКА',
    newEntry: '+ НОВАЯ ЗАПИСЬ',
    add: 'ДОБАВИТЬ',
    cancel: 'ОТМЕНА',
    title: 'ЗАГОЛОВОК',
    mood: 'НАСТРОЕНИЕ',
    saveEntry: 'СОХРАНИТЬ',
    weeklyOverview: 'ИТОГИ НЕДЕЛИ',
    comingSoon: 'СКОРО',
    memoryChain: 'Цепь памяти',
    reactionSpeed: 'Скорость реакции',
    focusZone: 'Зона фокуса',
    shadowTypist: 'Теневой печатник',
    trainMemory: 'Тренируй память',
    testReflexes: 'Проверь рефлексы',
    deepConcentration: 'Глубокая концентрация',
    typeToSurvive: 'Печатай чтобы выжить',
    close: '✕ ЗАКРЫТЬ',
    settings: 'НАСТРОЙКИ',
    taskDone: 'Задача выполнена!',
    edit: 'Редактировать',
    makeRecurring: 'Сделать регулярной',
    delete: 'Удалить',
  },
  uk: {
    welcome: 'Ласкаво просимо до своєї темряви',
    whoAreYou: 'ХТО ТИ?',
    yourGoals: 'ТВОЇ ЦІЛІ',
    currentHabits: 'ПОТОЧНІ ЗВИЧКИ',
    inYourWords: 'СВОЇМИ СЛОВАМИ',
    initialize: 'ІНІЦІАЛІЗАЦІЯ',
    continue: 'ДАЛІ →',
    launchNox: '◆ ЗАПУСТИТИ NOX',
    goodMorning: 'Доброго ранку,',
    goodAfternoon: 'Доброго дня,',
    goodEvening: 'Доброго вечора,',
    dashboard: 'Головна',
    schedule: 'Розклад',
    habits: 'Звички',
    journal: 'Щоденник',
    games: 'Ігри',
    social: 'Соцмережа',
    chain: 'Блокчейн',
    todayProgress: 'ПРОГРЕСС ЗА ДЕНЬ',
    nextUp: 'ДАЛІ',
    howFeeling: 'ЯК ТИ ПОЧУВАЄШЬСЯ?',
    dayStreak: 'ДНІВ ПІДРЯД',
    quickNote: 'ШВИДКА НОТАТКА',
    save: 'ЗБЕРЕГТИ',
    saved: 'ЗБЕРЕЖЕНО ✓',
    viewFull: 'ПОВНІСТЮ →',
    moodHint: 'Натисни щоб позначити настрій',
    addTask: '+ ДОДАТИ ЗАВДАННЯ',
    newHabit: '+ НОВА ЗВИЧКА',
    newEntry: '+ НОВИЙ ЗАПИС',
    add: 'ДОДАТИ',
    cancel: 'СКАСУВАТИ',
    title: 'ЗАГОЛОВОК',
    mood: 'НАСТРІЙ',
    saveEntry: 'ЗБЕРЕГТИ',
    weeklyOverview: 'ПІДСУМКИ ТИЖНЯ',
    comingSoon: 'СКОРО',
    memoryChain: 'Ланцюг пам\'яті',
    reactionSpeed: 'Швидкість реакції',
    focusZone: 'Зона фокусу',
    shadowTypist: 'Тіньовий друкар',
    trainMemory: 'Тренуй пам\'ять',
    testReflexes: 'Перевір рефлекси',
    deepConcentration: 'Глибока концентрація',
    typeToSurvive: 'Друкуй щоб вижити',
    close: '✕ ЗАКРИТИ',
    settings: 'НАЛАШТУВАННЯ',
    taskDone: 'Завдання виконано!',
    edit: 'Редагувати',
    makeRecurring: 'Зробити регулярним',
    delete: 'Видалити',
  },
};

let state = {
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
    lang: 'en',
    recurringTasks: [],
    completedTasks: {},
  },
  currentStep: 0,
  currentSection: 'dashboard',
  initialized: false,
};

const t = (key) => i18n[state.user.lang]?.[key] || i18n.en[key] || key;

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

const ruQuotes = [
  "Единственный выход — через.",
  "Тьма — это не отсутствие света, а начало чего-то нового.",
  "Прими хаос. Найди свой порядок.",
  "Ты — архитектор своей реальности.",
  "В пустоте мы находим свою цель.",
  "Дисциплина — мост между целями и результатами.",
  "Тьма всего ночь перед рассветом.",
  "Твои привычки формируют твою судьбу.",
  "Управляй временем — управляй жизнью.",
  "Рост начинается там, где заканчивается комфорт.",
];

function getQuote() {
  const arr = state.user.lang === 'ru' ? ruQuotes : quotes;
  return arr[Math.floor(Math.random() * arr.length)];
}

// ===== BOOT SEQUENCE =====
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('boot-screen').style.display = 'none';
    const saved = localStorage.getItem('nox_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        state.user = { ...state.user, ...parsed };
        if (state.user.name) {
          showApp();
          return;
        }
      } catch(e) {}
    }
    document.getElementById('onboarding').classList.remove('hidden');
  }, 3500);

  updateClock();
  setInterval(updateClock, 1000);
  setInterval(autoSave, 30000);
  setupLongPress();
});

// ===== AUTO SAVE =====
function autoSave() {
  if (state.user.name) {
    localStorage.setItem('nox_user', JSON.stringify(state.user));
  }
}

// ===== CLOCK =====
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const el = document.getElementById('current-time');
  if (el) el.textContent = `${dateStr} · ${timeStr}`;
}

// ===== LANGUAGE =====
function selectLang(btn) {
  document.querySelectorAll('.lang-card').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.user.lang = btn.dataset.lang;
  autoSave();
}

// ===== ONBOARDING =====
function nextStep() {
  const steps = document.querySelectorAll('.onboard-step');
  const dots = document.querySelectorAll('.step-dot');

  collectStepData(state.currentStep);

  if (state.currentStep === 1) {
    const name = document.getElementById('user-name').value.trim();
    if (!name) {
      shakeElement(document.getElementById('user-name'));
      return;
    }
  }

  steps[state.currentStep].classList.remove('active');
  dots[state.currentStep].classList.remove('active');
  dots[state.currentStep].classList.add('done');

  state.currentStep++;

  if (state.currentStep < steps.length) {
    steps[state.currentStep].classList.add('active');
    dots[state.currentStep].classList.add('active');
  }

  if (state.currentStep === steps.length - 1) {
    populateSummary();
  }
}

function collectStepData(step) {
  switch (step) {
    case 0: break;
    case 1:
      state.user.name = document.getElementById('user-name').value.trim();
      state.user.age = document.getElementById('user-age').value;
      state.user.timezone = document.getElementById('user-timezone').value;
      break;
    case 2:
      state.user.goals = Array.from(document.querySelectorAll('.goal-card.selected'))
        .map(c => c.dataset.goal);
      break;
    case 3:
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
    case 4:
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
  collectStepData(4);
  localStorage.setItem('nox_user', JSON.stringify(state.user));
  showApp();
}

function showApp() {
  document.getElementById('onboarding').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  const saved = localStorage.getItem('nox_user');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.user = { ...state.user, ...parsed };
    } catch(e) {}
  }

  const greetingName = document.getElementById('greeting-name');
  const avatarLetter = document.getElementById('avatar-letter');
  if (greetingName) greetingName.textContent = state.user.name || 'User';
  if (avatarLetter) avatarLetter.textContent = (state.user.name || 'N')[0].toUpperCase();

  updateGreeting();
  updateProgressRing(65);
  updateStreak(state.user.streak);
  document.getElementById('greeting-quote').textContent = getQuote();
  restoreCompletedTasks();
}

// ===== GREETING =====
function updateGreeting() {
  const hour = new Date().getHours();
  const el = document.getElementById('greeting-msg');
  if (hour < 12) el.textContent = t('goodMorning');
  else if (hour < 18) el.textContent = t('goodAfternoon');
  else el.textContent = t('goodEvening');
}

// ===== PROGRESS RING =====
function updateProgressRing(pct) {
  const ring = document.getElementById('daily-progress-ring');
  if (!ring) return;
  const circumference = 339.292;
  const offset = circumference - (pct / 100) * circumference;
  ring.style.strokeDashoffset = offset;

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
  document.getElementById('streak-flames').textContent = '🔥'.repeat(Math.min(count, 10));
}

// ===== MOOD =====
function selectMood(btn) {
  document.querySelectorAll('.mood-selector:not(.small) .mood-btn').forEach(b =>
    b.classList.remove('selected')
  );
  btn.classList.add('selected');
  state.user.mood = btn.dataset.mood;
  autoSave();

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
  if (view === 'custom') generateAISchedule();
}

function generateAISchedule() {
  const slots = document.querySelectorAll('.time-slot');
  slots.forEach(slot => { slot.className = 'time-slot empty'; slot.textContent = ''; });

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
  autoSave();
}

// ===== TASK COMPLETION =====
function toggleTaskComplete(slot) {
  if (!slot.classList.contains('task-block')) return;

  const block = slot.closest('.time-block');
  const hour = block.dataset.hour;
  const key = `task_${hour}_${new Date().toDateString()}`;

  if (slot.classList.contains('completed')) {
    slot.classList.remove('completed');
    slot.style.opacity = '';
    slot.style.textDecoration = '';
    delete state.user.completedTasks[key];
  } else {
    slot.classList.add('completed');
    slot.style.opacity = '0.5';
    slot.style.textDecoration = 'line-through';
    state.user.completedTasks[key] = true;
  }
  autoSave();
  updateDailyProgress();
}

function restoreCompletedTasks() {
  const today = new Date().toDateString();
  document.querySelectorAll('.time-slot.task-block').forEach(slot => {
    const block = slot.closest('.time-block');
    const key = `task_${block.dataset.hour}_${today}`;
    if (state.user.completedTasks && state.user.completedTasks[key]) {
      slot.classList.add('completed');
      slot.style.opacity = '0.5';
      slot.style.textDecoration = 'line-through';
    }
  });
  updateDailyProgress();
}

function updateDailyProgress() {
  const total = document.querySelectorAll('.time-slot.task-block').length;
  const done = document.querySelectorAll('.time-slot.task-block.completed').length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  updateProgressRing(pct);
}

// ===== LONG PRESS FOR TASK EDITING =====
function setupLongPress() {
  let pressTimer = null;
  let pressTarget = null;

  document.addEventListener('pointerdown', (e) => {
    const slot = e.target.closest('.time-slot.task-block');
    if (!slot) return;
    pressTarget = slot;
    pressTimer = setTimeout(() => {
      showTaskContextMenu(slot);
    }, 500);
  });

  document.addEventListener('pointerup', () => clearTimeout(pressTimer));
  document.addEventListener('pointermove', () => clearTimeout(pressTimer));
  document.addEventListener('pointercancel', () => clearTimeout(pressTimer));

  document.addEventListener('click', (e) => {
    const slot = e.target.closest('.time-slot.task-block');
    if (slot && !slot.closest('.context-menu')) {
      toggleTaskComplete(slot);
    }
  });
}

function showTaskContextMenu(slot) {
  const existing = document.querySelector('.context-menu');
  if (existing) existing.remove();

  const block = slot.closest('.time-block');
  const hour = block.dataset.hour;
  const taskName = slot.textContent;

  const menu = document.createElement('div');
  menu.className = 'context-menu';
  menu.innerHTML = `
    <div class="ctx-header">${taskName}</div>
    <button class="ctx-item" onclick="editTask('${hour}')">
      <span class="ctx-icon">✏️</span> ${t('edit')}
    </button>
    <button class="ctx-item" onclick="makeRecurring('${hour}')">
      <span class="ctx-icon">🔄</span> ${t('makeRecurring')}
    </button>
    <button class="ctx-item danger" onclick="deleteTask('${hour}')">
      <span class="ctx-icon">🗑️</span> ${t('delete')}
    </button>
  `;

  const rect = slot.getBoundingClientRect();
  menu.style.position = 'fixed';
  menu.style.top = (rect.top + window.scrollY) + 'px';
  menu.style.left = rect.left + 'px';
  menu.style.zIndex = '500';
  document.body.appendChild(menu);

  setTimeout(() => {
    document.addEventListener('click', function closeMenu(e) {
      if (!menu.contains(e.target)) {
        menu.remove();
        document.removeEventListener('click', closeMenu);
      }
    });
  }, 10);
}

function editTask(hour) {
  document.querySelector('.context-menu')?.remove();
  const block = document.querySelector(`.time-block[data-hour="${hour}"]`);
  const slot = block.querySelector('.time-slot');
  const currentName = slot.textContent;

  document.getElementById('modal-title').textContent = t('edit');
  document.getElementById('modal-body').innerHTML = `
    <div class="form-group">
      <label>${t('title')}</label>
      <input type="text" id="edit-task-name" value="${currentName}">
    </div>
    <div class="form-group">
      <label>TIME</label>
      <input type="time" id="edit-task-time" value="${String(hour).padStart(2,'0')}:00">
    </div>
    <button class="btn-primary" onclick="saveEditTask('${hour}')" style="width:100%">${t('save')}</button>
  `;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function saveEditTask(oldHour) {
  const newName = document.getElementById('edit-task-name').value.trim();
  const newTime = document.getElementById('edit-task-time').value;
  if (!newName) return;

  const oldBlock = document.querySelector(`.time-block[data-hour="${oldHour}"]`);
  if (oldBlock) {
    const oldSlot = oldBlock.querySelector('.time-slot');
    oldSlot.className = 'time-slot empty';
    oldSlot.textContent = '';
    oldSlot.style.opacity = '';
    oldSlot.style.textDecoration = '';
  }

  const newHour = parseInt(newTime.split(':')[0]);
  const newBlock = document.querySelector(`.time-block[data-hour="${newHour}"]`);
  if (newBlock) {
    const newSlot = newBlock.querySelector('.time-slot');
    const cat = getTaskCategory(newName);
    newSlot.className = `time-slot task-block ${cat}`;
    newSlot.textContent = newName;
  }

  closeModal();
  autoSave();
}

function getTaskCategory(name) {
  const lower = name.toLowerCase();
  if (lower.includes('work') || lower.includes('deep')) return 'work';
  if (lower.includes('exercise') || lower.includes('run') || lower.includes('gym')) return 'exercise';
  if (lower.includes('learn') || lower.includes('study') || lower.includes('read')) return 'learning';
  if (lower.includes('lunch') || lower.includes('break') || lower.includes('food')) return 'break';
  if (lower.includes('sleep') || lower.includes('bed')) return 'sleep';
  if (lower.includes('wind') || lower.includes('relax')) return 'wind';
  return 'work';
}

function makeRecurring(hour) {
  document.querySelector('.context-menu')?.remove();
  const block = document.querySelector(`.time-block[data-hour="${hour}"]`);
  const slot = block.querySelector('.time-slot');
  const taskName = slot.textContent;

  if (!state.user.recurringTasks) state.user.recurringTasks = [];
  const exists = state.user.recurringTasks.find(r => r.hour == hour);
  if (!exists) {
    state.user.recurringTasks.push({ hour: parseInt(hour), name: taskName });
    autoSave();
    alert(`"${taskName}" is now recurring daily at ${String(hour).padStart(2,'0')}:00`);
  } else {
    alert(`"${taskName}" is already recurring.`);
  }
}

function deleteTask(hour) {
  document.querySelector('.context-menu')?.remove();
  const block = document.querySelector(`.time-block[data-hour="${hour}"]`);
  const slot = block.querySelector('.time-slot');
  slot.className = 'time-slot empty';
  slot.textContent = '';
  slot.style.opacity = '';
  slot.style.textDecoration = '';

  const key = `task_${hour}_${new Date().toDateString()}`;
  delete state.user.completedTasks[key];
  autoSave();
  updateDailyProgress();
}

// ===== HABITS =====
function toggleHabitCheck(btn) {
  btn.classList.toggle('done');
  autoSave();
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

  if (!title || !body) return;

  const now = new Date();
  const entry = {
    title, body,
    mood: selectedMood ? selectedMood.textContent : '😐',
    date: now,
    tags: body.split(' ').filter(w => w.length > 5).slice(0, 2),
  };

  state.user.journal.unshift(entry);
  autoSave();
  renderJournalEntry(entry);
  closeNewEntry();
}

function renderJournalEntry(entry) {
  const container = document.getElementById('journal-entries');
  const now = entry.date;
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

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
  autoSave();
  document.getElementById('quick-note').value = '';

  const btn = event.target;
  btn.textContent = t('saved');
  btn.style.borderColor = 'var(--neon-green)';
  btn.style.color = 'var(--neon-green)';
  setTimeout(() => {
    btn.textContent = t('save');
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 1500);
}

// ===== AI PANEL =====
function toggleAIPanel() {
  document.getElementById('ai-panel').classList.toggle('hidden');
  document.getElementById('settings-panel').classList.add('hidden');
}

function sendAI() {
  const input = document.getElementById('ai-input');
  const msg = input.value.trim();
  if (!msg) return;

  const mc = document.getElementById('ai-messages');

  const userDiv = document.createElement('div');
  userDiv.className = 'ai-msg user';
  userDiv.textContent = msg;
  mc.appendChild(userDiv);

  input.value = '';

  setTimeout(() => {
    const response = generateAIResponse(msg);
    const aiDiv = document.createElement('div');
    aiDiv.className = 'ai-msg ai';
    aiDiv.textContent = response;
    mc.appendChild(aiDiv);
    mc.scrollTop = mc.scrollHeight;
  }, 800);

  mc.scrollTop = mc.scrollHeight;
}

function generateAIResponse(msg) {
  const lower = msg.toLowerCase();

  if (lower.includes('schedule') || lower.includes('расписан')) {
    return `Based on your energy peak at ${state.user.energyPeak || '10:00'}, I recommend scheduling your most demanding tasks between 9-12. Your afternoon slot (14-16) would be ideal for physical activities.`;
  }
  if (lower.includes('habit') || lower.includes('привыч')) {
    return `I've noticed you've been consistent with 2 out of 4 tracked habits this week. Water intake could use improvement — try setting hourly reminders.`;
  }
  if (lower.includes('mood') || lower.includes('настроен')) {
    return `Your mood patterns show you tend to feel best in mornings and dip around 3-4 PM. I suggest scheduling a short break or walk during that window.`;
  }

  return `Thanks for your input, ${state.user.name || 'friend'}. I'm analyzing your data to provide better recommendations. Try asking about your schedule, habits, or mood patterns.`;
}

// ===== SETTINGS =====
function toggleSettings() {
  document.getElementById('settings-panel').classList.toggle('hidden');
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
  document.getElementById('modal-title').textContent = t('addTask');
  document.getElementById('modal-body').innerHTML = `
    <div class="form-group">
      <label>${t('title')}</label>
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
    <button class="btn-primary" onclick="addTask()" style="width:100%">${t('add')}</button>
  `;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function openAddHabit() {
  document.getElementById('modal-title').textContent = t('newHabit');
  document.getElementById('modal-body').innerHTML = `
    <div class="form-group">
      <label>HABIT NAME</label>
      <input type="text" id="new-habit-name" placeholder="What do you want to track?">
    </div>
    <div class="form-group">
      <label>ICON (emoji)</label>
      <input type="text" id="new-habit-icon" placeholder="🏋️" maxlength="2">
    </div>
    <button class="btn-primary" onclick="addHabit()" style="width:100%">${t('add')}</button>
  `;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function addTask() {
  const name = document.getElementById('new-task-name').value.trim();
  const time = document.getElementById('new-task-time').value;
  const cat = document.getElementById('new-task-cat').value;
  if (!name) { shakeElement(document.getElementById('new-task-name')); return; }

  const hour = parseInt(time.split(':')[0]);
  const block = document.querySelector(`.time-block[data-hour="${hour}"]`);
  if (block) {
    const slot = block.querySelector('.time-slot');
    slot.className = `time-slot task-block ${cat}`;
    slot.textContent = name;
  }
  closeModal();
  autoSave();
}

function addHabit() {
  const name = document.getElementById('new-habit-name').value.trim();
  const icon = document.getElementById('new-habit-icon').value.trim() || '⭐';
  if (!name) { shakeElement(document.getElementById('new-habit-name')); return; }

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
  autoSave();
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

// ===== STYLE =====
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    50% { transform: translateX(8px); }
    75% { transform: translateX(-4px); }
  }
  .context-menu {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    min-width: 180px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  }
  .ctx-header {
    padding: 8px 12px;
    font-weight: 600;
    font-size: 13px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 4px;
    color: var(--neon-cyan);
  }
  .ctx-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 10px 12px;
    background: none;
    border: none;
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
  }
  .ctx-item:hover { background: var(--bg-card); }
  .ctx-item.danger { color: var(--neon-pink); }
  .time-slot.task-block { cursor: pointer; transition: all 0.3s; }
  .time-slot.task-block:active { transform: scale(0.98); }
  .time-slot.task-block.completed { opacity: 0.5; text-decoration: line-through; }
  .lang-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 32px; }
  .lang-card {
    display: flex; align-items: center; gap: 12px;
    padding: 16px; background: var(--bg-secondary); border: 1px solid var(--border);
    border-radius: 8px; cursor: pointer; transition: all 0.3s;
    color: var(--text-primary); font-family: var(--font-body);
  }
  .lang-card:hover { border-color: var(--neon-purple); }
  .lang-card.active { border-color: var(--neon-cyan); background: rgba(5, 217, 232, 0.08);
    box-shadow: 0 0 15px rgba(5, 217, 232, 0.15); }
  .lang-flag { font-size: 28px; }
  .lang-name { font-size: 16px; font-weight: 500; }
`;
document.head.appendChild(style);
