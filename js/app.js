/* ========================================
   NOX — Main Application Logic v2
   Fixes: full i18n, long press, dashboard tasks
   ======================================== */

const i18n = {
  en: {
    welcome: 'Welcome to your darkness', chooseLang: 'CHOOSE LANGUAGE',
    selectLang: 'Select your preferred interface language.',
    whoAreYou: 'WHO ARE YOU?', tellAbout: 'Tell us about yourself. We\'ll shape NOX around you.',
    yourName: 'YOUR NAME', enterName: 'Enter your name', age: 'AGE', yourAge: 'Your age',
    timezone: 'YOUR TIMEZONE', selectTz: 'Select timezone',
    goals: 'YOUR GOALS', goalsDesc: 'What do you want to achieve? Select all that apply.',
    productivity: 'Productivity', health: 'Health & Fitness', learning: 'Learning',
    mental: 'Mental Peace', finance: 'Finance', social: 'Social Life',
    creativity: 'Creativity', sleep: 'Better Sleep',
    habits: 'CURRENT HABITS', habitsDesc: 'Be honest. NOX doesn\'t judge — it adapts.',
    morningRoutine: 'Morning routine?', exercise: 'Exercise regularly?',
    trackSleep: 'Track your sleep?', meditation: 'Meditation or mindfulness?',
    screenTime: 'Screen time before bed?',
    ownWords: 'IN YOUR OWN WORDS',
    ownWordsDesc: 'Tell us anything about yourself. Your life, your challenges, your dreams.',
    energyPeak: 'YOUR DAILY ENERGY PEAK',
    initialize: 'INITIALIZE', initDesc: 'NOX will now calibrate to your profile.',
    launch: '◆ LAUNCH NOX', continue: 'CONTINUE →',
    greeting_m: 'Good morning,', greeting_a: 'Good afternoon,', greeting_e: 'Good evening,',
    dashboard: 'Dashboard', schedule: 'Schedule', habits_nav: 'Habits',
    journal: 'Journal', games: 'Games', social: 'Social', chain: 'Chain',
    progress: "TODAY'S PROGRESS", nextUp: 'NEXT UP', moodTitle: 'HOW ARE YOU FEELING?',
    moodHint: 'Tap to log your mood', streak: 'DAY STREAK', quickNote: 'QUICK NOTE',
    save: 'SAVE', saved: 'SAVED ✓', viewFull: 'VIEW FULL →',
    addTask: '+ ADD TASK', newHabit: '+ NEW HBIT', newEntry: '+ NEW ENTRY',
    title: 'TITLE', mood: 'MOOD', saveEntry: 'SAVE', cancel: 'CANCEL',
    weekOverview: 'WEEKLY OVERVIEW', comingSoon: 'COMING SOON',
    memory: 'Memory Chain', reaction: 'Reaction Speed',
    focus: 'Focus Zone', typist: 'Shadow Typist',
    trainMem: 'Train your memory', testReflex: 'Test your reflexes',
    deepFocus: 'Deep concentration', typeSurvive: 'Type to survive',
    settings: 'SETTINGS', close: '✕ CLOSE',
    edit: '✏️ Edit', recurring: '🔄 Make Recurring', del: '🗑️ Delete',
    addHabitTitle: '+ NEW HABIT', habitName: 'HABIT NAME',
    habitIcon: 'ICON (emoji)', addBtn: 'ADD',
    wallet: 'Wallet Connection', mining: 'Mining Rewards', profile: 'Decentralized Profile',
  },
  ru: {
    welcome: 'Добро пожаловать в твою тьму', chooseLang: 'ВЫБЕРИ ЯЗЫК',
    selectLang: 'Выбери язык интерфейса.',
    whoAreYou: 'КТО ТЫ?', tellAbout: 'Расскажи о себе. NOX подстроится под тебя.',
    yourName: 'ИМЯ', enterName: 'Введи имя', age: 'ВОЗРАСТ', yourAge: 'Твой возраст',
    timezone: 'ЧАСОВОЙ ПОЯС', selectTz: 'Выбери пояс',
    goals: 'ТВОИ ЦЕЛИ', goalsDesc: ' чего ты хочешь достичь? Выбери всё что подходит.',
    productivity: 'Продуктивность', health: 'Здоровье и спорт', learning: 'Обучение',
    mental: 'Ментальный покой', finance: 'Финансы', social: 'Общение',
    creativity: 'Креативность', sleep: 'Лучший сон',
    habits: 'ТЕКУЩИЕ ПРИВЫЧКИ', habitsDesc: 'Будь честен. NOX не судит — он адаптируется.',
    morningRoutine: 'Утренняя рутина?', exercise: 'Занимаешься спортом?',
    trackSleep: 'Отслеживаешь сон?', meditation: 'Медитация или осознанность?',
    screenTime: 'Гаджеты перед сном?',
    ownWords: 'СВОИМИ СЛОВАМИ',
    ownWordsDesc: 'Расскажи что угодно о себе. Твоя жизнь, вызовы, мечты.',
    energyPeak: 'ПИК ТВОЕЙ ЭНЕРГИИ',
    initialize: 'ИНИЦИАЛИЗАЦИЯ', initDesc: 'NOX сейчас калибруется под твой профиль.',
    launch: '◆ ЗАПУСТИТЬ NOX', continue: 'ДАЛЕЕ →',
    greeting_m: 'Доброе утро,', greeting_a: 'Добрый день,', greeting_e: 'Добрый вечер,',
    dashboard: 'Главная', schedule: 'Расписание', habits_nav: 'Привычки',
    journal: 'Дневник', games: 'Игры', social: 'Соцсеть', chain: 'Блокчейн',
    progress: 'ПРОГРЕСС ЗА ДЕНЬ', nextUp: 'ДАЛЕЕ', moodTitle: 'КАК ТЫ ЧУВСТВУЕШЬ СЕБЯ?',
    moodHint: 'Нажми чтобы отметить настроение', streak: 'ДНЕЙ ПОДРЯД', quickNote: 'БЫСТРАЯ ЗАМЕТКА',
    save: 'СОХРАНИТЬ', saved: 'СОХРАНЕНО ✓', viewFull: 'ПОЛНОСТЬЮ →',
    addTask: '+ ДОБАВИТЬ ЗАДАЧУ', newHabit: '+ НОВАЯ ПРИВЫЧКА', newEntry: '+ НОВАЯ ЗАПИСЬ',
    title: 'ЗАГОЛОВОК', mood: 'НАСТРОЕНИЕ', saveEntry: 'СОХРАНИТЬ', cancel: 'ОТМЕНА',
    weekOverview: 'ИТОГИ НЕДЕЛИ', comingSoon: 'СКОРО',
    memory: 'Цепь памяти', reaction: 'Скорость реакции',
    focus: 'Зона фокуса', typist: 'Теневой печатник',
    trainMem: 'Тренируй память', testReflex: 'Проверь рефлексы',
    deepFocus: 'Глубокая концентрация', typeSurvive: 'Печатай чтобы выжить',
    settings: 'НАСТРОЙКИ', close: '✕ ЗАКРЫТЬ',
    edit: '✏️ Редактировать', recurring: '🔄 Сделать регулярной', del: '🗑️ Удалить',
    addHabitTitle: '+ НОВАЯ ПРИВЫЧКА', habitName: 'НАЗВАНИЕ',
    habitIcon: 'ИКОНКА (эмодзи)', addBtn: 'ДОБАВИТЬ',
    wallet: 'Подключение кошелька', mining: 'Майнинг', profile: 'Децентрализованный профиль',
  },
  uk: {
    welcome: 'Ласкаво просимо до своєї темряви', chooseLang: 'ОБЕРІТЬ МОВУ',
    selectLang: 'Оберіть мову інтерфейсу.',
    whoAreYou: 'ХТО ТИ?', tellAbout: 'Розкажи про себе. NOX підлаштується під тебе.',
    yourName: 'ІМ\'Я', enterName: 'Введіть ім\'я', age: 'ВІК', yourAge: 'Ваш вік',
    timezone: 'ЧАСОВИЙ ПОЯС', selectTz: 'Оберіть пояс',
    goals: 'ТВОЇ ЦІЛІ', goalsDesc: 'Чого ви хочете досягти? Оберіть все що підходить.',
    productivity: 'Продуктивність', health: 'Здоров\'я і спорт', learning: 'Навчання',
    mental: 'Ментальний спокій', finance: 'Фінанси', social: 'Спілкування',
    creativity: 'Креативність', sleep: 'Кращий сон',
    habits: 'ПОТОЧНІ ЗВИЧКИ', habitsDesc: 'Будь чесним. NOX не судить — він адаптується.',
    morningRoutine: 'Ранкова рутина?', exercise: 'Займаєтесь спортом?',
    trackSleep: 'Відстежуєте сон?', meditation: 'Медитація чи усвідомленість?',
    screenTime: 'Гаджети перед сном?',
    ownWords: 'СВОЇМИ СЛОВАМИ',
    ownWordsDesc: 'Розкажіть що завгодно про себе. Ваше життя, виклики, мрії.',
    energyPeak: 'ПІК ВАШОЇ ЕНЕРГІЇ',
    initialize: 'ІНІЦІАЛІЗАЦІЯ', initDesc: 'NOX зараз калібрується під ваш профіль.',
    launch: '◆ ЗАПУСТИТИ NOX', continue: 'ДАЛІ →',
    greeting_m: 'Доброго ранку,', greeting_a: 'Доброго дня,', greeting_e: 'Доброго вечора,',
    dashboard: 'Головна', schedule: 'Розклад', habits_nav: 'Звички',
    journal: 'Щоденник', games: 'Ігри', social: 'Соцмережа', chain: 'Блокчейн',
    progress: 'ПРОГРЕС ЗА ДЕНЬ', nextUp: 'ДАЛІ', moodTitle: 'ЯК ТИ ПОЧУВАЄШЬСЯ?',
    moodHint: 'Натисни щоб позначити настрій', streak: 'ДНІВ ПІДРЯД', quickNote: 'ШВИДКА НОТАТКА',
    save: 'ЗБЕРЕГТИ', saved: 'ЗБЕРЕЖЕНО ✓', viewFull: 'ПОВНІСТЮ →',
    addTask: '+ ДОДАТИ ЗАВДАННЯ', newHabit: '+ НОВА ЗВИЧКА', newEntry: '+ НОВИЙ ЗАПИС',
    title: 'ЗАГОЛОВОК', mood: 'НАСТРІЙ', saveEntry: 'ЗБЕРЕГТИ', cancel: 'СКАСУВАТИ',
    weekOverview: 'ПІДСУМКИ ТИЖНЯ', comingSoon: 'СКОРО',
    memory: 'Ланцюг пам\'яті', reaction: 'Швидкість реакції',
    focus: 'Зона фокусу', typist: 'Тіньовий друкар',
    trainMem: 'Тренуй пам\'ять', testReflex: 'Перевір рефлекси',
    deepFocus: 'Глибока концентрація', typeSurvive: 'Друкуй щоб вижити',
    settings: 'НАЛАШТУВАННЯ', close: '✕ ЗАКРИТИ',
    edit: '✏️ Редагувати', recurring: '🔄 Зробити регулярним', del: '🗑️ Видалити',
    addHabitTitle: '+ НОВА ЗВИЧКА', habitName: 'НАЗВА',
    habitIcon: 'ІКОНКА (емодзі)', addBtn: 'ДОДАТИ',
    wallet: 'Підключення гаманця', mining: 'Майнінг', profile: 'Децентралізований профіль',
  },
};

let state = {
  user: { name:'', age:'', timezone:'', goals:[], story:'', energyPeak:'', mood:null,
    streak:7, habits:[], notes:[], journal:[], lang:'en', recurringTasks:[], completedTasks:{} },
  currentStep: 0, currentSection: 'dashboard',
};

const T = (k) => i18n[state.user.lang]?.[k] || i18n.en[k] || k;

const quotes = {
  en: ["The only way out is through.","Darkness is the beginning of something new.","Embrace the chaos. Find your order.","You are the architect of your reality.","In the void, we find our purpose.","The night is darkest before the dawn.","Your habits shape your destiny.","Growth begins where comfort ends."],
  ru: ["Единственный выход — через.","Тьма — начало чего-то нового.","Прими хаос. Найди свой порядок.","Ты — архитектор своей реальности.","В пустоте мы находим цель.","Тьма всего ночь перед рассветом.","Твои привычки формируют судьбу.","Рост начинается за пределами комфорта."],
  uk: ["Єдиний вихід — через.","Темрява — це початок чогось нового.","Прийми хаос. Знайди свій порядок.","Ти — архітектор своєї реальності.","У порожнечі ми знаходимо мету.","Темрява — це лише ніч перед світанком.","Твої звички формують твою долю.","Зростання починається за межами комфорту."],
};

function getQuote() { const a = quotes[state.user.lang] || quotes.en; return a[Math.floor(Math.random()*a.length)]; }

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('boot-screen').style.display = 'none';
    const saved = localStorage.getItem('nox_user');
    if (saved) { try { state.user = {...state.user,...JSON.parse(saved)}; if(state.user.name){showApp();return;} }catch(e){} }
    document.getElementById('onboarding').classList.remove('hidden');
  }, 3500);
  updateClock(); setInterval(updateClock, 1000);
  setInterval(autoSave, 30000);
  setupLongPress();
  setupDashboardTasks();
});

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

// ===== i18n APPLIER =====
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translated = T(key);
    if (translated) el.textContent = translated;
  });
}

// ===== ONBOARDING =====
function nextStep() {
  const steps=document.querySelectorAll('.onboard-step'), dots=document.querySelectorAll('.step-dot');
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
    case 3: state.user.habits=[]; document.querySelectorAll('.habit-item').forEach(i=>{const l=i.querySelector('label').textContent;const a=i.querySelector('.toggle-btn.active');state.user.habits.push({q:l,v:a?a.dataset.value:'no'});}); break;
    case 4: state.user.story=document.getElementById('user-story').value;state.user.energyPeak=document.getElementById('energy-peak').value; break;
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
  applyTranslations();
  // Update nav labels
  const navLabels=document.querySelectorAll('.nav-label');
  const navKeys=['dashboard','schedule','habits_nav','journal','games','social','chain'];
  navLabels.forEach((el,i)=>{if(navKeys[i])el.textContent=T(navKeys[i]);});
  // Update static elements
  const setT=(id,key)=>{const el=document.getElementById(id);if(el)el.textContent=T(key);};
  setT('sec-dashboard-h3','progress');setT('sec-next-up','nextUp');
  setT('sec-mood-title','moodTitle');setT('mood-hint','moodHint');
  setT('sec-streak','streak');setT('sec-quick-note','quickNote');
  setT('sec-schedule-h2','schedule');setT('sec-habits-h2','habits_nav');
  setT('sec-journal-h2','journal');setT('sec-games-h2','games');
  setT('sec-social-h2','social');setT('sec-chain-h2','chain');
  setT('sec-settings-h3','settings');
  updateGreeting();updateProgressRing(65);updateStreak(state.user.streak);
  document.getElementById('greeting-quote').textContent=getQuote();
  restoreCompletedTasks();
}

function updateGreeting(){
  const h=new Date().getHours(),el=document.getElementById('greeting-msg');
  if(h<12)el.textContent=T('greeting_m');else if(h<18)el.textContent=T('greeting_a');else el.textContent=T('greeting_e');
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
  const h={great:'Feeling powerful!',good:'Nice! On track.',neutral:'Steady.',low:'Tough day?',bad:'Take it easy.'};
  document.getElementById('mood-hint').textContent=h[state.user.mood]||'';
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
  document.querySelectorAll('.time-block').forEach(b=>{
    const h=parseInt(b.dataset.hour),s=b.querySelector('.time-slot');
    if(h===peak-1||h===peak){s.className='time-slot task-block work';s.textContent='🧠 Peak Deep Work';}
    else if(h===12){s.className='time-slot task-block break';s.textContent='🍽️ Lunch';}
    else if(h>=peak+3&&h<peak+5){s.className='time-slot task-block exercise';s.textContent='🏃 Exercise';}
    else if(h>=18&&h<21){s.className='time-slot task-block evening';s.textContent='🎮 Free Time';}
    else if(h===21){s.className='time-slot task-block wind';s.textContent='📖 Wind Down';}
    else if(h>=22||h<6){s.className='time-slot task-block sleep';s.textContent='😴 Sleep';}
  });autoSave();
}

// ===== TASK COMPLETION (Schedule) =====
function toggleTaskComplete(slot){
  if(!slot.classList.contains('task-block'))return;
  const b=slot.closest('.time-block'),h=b.dataset.hour;
  const key=`task_${h}_${new Date().toDateString()}`;
  if(slot.classList.contains('completed')){slot.classList.remove('completed');slot.style.opacity='';slot.style.textDecoration='';delete state.user.completedTasks[key];}
  else{slot.classList.add('completed');slot.style.opacity='0.5';slot.style.textDecoration='line-through';state.user.completedTasks[key]=true;}
  autoSave();updateDailyProgress();
}

// ===== DASHBOARD TASK CLICK =====
function setupDashboardTasks(){
  document.addEventListener('click',(e)=>{
    const item=e.target.closest('.task-item');
    if(!item||item.closest('.context-menu'))return;
    const status=item.querySelector('.task-status');
    if(!status)return;
    if(status.classList.contains('done')){
      status.classList.remove('done');status.classList.add('pending');status.textContent='○';
    }else{
      status.classList.remove('pending','active');status.classList.add('done');status.textContent='✓';
    }
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
  let timer=null,target=null;

  function onStart(el){
    if(!el.closest('.time-slot.task-block'))return;
    target=el.closest('.time-slot.task-block');
    timer=setTimeout(()=>showTaskMenu(target),500);
  }

  function onEnd(){clearTimeout(timer);}

  // Mouse
  document.addEventListener('mousedown',e=>onStart(e.target));
  document.addEventListener('mouseup',onEnd);
  document.addEventListener('mouseleave',onEnd);

  // Touch (mobile)
  document.addEventListener('touchstart',e=>{
    const el=e.target.closest('.time-slot.task-block');
    if(!el)return;
    target=el;
    timer=setTimeout(()=>{showTaskMenu(target);},500);
  },{passive:true});
  document.addEventListener('touchend',onEnd);
  document.addEventListener('touchmove',onEnd);

  // Click for completion
  document.addEventListener('click',e=>{
    const slot=e.target.closest('.time-slot.task-block');
    if(slot&&!slot.closest('.context-menu')&&timer){
      // Only toggle if it wasn't a long press
      clearTimeout(timer);
      // short tap — toggle
    }
  });
}

function showTaskMenu(slot){
  document.querySelector('.context-menu')?.remove();
  const b=slot.closest('.time-block'),h=b.dataset.hour,name=slot.textContent;
  const m=document.createElement('div');
  m.className='context-menu';
  m.innerHTML=`<div class="ctx-header">${name}</div>
    <button class="ctx-item" onclick="editTask('${h}')">${T('edit')}</button>
    <button class="ctx-item" onclick="makeRecurring('${h}')">${T('recurring')}</button>
    <button class="ctx-item danger" onclick="deleteTask('${h}')">${T('del')}</button>`;
  const r=slot.getBoundingClientRect();
  m.style.cssText=`position:fixed;top:${r.top+window.scrollY}px;left:${Math.min(r.left,window.innerWidth-200)}px;z-index:500;`;
  document.body.appendChild(m);
  setTimeout(()=>{document.addEventListener('click',function cm(e){if(!m.contains(e.target)){m.remove();document.removeEventListener('click',cm);}});},10);
}

function editTask(hour){
  document.querySelector('.context-menu')?.remove();
  const b=document.querySelector(`.time-block[data-hour="${hour}"]`),s=b.querySelector('.time-slot'),cur=s.textContent;
  document.getElementById('modal-title').textContent=T('edit');
  document.getElementById('modal-body').innerHTML=`
    <div class="form-group"><label>${T('title')}</label><input type="text" id="edit-task-name" value="${cur}"></div>
    <div class="form-group"><label>TIME</label><input type="time" id="edit-task-time" value="${String(hour).padStart(2,'0')}:00"></div>
    <button class="btn-primary" onclick="saveEditTask('${hour}')" style="width:100%">${T('save')}</button>`;
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
  if(!state.user.recurringTasks.find(r=>r.hour==hour)){
    state.user.recurringTasks.push({hour:parseInt(hour),name:s.textContent});
    autoSave();alert(`"${s.textContent}" → recurring daily`);
  }else alert('Already recurring.');
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
  const btn=event.target;btn.textContent=T('saved');btn.style.borderColor='var(--neon-green)';btn.style.color='var(--neon-green)';
  setTimeout(()=>{btn.textContent=T('save');btn.style.borderColor='';btn.style.color='';},1500);
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
  // Sync lang buttons with current lang
  if(!document.getElementById('settings-panel').classList.contains('hidden')){
    document.querySelectorAll('.settings-lang-btn').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang === state.user.lang);
    });
  }
}

function changeLang(lang, btn){
  state.user.lang = lang;
  document.querySelectorAll('.settings-lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  autoSave();
  // Re-apply all translations live
  applyTranslations();
  const navLabels = document.querySelectorAll('.nav-label');
  const navKeys = ['dashboard','schedule','habits_nav','journal','games','social','chain'];
  navLabels.forEach((el,i) => { if(navKeys[i]) el.textContent = T(navKeys[i]); });
  updateGreeting();
}

function resetData(){if(confirm('Delete all NOX data?')){localStorage.clear();location.reload();}}

// ===== MODAL =====
function openAddTask(){
  document.getElementById('modal-title').textContent=T('addTask');
  document.getElementById('modal-body').innerHTML=`<div class="form-group"><label>${T('title')}</label><input type="text" id="new-task-name"></div><div class="form-group"><label>TIME</label><input type="time" id="new-task-time" value="09:00"></div><div class="form-group"><label>CATEGORY</label><select id="new-task-cat"><option value="work">Work</option><option value="exercise">Exercise</option><option value="learning">Learning</option><option value="break">Break</option><option value="evening">Free Time</option></select></div><button class="btn-primary" onclick="addTask()" style="width:100%">${T('addBtn')}</button>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function openAddHabit(){
  document.getElementById('modal-title').textContent=T('addHabitTitle');
  document.getElementById('modal-body').innerHTML=`<div class="form-group"><label>${T('habitName')}</label><input type="text" id="new-habit-name"></div><div class="form-group"><label>${T('habitIcon')}</label><input type="text" id="new-habit-icon" value="⭐" maxlength="2"></div><button class="btn-primary" onclick="addHabit()" style="width:100%">${T('addBtn')}</button>`;
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
style.textContent=`
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}50%{transform:translateX(8px)}75%{transform:translateX(-4px)}}
.context-menu{background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;padding:8px;min-width:180px;box-shadow:0 8px 32px rgba(0,0,0,0.5)}
.ctx-header{padding:8px 12px;font-weight:600;font-size:13px;border-bottom:1px solid var(--border);margin-bottom:4px;color:var(--neon-cyan)}
.ctx-item{display:flex;align-items:center;gap:8px;width:100%;padding:10px 12px;background:none;border:none;color:var(--text-primary);font-family:var(--font-body);font-size:14px;cursor:pointer;border-radius:4px;transition:background 0.2s}
.ctx-item:hover{background:var(--bg-card)}.ctx-item.danger{color:var(--neon-pink)}
.time-slot.task-block{cursor:pointer;transition:all 0.3s}.time-slot.task-block:active{transform:scale(0.98)}
.time-slot.task-block.completed{opacity:0.5!important;text-decoration:line-through!important}
.task-item{cursor:pointer;transition:all 0.2s}.task-item:active{transform:scale(0.98)}
.lang-grid{display:grid;grid-template-columns:1fr;gap:12px;margin-bottom:32px}
.lang-card{display:flex;align-items:center;gap:12px;padding:16px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;cursor:pointer;transition:all 0.3s;color:var(--text-primary);font-family:var(--font-body)}
.lang-card:hover{border-color:var(--neon-purple)}.lang-card.active{border-color:var(--neon-cyan);background:rgba(5,217,232,0.08);box-shadow:0 0 15px rgba(5,217,232,0.15)}
.lang-flag{font-size:28px}.lang-name{font-size:16px;font-weight:500}
.settings-lang-row{display:flex;gap:6px}
.settings-lang-btn{padding:6px 10px;background:var(--bg-secondary);border:1px solid var(--border);color:var(--text-secondary);border-radius:4px;cursor:pointer;font-family:var(--font-mono);font-size:11px;letter-spacing:1px;transition:all 0.3s}
.settings-lang-btn.active{border-color:var(--neon-cyan);color:var(--neon-cyan);background:rgba(5,217,232,0.08)}
.settings-lang-btn:hover{border-color:var(--neon-purple)}
`;
document.head.appendChild(style);
