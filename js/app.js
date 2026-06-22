/* ========================================
   NOX — Main Application Logic v3
   Full auto i18n via DOM text scanning
   ======================================== */

// ===== ENGLISH→TRANSLATION MAP =====
// Each key is the exact English text as it appears in HTML
const TR = {
  ru: {
    'Welcome to your darkness': 'Добро пожаловать в твою тьму',
    'CHOOSE LANGUAGE': 'ВЫБЕРИ ЯЗЫК',
    'Select your preferred interface language.': 'Выбери язык интерфейса.',
    'WHO ARE YOU?': 'КТО ТЫ?',
    'Tell us about yourself.': 'Расскажи о себе. NOX подстроится под тебя.',
    'YOUR NAME': 'ИМЯ', 'AGE': 'ВОЗРАСТ',
    'YOUR TIMEZONE': 'ЧАСОВОЙ ПОЯС', 'Select timezone': 'Выбери пояс',
    'YOUR GOALS': 'ТВОИ ЦЕЛИ',
    'What do you want to achieve? Select all that apply.': 'Чего ты хочешь достичь? Выбери всё.',
    'Productivity': 'Продуктивность', 'Health & Fitness': 'Здоровье и спорт',
    'Learning': 'Обучение', 'Mental Peace': 'Ментальный покой',
    'Finance': 'Финансы', 'Social Life': 'Общение',
    'Creativity': 'Креативность', 'Better Sleep': 'Лучший сон',
    'CURRENT HABITS': 'ТЕКУЩИЕ ПРИВЫЧКИ',
    'Be honest. NOX doesn\'t judge': 'Будь честен. NOX не судит',
    'it adapts.': '— он адаптируется.',
    'Morning routine?': 'Утренняя рутина?',
    'Exercise regularly?': 'Занимаешься спортом?',
    'Track your sleep?': 'Отслеживаешь сон?',
    'Meditation or mindfulness?': 'Медитация или осознанность?',
    'Screen time before bed?': 'Гаджеты перед сном?',
    'Yes': 'Да', 'No': 'Нет', 'Sometimes': 'Иногда',
    'IN YOUR OWN WORDS': 'СВОИМИ СЛОВАМИ',
    'Tell us anything about yourself. Your life, your challenges, your dreams.':
      'Расскажи что угодно о себе. Твоя жизнь, вызовы, мечты.',
    'YOUR DAILY ENERGY PEAK': 'ПИК ТВОЕЙ ЭНЕРГИИ',
    'INITIALIZE': 'ИНИЦИАЛИЗАЦИЯ',
    'NOX will now calibrate to your profile.': 'NOX калибруется под твой профиль.',
    'NAME': 'ИМЯ', 'TIMEZONE': 'ПОЯС', 'GOALS': 'ЦЕЛИ', 'ENERGY PEAK': 'ПИК ЭНЕРГИИ',
    'CONTINUE →': 'ДАЛЕЕ →',
    '◆ LAUNCH NOX': '◆ ЗАПУСТИТЬ NOX',
    'Good morning,': 'Доброе утро,',
    'Good afternoon,': 'Добрый день,',
    'Good evening,': 'Добрый вечер,',
    'Dashboard': 'Главная', 'Schedule': 'Расписание', 'Habits': 'Привычки',
    'Journal': 'Дневник', 'Games': 'Игры', 'Social': 'Соцсеть', 'Chain': 'Блокчейн',
    "TODAY'S PROGRESS": 'ПРОГРЕСС ЗА ДЕНЬ',
    'NEXT UP': 'ДАЛЕЕ',
    'HOW ARE YOU FEELING?': 'КАК ТЫ ЧУВСТВУЕШЬ СЕБЯ?',
    'Tap to log your mood': 'Нажми чтобы отметить настроение',
    'DAY STREAK': 'ДНЕЙ ПОДРЯД',
    'QUICK NOTE': 'БЫСТРАЯ ЗАМЕТКА',
    'SAVE': 'СОХРАНИТЬ', 'SAVED ✓': 'СОХРАНЕНО ✓',
    'VIEW FULL →': 'ПОЛНОСТЬЮ →',
    '+ ADD TASK': '+ ДОБАВИТЬ ЗАДАЧУ',
    '+ NEW HABIT': '+ НОВАЯ ПРИВЫЧКА',
    '+ NEW ENTRY': '+ НОВАЯ ЗАПИСЬ',
    'TITLE': 'ЗАГОЛОВОК', 'MOOD': 'НАСТРОЕНИЕ',
    'CANCEL': 'ОТМЕНА',
    'WEEKLY OVERVIEW': 'ИТОГИ НЕДЕЛИ',
    'COMING SOON': 'СКОРО',
    'Memory Chain': 'Цепь памяти', 'Reaction Speed': 'Скорость реакции',
    'Focus Zone': 'Зона фокуса', 'Shadow Typist': 'Теневой печатник',
    'Train your memory': 'Тренируй память', 'Test your reflexes': 'Проверь рефлексы',
    'Deep concentration': 'Глубокая концентрация', 'Type to survive': 'Печатай чтобы выжить',
    '✕ CLOSE': '✕ ЗАКРЫТЬ', 'SETTINGS': 'НАСТРОЙКИ',
    'Reset All Data': 'Сбросить все данные', 'RESET': 'СБРОС',
    'Dark Mode': 'Тёмная тема', 'Notifications': 'Уведомления',
    'AI Suggestions': 'ИИ-рекомендации', 'Sound Effects': 'Звуки',
    'ADD': 'ДОБАВИТЬ',
    'Wallet Connection': 'Подключение кошелька',
    'Mining Rewards': 'Майнинг',
    'Decentralized Profile': 'Децентрализованный профиль',
    'Drink Water': 'Пить воду', 'Morning Run': 'Утренняя пробежка',
    'Read 30 min': 'Читать 30 мин', 'Meditate': 'Медитировать',
    'Done': 'Выполнено', 'Not started': 'Не начато', '3/5 glasses': '3/5 стаканов',
    'Peak Deep Work': '🧠 Глубокая работа', 'Deep Work': 'Глубокая работа',
    'Lunch': 'Обед', 'Exercise': 'Тренировка', 'Learning': 'Обучение',
    'Free Time': 'Свободное время', 'Wind Down': 'Расслабление', 'Sleep': 'Сон',
    'Morning Routine': 'Утренняя рутина',
    'First day with NOX': 'Первый день с NOX',
    'motivation': 'мотивация', 'new-beginnings': 'новое-начало',
    'Language': 'Язык', 'Language': 'Язык',
  },
  uk: {
    'Welcome to your darkness': 'Ласкаво просимо до своєї темряви',
    'CHOOSE LANGUAGE': 'ОБЕРІТЬ МОВУ',
    'Select your preferred interface language.': 'Оберіть мову інтерфейсу.',
    'WHO ARE YOU?': 'ХТО ТИ?',
    'Tell us about yourself.': 'Розкажи про себе. NOX підлаштується під тебе.',
    'YOUR NAME': 'ІМ\'Я', 'AGE': 'ВІК',
    'YOUR TIMEZONE': 'ЧАСОВИЙ ПОЯС', 'Select timezone': 'Оберіть пояс',
    'YOUR GOALS': 'ТВОЇ ЦІЛІ',
    'What do you want to achieve? Select all that apply.': 'Чого ви хочете досягти? Оберіть все.',
    'Productivity': 'Продуктивність', 'Health & Fitness': 'Здоров\'я і спорт',
    'Learning': 'Навчання', 'Mental Peace': 'Ментальний спокій',
    'Finance': 'Фінанси', 'Social Life': 'Спілкування',
    'Creativity': 'Креативність', 'Better Sleep': 'Кращий сон',
    'CURRENT HABITS': 'ПОТОЧНІ ЗВИЧКИ',
    'Be honest. NOX doesn\'t judge': 'Будь чесним. NOX не судить',
    'it adapts.': '— він адаптується.',
    'Morning routine?': 'Ранкова рутина?',
    'Exercise regularly?': 'Займаєтесь спортом?',
    'Track your sleep?': 'Відстежуєте сон?',
    'Meditation or mindfulness?': 'Медитація чи усвідомленість?',
    'Screen time before bed?': 'Гаджети перед сном?',
    'Yes': 'Так', 'No': 'Ні', 'Sometimes': 'Іноді',
    'IN YOUR OWN WORDS': 'СВОЇМИ СЛОВАМИ',
    'Tell us anything about yourself. Your life, your challenges, your dreams.':
      'Розкажіть що завгодно. Ваше життя, виклики, мрії.',
    'YOUR DAILY ENERGY PEAK': 'ПІК ВАШОЇ ЕНЕРГІЇ',
    'INITIALIZE': 'ІНІЦІАЛІЗАЦІЯ',
    'NOX will now calibrate to your profile.': 'NOX калібрується під ваш профіль.',
    'NAME': 'ІМ\'Я', 'TIMEZONE': 'ПОЯС', 'GOALS': 'ЦІЛІ', 'ENERGY PEAK': 'ПІК ЕНЕРГІЇ',
    'CONTINUE →': 'ДАЛІ →',
    '◆ LAUNCH NOX': '◆ ЗАПУСТИТИ NOX',
    'Good morning,': 'Доброго ранку,',
    'Good afternoon,': 'Доброго дня,',
    'Good evening,': 'Доброго вечора,',
    'Dashboard': 'Головна', 'Schedule': 'Розклад', 'Habits': 'Звички',
    'Journal': 'Щоденник', 'Games': 'Ігри', 'Social': 'Соцмережа', 'Chain': 'Блокчейн',
    "TODAY'S PROGRESS": 'ПРОГРЕС ЗА ДЕНЬ',
    'NEXT UP': 'ДАЛІ',
    'HOW ARE YOU FEELING?': 'ЯК ТИ ПОЧУВАЄШЬСЯ?',
    'Tap to log your mood': 'Натисни щоб позначити настрій',
    'DAY STREAK': 'ДНІВ ПІДРЯД',
    'QUICK NOTE': 'ШВИДКА НОТАТКА',
    'SAVE': 'ЗБЕРЕГТИ', 'SAVED ✓': 'ЗБЕРЕЖЕНО ✓',
    'VIEW FULL →': 'ПОВНІСТЮ →',
    '+ ADD TASK': '+ ДОДАТИ ЗАВДАННЯ',
    '+ NEW HABIT': '+ НОВА ЗВИЧКА',
    '+ NEW ENTRY': '+ НОВИЙ ЗАПИС',
    'TITLE': 'ЗАГОЛОВОК', 'MOOD': 'НАСТРІЙ',
    'CANCEL': 'СКАСУВАТИ',
    'WEEKLY OVERVIEW': 'ПІДСУМКИ ТИЖНЯ',
    'COMING SOON': 'СКОРО',
    'Memory Chain': 'Ланцюг пам\'яті', 'Reaction Speed': 'Швидкість реакції',
    'Focus Zone': 'Зона фокусу', 'Shadow Typist': 'Тіньовий друкар',
    'Train your memory': 'Тренуй пам\'ять', 'Test your reflexes': 'Перевір рефлекси',
    'Deep concentration': 'Глибока концентрація', 'Type to survive': 'Друкуй щоб вижити',
    '✕ CLOSE': '✕ ЗАКРИТИ', 'SETTINGS': 'НАЛАШТУВАННЯ',
    'Reset All Data': 'Скинути всі дані', 'RESET': 'СКИНУТИ',
    'ADD': 'ДОДАТИ',
    'Morning Routine': 'Ранкова рутина',
  }
};

let state = {
  user: { name:'', age:'', timezone:'', goals:[], story:'', energyPeak:'', mood:null,
    streak:7, habits:[], notes:[], journal:[], lang:'en', recurringTasks:[], completedTasks:{} },
  currentStep: 0, currentSection: 'dashboard', originalTexts: new Map(),
};

// ===== SCAN & STORE ORIGINAL TEXTS =====
function storeOriginalTexts() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    const text = node.textContent.trim();
    if (text && text.length > 1) {
      state.originalTexts.set(node, text);
    }
  }
}

// ===== APPLY TRANSLATIONS =====
function applyTranslations() {
  const lang = state.user.lang;
  const map = TR[lang] || {};

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    const orig = state.originalTexts.get(node);
    if (orig && map[orig]) {
      node.textContent = node.textContent.replace(orig, map[orig]);
    }
  }

  // Also handle elements whose text was not in originalTexts (dynamic)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (map[key]) el.textContent = map[key];
  });
}

function switchLang(lang) {
  state.user.lang = lang;
  autoSave();
  // Reset all text nodes to original, then apply translations
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  const origMap = state.originalTexts;
  while (node = walker.nextNode()) {
    const orig = origMap.get(node);
    if (orig) node.textContent = orig;
  }
  if (lang !== 'en') applyTranslations();
  // Update dynamic content
  updateGreeting();
}

const T = (k) => i18n_en[k] || k;
const i18n_en = {};

const quotes = {
  en: ["The only way out is through.","Darkness is the beginning of something new.","Embrace the chaos. Find your order.","You are the architect of your reality.","In the void, we find our purpose.","The night is darkest before the dawn.","Your habits shape your destiny.","Growth begins where comfort ends."],
  ru: ["Единственный выход — через.","Тьма — начало чего-то нового.","Прими хаос. Найди свой порядок.","Ты — архитектор своей реальности.","В пустоте мы находим цель.","Тьма всего ночь перед рассветом.","Твои привычки формируют судьбу.","Рост начинается за пределами комфорта."],
  uk: ["Єдиний вихід — через.","Темрява — це початок чогось нового.","Прийми хаос. Знайди свій порядок.","Ти — архітектор своєї реальності.","У порожнечі ми знаходимо мету.","Темрява — це лише ніч перед світанком.","Твої звички формують твою долю.","Зростання починається за межами комфорту."],
};

function getQuote() { const a = quotes[state.user.lang] || quotes.en; return a[Math.floor(Math.random()*a.length)]; }

function autoSave() { if(state.user.name) localStorage.setItem('nox_user', JSON.stringify(state.user)); }

function updateClock() {
  const n=new Date(), t=n.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:false});
  const d=n.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
  const el=document.getElementById('current-time');
  if(el) el.textContent=`${d} · ${t}`;
}

// ===== LANGUAGE =====
function selectLang(btn) {
  document.querySelectorAll('.lang-card').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  state.user.lang = btn.dataset.lang;
  autoSave();
}

function changeLang(lang, btn) {
  document.querySelectorAll('.settings-lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  switchLang(lang);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Store original English text for ALL nodes
  storeOriginalTexts();

  setTimeout(() => {
    document.getElementById('boot-screen').style.display = 'none';
    const saved = localStorage.getItem('nox_user');
    if (saved) {
      try {
        state.user = {...state.user,...JSON.parse(saved)};
        if (state.user.name) { showApp(); return; }
      } catch(e) {}
    }
    document.getElementById('onboarding').classList.remove('hidden');
  }, 3500);
  updateClock(); setInterval(updateClock, 1000);
  setInterval(autoSave, 30000);
  setupLongPress();
  setupDashboardTasks();
});

// ===== ONBOARDING =====
function nextStep() {
  const steps=document.querySelectorAll('.onboard-step');
  const dots=document.querySelectorAll('.step-dot');
  collectStepData(state.currentStep);
  if(state.currentStep===1){const n=document.getElementById('user-name').value.trim();if(!n){shakeElement(document.getElementById('user-name'));return;}}
  steps[state.currentStep].classList.remove('active');
  dots[state.currentStep].classList.remove('active');
  dots[state.currentStep].classList.add('done');
  state.currentStep++;
  if(state.currentStep<steps.length){steps[state.currentStep].classList.add('active');dots[state.currentStep].classList.add('active');}
  if(state.currentStep===steps.length-1) populateSummary();
}

function collectStepData(step) {
  switch(step){
    case 0: break;
    case 1: state.user.name=document.getElementById('user-name').value.trim();state.user.age=document.getElementById('user-age').value;state.user.timezone=document.getElementById('user-timezone').value; break;
    case 2: state.user.goals=Array.from(document.querySelectorAll('.goal-card.selected')).map(c=>c.dataset.goal); break;
    case 3: state.user.habits=[];document.querySelectorAll('.habit-item').forEach(i=>{const l=i.querySelector('label').textContent;const a=i.querySelector('.toggle-btn.active');state.user.habits.push({q:l,v:a?a.dataset.value:'no'});});break;
    case 4: state.user.story=document.getElementById('user-story').value;state.user.energyPeak=document.getElementById('energy-peak').value;break;
  }
}

function toggleGoal(el){el.classList.toggle('selected');}
function selectToggle(btn){btn.parentElement.querySelectorAll('.toggle-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');}
function shakeElement(el){el.style.animation='none';el.offsetHeight;el.style.animation='shake 0.5s ease';el.style.borderColor='var(--neon-pink)';setTimeout(()=>{el.style.borderColor='';},2000);}

function populateSummary(){
  document.getElementById('sum-name').textContent=state.user.name||'—';
  document.getElementById('sum-age').textContent=state.user.age||'—';
  document.getElementById('sum-tz').textContent=state.user.timezone||'—';
  document.getElementById('sum-goals').textContent=state.user.goals.length>0?state.user.goals.join(', '):'—';
  document.getElementById('sum-energy').textContent=state.user.energyPeak||'—';
}

function launchNox(){collectStepData(4);localStorage.setItem('nox_user',JSON.stringify(state.user));showApp();}

function showApp(){
  document.getElementById('onboarding').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  const s=localStorage.getItem('nox_user');if(s){try{state.user={...state.user,...JSON.parse(s)};}catch(e){}}
  document.getElementById('greeting-name').textContent=state.user.name||'User';
  document.getElementById('avatar-letter').textContent=(state.user.name||'N')[0].toUpperCase();
  if(state.user.lang!=='en') applyTranslations();
  updateGreeting();updateProgressRing(65);updateStreak(state.user.streak);
  document.getElementById('greeting-quote').textContent=getQuote();
  restoreCompletedTasks();
}

function updateGreeting(){
  const h=new Date().getHours(),el=document.getElementById('greeting-msg');
  const map={ru:{m:'Доброе утро,',a:'Добрый день,',e:'Добрый вечер,'},uk:{m:'Доброго ранку,',a:'Доброго дня,',e:'Доброго вечора,'},en:{m:'Good morning,',a:'Good afternoon,',e:'Good evening,'}};
  const l=map[state.user.lang]||map.en;
  if(h<12)el.textContent=l.m;else if(h<18)el.textContent=l.a;else el.textContent=l.e;
}

function updateProgressRing(pct){
  const ring=document.getElementById('daily-progress-ring');if(!ring)return;
  const c=339.292,o=c-(pct/100)*c;ring.style.strokeDashoffset=o;
  const svg=ring.closest('svg');let d=svg.querySelector('defs');
  if(!d){d=document.createElementNS('http://www.w3.org/2000/svg','defs');d.innerHTML='<linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#b829dd"/><stop offset="100%" style="stop-color:#05d9e8"/></linearGradient>';svg.prepend(d);}
  ring.style.stroke='url(#neon-gradient)';
  document.getElementById('daily-pct').textContent=pct+'%';
}

function updateStreak(count){document.getElementById('streak-count').textContent=count;document.getElementById('streak-flames').textContent='🔥'.repeat(Math.min(count,10));}

// ===== MOOD =====
function selectMood(btn){
  document.querySelectorAll('.mood-selector:not(.small) .mood-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');state.user.mood=btn.dataset.mood;autoSave();
  const hints={ru:{great:'Мощь! Держи!',good:'Отлично! На верном пути.',neutral:'Стабильно.',low:'Тяжёлый день?',bad:'Всё нормально. Завтра будет лучше.'},en:{great:'Feeling powerful!',good:'Nice! On track.',neutral:'Steady.',low:'Tough day?',bad:'Take it easy.'},uk:{great:'Міць!',good:'Чудово!',neutral:'Стабільно.',low:'Важкий день?',bad:'Все нормально.'}};
  const h=(hints[state.user.lang]||hints.en)[state.user.mood];
  document.getElementById('mood-hint').textContent=h||'';
}
function selectEntryMood(btn){btn.closest('.mood-selector').querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');}

// ===== NAVIGATION =====
function switchSection(s,btn){
  document.querySelectorAll('.section').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('sec-'+s).classList.add('active');
  if(btn)btn.classList.add('active');state.currentSection=s;
}

// ===== SCHEDULE =====
function switchScheduleView(v,btn){document.querySelectorAll('.btn-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');if(v==='custom')generateAISchedule();}

function generateAISchedule(){
  document.querySelectorAll('.time-slot').forEach(s=>{s.className='time-slot empty';s.textContent='';});
  const peak=state.user.energyPeak?parseInt(state.user.energyPeak.split(':')[0]):10;
  const labels={ru:{work:'🧠 Глубокая работа',break:'🍽️ Обед',exercise:'🏃 Тренировка',evening:'🎮 Свободное время',wind:'📖 Расслабление',sleep:'😴 Сон'},uk:{work:'🧠 Глибока робота',break:'🍽️ Обід',exercise:'🏃 Тренування',evening:'🎮 Вільний час',wind:'📖 Розслаблення',sleep:'😴 Сон'},en:{work:'🧠 Deep Work',break:'🍽️ Lunch',exercise:'🏃 Exercise',evening:'🎮 Free Time',wind:'📖 Wind Down',sleep:'😴 Sleep'}};
  const lb=labels[state.user.lang]||labels.en;
  document.querySelectorAll('.time-block').forEach(b=>{
    const h=parseInt(b.dataset.hour),s=b.querySelector('.time-slot');
    if(h===peak-1||h===peak){s.className='time-slot task-block work';s.textContent=lb.work;}
    else if(h===12){s.className='time-slot task-block break';s.textContent=lb.break;}
    else if(h>=peak+3&&h<peak+5){s.className='time-slot task-block exercise';s.textContent=lb.exercise;}
    else if(h>=18&&h<21){s.className='time-slot task-block evening';s.textContent=lb.evening;}
    else if(h===21){s.className='time-slot task-block wind';s.textContent=lb.wind;}
    else if(h>=22||h<6){s.className='time-slot task-block sleep';s.textContent=lb.sleep;}
  });autoSave();
}

// ===== TASK COMPLETION =====
function toggleTaskComplete(slot){
  if(!slot.classList.contains('task-block'))return;
  const b=slot.closest('.time-block'),h=b.dataset.hour;
  const key=`task_${h}_${new Date().toDateString()}`;
  if(slot.classList.contains('completed')){slot.classList.remove('completed');slot.style.opacity='';slot.style.textDecoration='';delete state.user.completedTasks[key];}
  else{slot.classList.add('completed');slot.style.opacity='0.5';slot.style.textDecoration='line-through';state.user.completedTasks[key]=true;}
  autoSave();updateDailyProgress();
}

function setupDashboardTasks(){
  document.addEventListener('click',(e)=>{
    const item=e.target.closest('.task-item');
    if(!item)return;
    const status=item.querySelector('.task-status');if(!status)return;
    if(status.classList.contains('done')){status.classList.remove('done');status.classList.add('pending');status.textContent='○';}
    else{status.classList.remove('pending','active');status.classList.add('done');status.textContent='✓';}
  });
}

function restoreCompletedTasks(){
  const today=new Date().toDateString();
  document.querySelectorAll('.time-slot.task-block').forEach(s=>{
    const b=s.closest('.time-block'),key=`task_${b.dataset.hour}_${today}`;
    if(state.user.completedTasks&&state.user.completedTasks[key]){s.classList.add('completed');s.style.opacity='0.5';s.style.textDecoration='line-through';}
  });updateDailyProgress();
}

function updateDailyProgress(){
  const total=document.querySelectorAll('.time-slot.task-block').length;
  const done=document.querySelectorAll('.time-slot.task-block.completed').length;
  updateProgressRing(total>0?Math.round((done/total)*100):0);
}

// ===== LONG PRESS =====
function setupLongPress(){
  let timer=null;
  document.addEventListener('touchstart',e=>{
    const slot=e.target.closest('.time-slot.task-block');if(!slot)return;
    timer=setTimeout(()=>showTaskMenu(slot),500);
  },{passive:true});
  document.addEventListener('touchend',()=>clearTimeout(timer));
  document.addEventListener('touchmove',()=>clearTimeout(timer));

  document.addEventListener('click',e=>{
    const slot=e.target.closest('.time-slot.task-block');
    if(slot&&!slot.closest('.context-menu'))toggleTaskComplete(slot);
  });
}

function showTaskMenu(slot){
  document.querySelector('.context-menu')?.remove();
  const b=slot.closest('.time-block'),h=b.dataset.hour,name=slot.textContent;
  const labels={ru:{edit:'✏️ Редактировать',recurring:'🔄 Сделать регулярной',del:'🗑️ Удалить'},uk:{edit:'✏️ Редагувати',recurring:'🔄 Зробити регулярним',del:'🗑️ Видалити'},en:{edit:'✏️ Edit',recurring:'🔄 Make Recurring',del:'🗑️ Delete'}};
  const lb=labels[state.user.lang]||labels.en;
  const m=document.createElement('div');m.className='context-menu';
  m.innerHTML=`<div class="ctx-header">${name}</div><button class="ctx-item" onclick="editTask('${h}')">${lb.edit}</button><button class="ctx-item" onclick="makeRecurring('${h}')">${lb.recurring}</button><button class="ctx-item danger" onclick="deleteTask('${h}')">${lb.del}</button>`;
  const r=slot.getBoundingClientRect();
  m.style.cssText=`position:fixed;top:${r.top+window.scrollY}px;left:${Math.min(r.left,window.innerWidth-200)}px;z-index:500;`;
  document.body.appendChild(m);
  setTimeout(()=>{document.addEventListener('click',function cm(e){if(!m.contains(e.target)){m.remove();document.removeEventListener('click',cm);}});},10);
}

function editTask(hour){
  document.querySelector('.context-menu')?.remove();
  const b=document.querySelector(`.time-block[data-hour="${hour}"]`),s=b.querySelector('.time-slot'),cur=s.textContent;
  document.getElementById('modal-title').textContent='Edit';
  document.getElementById('modal-body').innerHTML=`<div class="form-group"><label>TITLE</label><input type="text" id="edit-task-name" value="${cur}"></div><div class="form-group"><label>TIME</label><input type="time" id="edit-task-time" value="${String(hour).padStart(2,'0')}:00"></div><button class="btn-primary" onclick="saveEditTask('${hour}')" style="width:100%">${state.user.lang==='ru'?'СОХРАНИТЬ':'SAVE'}</button>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function saveEditTask(oldH){
  const n=document.getElementById('edit-task-name').value.trim(),t=document.getElementById('edit-task-time').value;
  if(!n)return;
  const o=document.querySelector(`.time-block[data-hour="${oldH}"]`);
  if(o){const s=o.querySelector('.time-slot');s.className='time-slot empty';s.textContent='';s.style.opacity='';s.style.textDecoration='';}
  const newH=parseInt(t.split(':')[0]),nb=document.querySelector(`.time-block[data-hour="${newH}"]`);
  if(nb){const ns=nb.querySelector('.time-slot');ns.className=`time-slot task-block ${getCat(n)}`;ns.textContent=n;}
  closeModal();autoSave();
}

function getCat(n){const l=n.toLowerCase();if(l.match(/work|deep/))return'work';if(l.match(/exerc|run|gym/))return'exercise';if(l.match(/learn|study|read/))return'learning';if(l.match(/lunch|break|food/))return'break';if(l.match(/sleep|bed/))return'sleep';return'work';}

function makeRecurring(hour){
  document.querySelector('.context-menu')?.remove();
  const b=document.querySelector(`.time-block[data-hour="${hour}"]`),s=b.querySelector('.time-slot');
  if(!state.user.recurringTasks)state.user.recurringTasks=[];
  if(!state.user.recurringTasks.find(r=>r.hour==hour)){state.user.recurringTasks.push({hour:parseInt(hour),name:s.textContent});autoSave();alert('Регулярная задача создана!');}
}

function deleteTask(hour){
  document.querySelector('.context-menu')?.remove();
  const b=document.querySelector(`.time-block[data-hour="${hour}"]`),s=b.querySelector('.time-slot');
  s.className='time-slot empty';s.textContent='';s.style.opacity='';s.style.textDecoration='';
  delete state.user.completedTasks[`task_${hour}_${new Date().toDateString()}`];
  autoSave();updateDailyProgress();
}

// ===== HABITS =====
function toggleHabitCheck(btn){btn.classList.toggle('done');autoSave();}

// ===== JOURNAL =====
function openNewEntry(){document.getElementById('new-entry-form').classList.remove('hidden');}
function closeNewEntry(){document.getElementById('new-entry-form').classList.add('hidden');document.getElementById('entry-title').value='';document.getElementById('entry-body').value='';document.querySelectorAll('.journal-form .mood-btn').forEach(b=>b.classList.remove('selected'));}

function saveEntry(){
  const title=document.getElementById('entry-title').value.trim(),body=document.getElementById('entry-body').value.trim();
  const m=document.querySelector('.journal-form .mood-btn.selected');
  if(!title||!body)return;
  const entry={title,body,mood:m?m.textContent:'😐',date:new Date(),tags:body.split(' ').filter(w=>w.length>5).slice(0,2)};
  state.user.journal.unshift(entry);autoSave();renderJournalEntry(entry);closeNewEntry();
}

function renderJournalEntry(entry){
  const c=document.getElementById('journal-entries'),n=entry.date;
  const months=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const d=document.createElement('div');d.className='journal-entry';
  d.innerHTML=`<div class="entry-date"><span class="entry-day">${n.getDate()}</span><span class="entry-month">${months[n.getMonth()]}</span></div><div class="entry-content"><h4>${entry.title}</h4><p>${entry.body.substring(0,150)}${entry.body.length>150?'...':''}</p><div class="entry-tags">${entry.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div><div class="entry-mood">${entry.mood}</div>`;
  c.prepend(d);
}

// ===== QUICK NOTE =====
function saveQuickNote(){
  const note=document.getElementById('quick-note').value.trim();if(!note)return;
  state.user.notes.unshift({text:note,time:new Date()});autoSave();
  document.getElementById('quick-note').value='';
  const btn=event.target,sv=state.user.lang==='ru'?'СОХРАНЕНО ✓':'SAVED ✓',sl=state.user.lang==='ru'?'СОХРАНИТЬ':'SAVE';
  btn.textContent=sv;btn.style.borderColor='var(--neon-green)';btn.style.color='var(--neon-green)';
  setTimeout(()=>{btn.textContent=sl;btn.style.borderColor='';btn.style.color='';},1500);
}

// ===== AI =====
function toggleAIPanel(){document.getElementById('ai-panel').classList.toggle('hidden');document.getElementById('settings-panel').classList.add('hidden');}

function sendAI(){
  const input=document.getElementById('ai-input'),msg=input.value.trim();if(!msg)return;
  const mc=document.getElementById('ai-messages');
  const ud=document.createElement('div');ud.className='ai-msg user';ud.textContent=msg;mc.appendChild(ud);input.value='';
  setTimeout(()=>{const r=genAI(msg),ad=document.createElement('div');ad.className='ai-msg ai';ad.textContent=r;mc.appendChild(ad);mc.scrollTop=mc.scrollHeight;},800);
  mc.scrollTop=mc.scrollHeight;
}

function genAI(m){
  const l=m.toLowerCase();
  if(l.match(/schedule|расписан/))return`Based on your energy peak at ${state.user.energyPeak||'10:00'}, I recommend scheduling demanding tasks between 9-12.`;
  if(l.match(/habit|привыч/))return`You've been consistent with 2 of 4 tracked habits this week. Try setting hourly reminders for water.`;
  if(l.match(/mood|настроен/))return`Your mood dips around 3-4 PM. I suggest a short break during that window.`;
  return`Thanks for your input, ${state.user.name||'friend'}. Ask about schedule, habits, or mood for insights.`;
}

// ===== SETTINGS =====
function toggleSettings(){
  document.getElementById('settings-panel').classList.toggle('hidden');
  document.getElementById('ai-panel').classList.add('hidden');
  if(!document.getElementById('settings-panel').classList.contains('hidden')){
    document.querySelectorAll('.settings-lang-btn').forEach(b=>{b.classList.toggle('active',b.dataset.lang===state.user.lang);});
  }
}
function resetData(){if(confirm('Delete all NOX data?')){localStorage.clear();location.reload();}}

// ===== MODAL =====
function openAddTask(){
  document.getElementById('modal-title').textContent=state.user.lang==='ru'?'+ ДОБАВИТЬ ЗАДАЧУ':'+ ADD TASK';
  document.getElementById('modal-body').innerHTML=`<div class="form-group"><label>${state.user.lang==='ru'?'НАЗВАНИЕ':'TITLE'}</label><input type="text" id="new-task-name"></div><div class="form-group"><label>TIME</label><input type="time" id="new-task-time" value="09:00"></div><div class="form-group"><label>CATEGORY</label><select id="new-task-cat"><option value="work">${state.user.lang==='ru'?'Работа':'Work'}</option><option value="exercise">${state.user.lang==='ru'?'Спорт':'Exercise'}</option><option value="learning">${state.user.lang==='ru'?'Учёба':'Learning'}</option><option value="break">${state.user.lang==='ru'?'Перерыв':'Break'}</option><option value="evening">${state.user.lang==='ru'?'Вечер':'Free Time'}</option></select></div><button class="btn-primary" onclick="addTask()" style="width:100%">${state.user.lang==='ru'?'ДОБАВИТЬ':'ADD'}</button>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function openAddHabit(){
  document.getElementById('modal-title').textContent=state.user.lang==='ru'?'+ НОВАЯ ПРИВЫЧКА':'+ NEW HABIT';
  document.getElementById('modal-body').innerHTML=`<div class="form-group"><label>${state.user.lang==='ru'?'НАЗВАНИЕ':'NAME'}</label><input type="text" id="new-habit-name"></div><div class="form-group"><label>${state.user.lang==='ru'?'ИКОНКА':'ICON'}</label><input type="text" id="new-habit-icon" value="⭐" maxlength="2"></div><button class="btn-primary" onclick="addHabit()" style="width:100%">${state.user.lang==='ru'?'ДОБАВИТЬ':'ADD'}</button>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function addTask(){
  const n=document.getElementById('new-task-name').value.trim(),t=document.getElementById('new-task-time').value,c=document.getElementById('new-task-cat').value;
  if(!n){shakeElement(document.getElementById('new-task-name'));return;}
  const h=parseInt(t.split(':')[0]),b=document.querySelector(`.time-block[data-hour="${h}"]`);
  if(b){const s=b.querySelector('.time-slot');s.className=`time-slot task-block ${c}`;s.textContent=n;}
  closeModal();autoSave();
}

function addHabit(){
  const n=document.getElementById('new-habit-name').value.trim(),icon=document.getElementById('new-habit-icon').value.trim()||'⭐';
  if(!n){shakeElement(document.getElementById('new-habit-name'));return;}
  const g=document.getElementById('habits-grid'),card=document.createElement('div');card.className='habit-card';
  card.innerHTML=`<div class="habit-icon">${icon}</div><div class="habit-info"><h4>${n}</h4><div class="habit-progress"><div class="habit-bar"><div class="habit-bar-fill" style="width:0%"></div></div><span>0%</span></div></div><button class="habit-check" onclick="toggleHabitCheck(this)">✓</button>`;
  g.appendChild(card);closeModal();autoSave();
}

function closeModal(){document.getElementById('modal-overlay').classList.add('hidden');}

// ===== SOCIAL =====
function toggleLike(btn){btn.classList.toggle('liked');const t=btn.textContent,n=parseInt(t.match(/\d+/)[0]);btn.textContent=btn.classList.contains('liked')?`♥ ${n+1}`:`♡ ${n-1}`;}

// ===== EXTRAS =====
const style=document.createElement('style');
style.textContent=`@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}50%{transform:translateX(8px)}75%{transform:translateX(-4px)}}
.context-menu{background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;padding:8px;min-width:180px;box-shadow:0 8px 32px rgba(0,0,0,0.5)}
.ctx-header{padding:8px 12px;font-weight:600;font-size:13px;border-bottom:1px solid var(--border);margin-bottom:4px;color:var(--neon-cyan)}
.ctx-item{display:flex;align-items:center;gap:8px;width:100%;padding:10px 12px;background:none;border:none;color:var(--text-primary);font-family:var(--font-body);font-size:14px;cursor:pointer;border-radius:4px;transition:background 0.2s}
.ctx-item:hover{background:var(--bg-card)}.ctx-item.danger{color:var(--neon-pink)}
.time-slot.task-block{cursor:pointer;transition:all 0.3s}.time-slot.task-block:active{transform:scale(0.98)}
.task-item{cursor:pointer;transition:all 0.2s}.task-item:active{transform:scale(0.98)}
.lang-grid{display:grid;grid-template-columns:1fr;gap:12px;margin-bottom:32px}
.lang-card{display:flex;align-items:center;gap:12px;padding:16px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;cursor:pointer;transition:all 0.3s;color:var(--text-primary);font-family:var(--font-body)}
.lang-card:hover{border-color:var(--neon-purple)}.lang-card.active{border-color:var(--neon-cyan);background:rgba(5,217,232,0.08);box-shadow:0 0 15px rgba(5,217,232,0.15)}
.lang-flag{font-size:28px}.lang-name{font-size:16px;font-weight:500}
.settings-lang-row{display:flex;gap:6px}
.settings-lang-btn{padding:6px 10px;background:var(--bg-secondary);border:1px solid var(--border);color:var(--text-secondary);border-radius:4px;cursor:pointer;font-family:var(--font-mono);font-size:11px;letter-spacing:1px;transition:all 0.3s}
.settings-lang-btn.active{border-color:var(--neon-cyan);color:var(--neon-cyan);background:rgba(5,217,232,0.08)}
.settings-lang-btn:hover{border-color:var(--neon-purple)}`;
document.head.appendChild(style);
