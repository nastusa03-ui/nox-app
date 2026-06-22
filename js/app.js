/* NOX v4 — Fixed i18n + Calendar + Move tasks */
const D = {
  en: {
    greet_m:'Good morning,', greet_a:'Good afternoon,', greet_e:'Good evening,',
    dash:'Dashboard', sched:'Schedule', hab:'Habits', jour:'Journal', game:'Games', soc:'Social', chn:'Chain',
    progress:"TODAY'S PROGRESS", nextUp:'NEXT UP', moodQ:'HOW ARE YOU FEELING?',
    moodHint:'Tap to log your mood', streak:'DAY STREAK', quickNote:'QUICK NOTE',
    save:'SAVE', saved:'SAVED ✓', viewFull:'VIEW FULL →',
    addTask:'+ ADD TASK', newHabit:'+ NEW HABIT', newEntry:'+ NEW ENTRY',
    title:'TITLE', mood:'MOOD', cancel:'CANCEL', add:'ADD',
    weekOv:'WEEKLY OVERVIEW', schedule:'SCHEDULE', habits:'HABITS',
    journal_: 'JOURNAL', games_: 'MINI GAMES', social_: 'SOCIAL', chain_: 'ACKI NACKI CHAIN',
    coming:'COMING SOON', close:'✕ CLOSE', settings:'SETTINGS', reset:'RESET',
    day:'Day', week:'Week', aiAuto:'AI Auto',
    memory:'Memory Chain', reaction:'Reaction Speed', focus:'Focus Zone', typist:'Shadow Typist',
    trainMem:'Train your memory', testReflex:'Test your reflexes',
    deepConc:'Deep concentration', typeSurvive:'Type to survive',
    edit:'Edit', recurring:'Make Recurring', del:'Delete', moveUp:'↑ Move Earlier', moveDown:'↓ Move Later',
    done:'Done', notStarted:'Not started', glasses:'glasses', glassesCount:'3/5',
    drink:'Drink Water', run:'Morning Run', read:'Read 30 min', med:'Meditate',
    morningR:'Morning Routine', deepW:'Deep Work', lunch:'Lunch', exercise:'Exercise',
    learning:'Learning', freeTime:'Free Time', windDown:'Wind Down', sleep:'Sleep',
    darkMode:'Dark Mode', notif:'Notifications', aiSugg:'AI Suggestions', sounds:'Sound Effects',
    resetData:'Reset All Data', lang:'Language',
    wallet:'Wallet Connection', mining:'Mining', profile:'Decentralized Profile',
    today:'TODAY', tomorrow:'TOMORROW', prev:'←', next:'→',
    aiHint:'I analyze your patterns...',
    peakWork:'🧠 Peak Deep Work',
  },
  ru: {
    greet_m:'Доброе утро,', greet_a:'Добрый день,', greet_e:'Добрый вечер,',
    dash:'Главная', sched:'Расписание', hab:'Привычки', jour:'Дневник', game:'Игры', soc:'Соцсеть', chn:'Блокчейн',
    progress:'ПРОГРЕСС ЗА ДЕНЬ', nextUp:'ДАЛЕЕ', moodQ:'КАК ТЫ ЧУВСТВУЕШЬ СЕБЯ?',
    moodHint:'Нажми чтобы отметить настроение', streak:'ДНЕЙ ПОДРЯД', quickNote:'БЫСТРАЯ ЗАМЕТКА',
    save:'СОХРАНИТЬ', saved:'СОХРАНЕНО ✓', viewFull:'ПОЛНОСТЬЮ →',
    addTask:'+ ДОБАВИТЬ ЗАДАЧУ', newHabit:'+ НОВАЯ ПРИВЫЧКА', newEntry:'+ НОВАЯ ЗАПИСЬ',
    title:'ЗАГОЛОВОК', mood:'НАСТРОЕНИЕ', cancel:'ОТМЕНА', add:'ДОБАВИТЬ',
    weekOv:'ИТОГИ НЕДЕЛИ', schedule:'РАСПИСАНИЕ', habits:'ПРИВЫЧКИ',
    journal_: 'ДНЕВНИК', games_: 'МИНИ ИГРЫ', social_: 'СОЦСЕТЬ', chain_: 'ACKI NACKI',
    coming:'СКОРО', close:'✕ ЗАКРЫТЬ', settings:'НАСТРОЙКИ', reset:'СБРОС',
    day:'День', week:'Неделя', aiAuto:'ИИ Авто',
    memory:'Цепь памяти', reaction:'Скорость реакции', focus:'Зона фокуса', typist:'Теневой печатник',
    trainMem:'Тренируй память', testReflex:'Проверь рефлексы',
    deepConc:'Глубокая концентрация', typeSurvive:'Печатай чтобы выжить',
    edit:'Редактировать', recurring:'Сделать регулярной', del:'Удалить', moveUp:'↑ Раньше', moveDown:'↓ Позже',
    done:'Выполнено', notStarted:'Не начато', glasses:'стаканов', glassesCount:'3/5',
    drink:'Пить воду', run:'Утренняя пробежка', read:'Читать 30 мин', med:'Медитировать',
    morningR:'Утренняя рутина', deepW:'Глубокая работа', lunch:'Обед', exercise:'Тренировка',
    learning:'Обучение', freeTime:'Свободное время', windDown:'Расслабление', sleep:'Сон',
    darkMode:'Тёмная тема', notif:'Уведомления', aiSugg:'ИИ-рекомендации', sounds:'Звуки',
    resetData:'Сбросить все данные', lang:'Язык',
    wallet:'Кошелёк', mining:'Майнинг', profile:'Профиль',
    today:'СЕГОДНЯ', tomorrow:'ЗАВТРА', prev:'←', next:'→',
    aiHint:'Я анализирую твои паттерны...',
    peakWork:'🧠 Пик работы',
  },
  uk: {
    greet_m:'Доброго ранку,', greet_a:'Доброго дня,', greet_e:'Доброго вечора,',
    dash:'Головна', sched:'Розклад', hab:'Звички', jour:'Щоденник', game:'Ігри', soc:'Соцмережа', chn:'Блокчейн',
    progress:'ПРОГРЕС ЗА ДЕНЬ', nextUp:'ДАЛІ', moodQ:'ЯК ТИ ПОЧУВАЄШЬСЯ?',
    moodHint:'Натисни щоб позначити настрій', streak:'ДНІВ ПІДРЯД', quickNote:'ШВИДКА НОТАТКА',
    save:'ЗБЕРЕГТИ', saved:'ЗБЕРЕЖЕНО ✓', viewFull:'ПОВНІСТЮ →',
    addTask:'+ ДОДАТИ ЗАВДАННЯ', newHabit:'+ НОВА ЗВИЧКА', newEntry:'+ НОВИЙ ЗАПИС',
    title:'ЗАГОЛОВОК', mood:'НАСТРІЙ', cancel:'СКАСУВАТИ', add:'ДОДАТИ',
    weekOv:'ПІДСУМКИ ТИЖНЯ', schedule:'РОЗКЛАД', habits:'ЗВИЧКИ',
    journal_: 'ЩОДЕННИК', games_: 'МІНІ ІГРИ', social_: 'СОЦМЕРЕЖА', chain_: 'ACKI NACKI',
    coming:'СКОРО', close:'✕ ЗАКРИТИ', settings:'НАЛАШТУВАННЯ', reset:'СКИНУТИ',
    day:'День', week:'Тиждень', aiAuto:'ШІ Авто',
    memory:'Ланцюг пам\'яті', reaction:'Швидкість реакції', focus:'Зона фокусу', typist:'Тіньовий друкар',
    trainMem:'Тренуй пам\'ять', testReflex:'Перевір рефлекси',
    deepConc:'Глибока концентрація', typeSurvive:'Друкуй щоб вижити',
    edit:'Редагувати', recurring:'Зробити регулярним', del:'Видалити', moveUp:'↑ Раніше', moveDown:'↓ Пізніше',
    done:'Виконано', notStarted:'Не почато', glasses:'стаканів', glassesCount:'3/5',
    drink:'Пити воду', run:'Ранкова пробіжка', read:'Читати 30 хв', med:'Медитувати',
    morningR:'Ранкова рутина', deepW:'Глибока робота', lunch:'Обід', exercise:'Тренування',
    learning:'Навчання', freeTime:'Вільний час', windDown:'Розслаблення', sleep:'Сон',
    darkMode:'Темна тема', notif:'Сповіщення', aiSugg:'ШІ-рекомендації', sounds:'Звуки',
    resetData:'Скинути всі дані', lang:'Мова',
    wallet:'Гаманець', mining:'Майнінг', profile:'Профіль',
    today:'СЬОГОДНІ', tomorrow:'ЗАВТРА', prev:'←', next:'→',
    aiHint:'Я аналізую твої патерни...',
    peakWork:'🧠 Пік роботи',
  }
};

let S = {
  user: { name:'', age:'', timezone:'', goals:[], story:'', energyPeak:'', mood:null,
    streak:7, habits:[], notes:[], journal:[], lang:'en', recurringTasks:[], completedTasks:{} },
  currentStep: 0, dateOffset: 0
};

const t = (k) => (D[S.user.lang] || D.en)[k] || D.en[k] || k;

const Q = {
  en: ["The only way out is through.","Darkness is the beginning of something new.","Embrace the chaos. Find your order.","You are the architect of your reality.","In the void, we find our purpose.","Your habits shape your destiny.","Growth begins where comfort ends.","Master your time, master your life."],
  ru: ["Единственный выход — через.","Тьма — начало чего-то нового.","Прими хаос. Найди свой порядок.","Ты — архитектор своей реальности.","В пустоте мы находим цель.","Твои привычки формируют судьбу.","Рост начинается за пределами комфорта.","Управляй временем — управляй жизнью."],
  uk: ["Єдиний вихід — через.","Темрява — це початок чогось нового.","Прийми хаос. Знайди свій порядок.","Ти — архітектор своєї реальності.","У порожнечі ми знаходимо мету.","Твої звички формують долю.","Зростання починається за межами комфорту.","Керуй часом — керуй життям."]
};
function getQ(){const a=Q[S.user.lang]||Q.en;return a[Math.floor(Math.random()*a.length)];}

function save(){if(S.user.name)localStorage.setItem('nox_user',JSON.stringify(S.user));}

// ===== CLOCK =====
function updateClock(){
  const n=new Date(),t2=n.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:false});
  const d=n.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
  const el=document.getElementById('current-time');
  if(el)el.textContent=`${d} · ${t2}`;
}

// ===== LANG =====
function selectLang(btn){
  document.querySelectorAll('.lang-card').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');S.user.lang=btn.dataset.lang;save();
}
function changeLang(lang,btn){
  document.querySelectorAll('.settings-lang-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');S.user.lang=lang;save();refreshUI();
}

// ===== TRANSLATE ALL =====
function refreshUI(){
  const L=D[S.user.lang]||D.en;
  // Nav
  const navItems=document.querySelectorAll('.nav-label');
  const navKeys=['dash','sched','hab','jour','game','soc','chn'];
  navItems.forEach((el,i)=>{if(navKeys[i])el.textContent=L[navKeys[i]];});
  // Section headers
  const setH=(id,k)=>{const e=document.getElementById(id);if(e)e.textContent=L[k];};
  setH('h-greeting-m','greet_m');setH('h-progress','progress');setH('h-nextup','nextUp');
  setH('h-mood','moodQ');setH('h-streak','streak');setH('h-quicknote','quickNote');
  setH('h-schedule','schedule');setH('h-habits','hab');setH('h-journal','journal_');
  setH('h-games','games_');setH('h-social','social_');setH('h-chain','chain_');
  setH('h-settings','settings');
  // Mood hint
  const mh=document.getElementById('mood-hint');
  if(mh && !mh.dataset.original) { mh.dataset.original = mh.textContent; }
  if(mh) mh.textContent = L.moodHint || mh.dataset.original;
  // Schedule tabs
  document.querySelectorAll('.btn-tab').forEach(b=>{
    if(b.dataset.view==='day')b.textContent=L.day;
    else if(b.dataset.view==='week')b.textContent=L.week;
    else b.textContent=L.aiAuto;
  });
  // Schedule buttons
  setH('btn-add-task','addTask');setH('btn-add-habit','newHabit');
  setH('btn-new-entry','newEntry');
  // Game titles
  setH('game-mem-title','memory');setH('game-react-title','reaction');
  setH('game-focus-title','focus');setH('game-type-title','typist');
  setH('game-mem-desc','trainMem');setH('game-react-desc','testReflex');
  setH('game-focus-desc','deepConc');setH('game-type-desc','typeSurvive');
  // Blockchain
  setH('chain-title','coming');
  setH('feat-wallet','wallet');setH('feat-mining','mining');setH('feat-profile','profile');
  // Settings
  setH('set-dark','darkMode');setH('set-notif','notif');
  setH('set-ai','aiSugg');setH('set-sound','sounds');
  setH('set-reset-label','resetData');setH('set-reset-btn','reset');
  setH('set-lang','lang');
  // AI
  const aiHint=document.getElementById('ai-hint');
  if(aiHint)aiHint.placeholder=L.aiHint;
  // Schedule tasks default text
  const tasks={'t-morning':L.morningR,'t-deepwork':L.deepW,'t-lunch':L.lunch,
    't-exercise':L.exercise,'t-learning':L.learning,'t-free':L.freeTime,
    't-wind':L.windDown,'t-sleep':L.sleep};
  Object.entries(tasks).forEach(([id,txt])=>{const e=document.getElementById(id);if(e&&!e.dataset.original){e.dataset.original=e.textContent;} if(e)e.textContent=txt;});
  // Calendar
  updateCalendar();
  // Greeting
  updateGreeting();
  // Quote
  const qEl=document.getElementById('greeting-quote');
  if(qEl)qEl.textContent=getQ();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    document.getElementById('boot-screen').style.display='none';
    const s=localStorage.getItem('nox_user');
    if(s){try{S.user={...S.user,...JSON.parse(s)};if(S.user.name){showApp();return;}}catch(e){}}
    document.getElementById('onboarding').classList.remove('hidden');
  },3500);
  updateClock();setInterval(updateClock,1000);
  setInterval(save,30000);
  setupLongPress();
  setupDashboardTasks();
  initCalendar();
});

// ===== ONBOARDING =====
function nextStep(){
  const steps=document.querySelectorAll('.onboard-step'),dots=document.querySelectorAll('.step-dot');
  collectStepData(S.currentStep);
  if(S.currentStep===1){const n=document.getElementById('user-name').value.trim();if(!n){shakeEl(document.getElementById('user-name'));return;}}
  steps[S.currentStep].classList.remove('active');dots[S.currentStep].classList.remove('active');dots[S.currentStep].classList.add('done');
  S.currentStep++;
  if(S.currentStep<steps.length){steps[S.currentStep].classList.add('active');dots[S.currentStep].classList.add('active');}
  if(S.currentStep===steps.length-1)populateSummary();
}

function collectStepData(s){
  switch(s){
    case 0:break;
    case 1:S.user.name=document.getElementById('user-name').value.trim();S.user.age=document.getElementById('user-age').value;S.user.timezone=document.getElementById('user-timezone').value;break;
    case 2:S.user.goals=Array.from(document.querySelectorAll('.goal-card.selected')).map(c=>c.dataset.goal);break;
    case 3:S.user.habits=[];document.querySelectorAll('.habit-item').forEach(i=>{const a=i.querySelector('.toggle-btn.active');S.user.habits.push({q:i.querySelector('label').textContent,v:a?a.dataset.value:'no'});});break;
    case 4:S.user.story=document.getElementById('user-story').value;S.user.energyPeak=document.getElementById('energy-peak').value;break;
  }
}
function toggleGoal(el){el.classList.toggle('selected');}
function selectToggle(btn){btn.parentElement.querySelectorAll('.toggle-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');}
function shakeEl(el){el.style.animation='none';el.offsetHeight;el.style.animation='shake 0.5s ease';el.style.borderColor='var(--neon-pink)';setTimeout(()=>{el.style.borderColor='';},2000);}

function populateSummary(){
  document.getElementById('sum-name').textContent=S.user.name||'—';
  document.getElementById('sum-age').textContent=S.user.age||'—';
  document.getElementById('sum-tz').textContent=S.user.timezone||'—';
  document.getElementById('sum-goals').textContent=S.user.goals.length?S.user.goals.join(', '):'—';
  document.getElementById('sum-energy').textContent=S.user.energyPeak||'—';
}

function launchNox(){collectStepData(4);save();showApp();}

function showApp(){
  document.getElementById('onboarding').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  const s=localStorage.getItem('nox_user');if(s){try{S.user={...S.user,...JSON.parse(s)};}catch(e){}}
  document.getElementById('greeting-name').textContent=S.user.name||'User';
  document.getElementById('avatar-letter').textContent=(S.user.name||'N')[0].toUpperCase();
  refreshUI();
  updateProgressRing(65);updateStreak(S.user.streak);
  restoreCompletedTasks();
}

function updateGreeting(){
  const h=new Date().getHours(),el=document.getElementById('greeting-msg');
  const L=D[S.user.lang]||D.en;
  if(h<12)el.textContent=L.greet_m;else if(h<18)el.textContent=L.greet_a;else el.textContent=L.greet_e;
}

function updateProgressRing(pct){
  const ring=document.getElementById('daily-progress-ring');if(!ring)return;
  ring.style.strokeDashoffset=339.292-(pct/100)*339.292;
  const svg=ring.closest('svg');let d=svg.querySelector('defs');
  if(!d){d=document.createElementNS('http://www.w3.org/2000/svg','defs');d.innerHTML='<linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#b829dd"/><stop offset="100%" style="stop-color:#05d9e8"/></linearGradient>';svg.prepend(d);}
  ring.style.stroke='url(#ng)';
  document.getElementById('daily-pct').textContent=pct+'%';
}
function updateStreak(c){document.getElementById('streak-count').textContent=c;document.getElementById('streak-flames').textContent='🔥'.repeat(Math.min(c,10));}

// ===== MOOD =====
function selectMood(btn){
  document.querySelectorAll('.mood-selector:not(.small) .mood-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');S.user.mood=btn.dataset.mood;save();
  const h={ru:{great:'Мощь!',good:'Отлично!',neutral:'Стабильно.',low:'Тяжёлый день?',bad:'Всё нормально.'},en:{great:'Powerful!',good:'Nice!',neutral:'Steady.',low:'Tough day?',bad:'Take it easy.'},uk:{great:'Міць!',good:'Чудово!',neutral:'Стабільно.',low:'Важкий день?',bad:'Все нормально.'}};
  document.getElementById('mood-hint').textContent=(h[S.user.lang]||h.en)[S.user.mood]||'';
}
function selectEntryMood(btn){btn.closest('.mood-selector').querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');}

// ===== NAV =====
function switchSection(s,btn){
  document.querySelectorAll('.section').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('sec-'+s).classList.add('active');
  if(btn)btn.classList.add('active');
}

// ===== SCHEDULE =====
function switchScheduleView(v,btn){
  document.querySelectorAll('.btn-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  if(v==='custom')generateAISchedule();
  updateCalendar();
}

function generateAISchedule(){
  const slots=document.querySelectorAll('.time-slot.task-block, .time-slot.empty');
  slots.forEach(s=>{s.className='time-slot empty';s.textContent='';s.style.opacity='';s.style.textDecoration='';});
  const peak=S.user.energyPeak?parseInt(S.user.energyPeak.split(':')[0]):10;
  const L=D[S.user.lang]||D.en;
  const tasks={work:L.deepW,brk:L.lunch,ex:L.exercise,lrn:L.learning,eve:L.freeTime,wind:L.windDown,slp:L.sleep,pk:L.peakWork};
  document.querySelectorAll('.time-block').forEach(b=>{
    const h=parseInt(b.dataset.hour),s=b.querySelector('.time-slot');
    if(h===peak-1||h===peak){s.className='time-slot task-block work';s.textContent=tasks.pk;}
    else if(h===12){s.className='time-slot task-block break';s.textContent=tasks.brk;}
    else if(h>=peak+3&&h<peak+5){s.className='time-slot task-block exercise';s.textContent=tasks.ex;}
    else if(h>=18&&h<21){s.className='time-slot task-block evening';s.textContent=tasks.eve;}
    else if(h===21){s.className='time-slot task-block wind';s.textContent=tasks.wind;}
    else if(h>=22||h<6){s.className='time-slot task-block sleep';s.textContent=tasks.slp;}
  });save();
}

// ===== TASK COMPLETION =====
function toggleTaskComplete(slot){
  if(!slot.classList.contains('task-block'))return;
  const b=slot.closest('.time-block'),h=b.dataset.hour;
  const key=`task_${h}_${getDateKey(S.dateOffset)}`;
  if(slot.classList.contains('completed')){slot.classList.remove('completed');slot.style.opacity='';slot.style.textDecoration='';delete S.user.completedTasks[key];}
  else{slot.classList.add('completed');slot.style.opacity='0.5';slot.style.textDecoration='line-through';S.user.completedTasks[key]=true;}
  save();updateDailyProgress();
}

function setupDashboardTasks(){
  document.addEventListener('click',e=>{
    const item=e.target.closest('.task-item');
    if(!item)return;
    const st=item.querySelector('.task-status');if(!st)return;
    if(st.classList.contains('done')){st.classList.remove('done');st.classList.add('pending');st.textContent='○';}
    else{st.classList.remove('pending','active');st.classList.add('done');st.textContent='✓';}
  });
}

function restoreCompletedTasks(){
  const today=getDateKey(0);
  document.querySelectorAll('.time-slot.task-block').forEach(s=>{
    const b=s.closest('.time-block'),key=`task_${b.dataset.hour}_${today}`;
    if(S.user.completedTasks&&S.user.completedTasks[key]){s.classList.add('completed');s.style.opacity='0.5';s.style.textDecoration='line-through';}
  });updateDailyProgress();
}

function updateDailyProgress(){
  const total=document.querySelectorAll('.time-slot.task-block').length;
  const done=document.querySelectorAll('.time-slot.task-block.completed').length;
  updateProgressRing(total>0?Math.round((done/total)*100):0);
}

// ===== CALENDAR =====
function getDateKey(offset){
  const d=new Date();d.setDate(d.getDate()+offset);
  return d.toISOString().split('T')[0];
}

function initCalendar(){
  const cal=document.getElementById('cal-nav');
  if(!cal)return;
  document.getElementById('cal-prev').onclick=()=>{if(S.dateOffset>0){S.dateOffset--;updateCalendar();}};
  document.getElementById('cal-next').onclick=()=>{S.dateOffset++;updateCalendar();};
  document.getElementById('cal-today').onclick=()=>{S.dateOffset=0;updateCalendar();};
  updateCalendar();
}

function updateCalendar(){
  const d=new Date();d.setDate(d.getDate()+S.dateOffset);
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const dayNames=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const L=D[S.user.lang]||D.en;
  const calLabel=document.getElementById('cal-label');
  if(calLabel){
    if(S.dateOffset===0)calLabel.textContent=`${L.today} · ${dayNames[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
    else if(S.dateOffset===1)calLabel.textContent=`${L.tomorrow} · ${dayNames[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
    else calLabel.textContent=`${dayNames[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
  }
  // Regenerate schedule for this date
  generateAISchedule();
  restoreCompletedTasks();
}

// ===== LONG PRESS + MOVE =====
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
    if(slot&&!slot.closest('.context-menu')&&!e.target.closest('.ctx-item'))toggleTaskComplete(slot);
  });
}

function showTaskMenu(slot){
  document.querySelector('.context-menu')?.remove();
  const b=slot.closest('.time-block'),h=parseInt(b.dataset.hour),name=slot.textContent;
  const L=D[S.user.lang]||D.en;
  const m=document.createElement('div');m.className='context-menu';
  m.innerHTML=`<div class="ctx-header">${name}</div>
    <button class="ctx-item" onclick="moveTask(${h},-1)">${L.moveUp}</button>
    <button class="ctx-item" onclick="moveTask(${h},1)">${L.moveDown}</button>
    <button class="ctx-item" onclick="editTask(${h})">✏️ ${L.edit}</button>
    <button class="ctx-item" onclick="makeRecurring(${h})">🔄 ${L.recurring}</button>
    <button class="ctx-item danger" onclick="deleteTask(${h})">🗑️ ${L.del}</button>`;
  const r=slot.getBoundingClientRect();
  m.style.cssText=`position:fixed;top:${r.top+window.scrollY}px;left:${Math.min(r.left,window.innerWidth-200)}px;z-index:500;`;
  document.body.appendChild(m);
  setTimeout(()=>{document.addEventListener('click',function cm(e){if(!m.contains(e.target)){m.remove();document.removeEventListener('click',cm);}});},10);
}

function moveTask(hour, dir){
  document.querySelector('.context-menu')?.remove();
  const srcBlock=document.querySelector(`.time-block[data-hour="${hour}"]`);
  const srcSlot=srcBlock.querySelector('.time-slot');
  if(!srcSlot.classList.contains('task-block'))return;
  const newHour=hour+dir;
  if(newHour<6||newHour>22)return;
  const dstBlock=document.querySelector(`.time-block[data-hour="${newHour}"]`);
  const dstSlot=dstBlock.querySelector('.time-slot');
  // Swap
  const srcClass=srcSlot.className,srcText=srcSlot.textContent;
  const dstClass=dstSlot.className,dstText=dstSlot.textContent;
  const dstComplete=dstSlot.classList.contains('completed');
  const srcComplete=srcSlot.classList.contains('completed');
  srcSlot.className=dstClass;srcSlot.textContent=dstText;
  dstSlot.className=srcClass;dstSlot.textContent=srcText;
  if(dstComplete)srcSlot.classList.add('completed');else srcSlot.classList.remove('completed');
  if(srcComplete){dstSlot.classList.add('completed');dstSlot.style.opacity='0.5';dstSlot.style.textDecoration='line-through';}
  else{dstSlot.classList.remove('completed');dstSlot.style.opacity='';dstSlot.style.textDecoration='';}
  // Update keys
  const today=getDateKey(S.dateOffset);
  const oldKey=`task_${hour}_${today}`,newKey=`task_${newHour}_${today}`;
  if(S.user.completedTasks[oldKey]){S.user.completedTasks[newKey]=true;delete S.user.completedTasks[oldKey];}
  save();updateDailyProgress();
}

function editTask(hour){
  document.querySelector('.context-menu')?.remove();
  const b=document.querySelector(`.time-block[data-hour="${hour}"]`),s=b.querySelector('.time-slot'),cur=s.textContent;
  const L=D[S.user.lang]||D.en;
  document.getElementById('modal-title').textContent=L.edit;
  document.getElementById('modal-body').innerHTML=`<div class="form-group"><label>${L.title}</label><input type="text" id="edit-task-name" value="${cur}"></div><div class="form-group"><label>TIME</label><input type="time" id="edit-task-time" value="${String(hour).padStart(2,'0')}:00"></div><button class="btn-primary" onclick="saveEditTask(${hour})" style="width:100%">${L.save}</button>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function saveEditTask(oldH){
  const n=document.getElementById('edit-task-name').value.trim(),tm=document.getElementById('edit-task-time').value;
  if(!n)return;
  const o=document.querySelector(`.time-block[data-hour="${oldH}"]`);
  if(o){const s=o.querySelector('.time-slot');s.className='time-slot empty';s.textContent='';s.style.opacity='';s.style.textDecoration='';}
  const newH=parseInt(tm.split(':')[0]),nb=document.querySelector(`.time-block[data-hour="${newH}"]`);
  if(nb){const ns=nb.querySelector('.time-slot');ns.className=`time-slot task-block ${getCat(n)}`;ns.textContent=n;}
  closeModal();save();
}

function getCat(n){const l=n.toLowerCase();if(l.match(/work|deep|работа|глубокая/))return'work';if(l.match(/exerc|run|gym|трен|спорт|пробеж/))return'exercise';if(l.match(/learn|study|read|учёб|чит|навч/))return'learning';if(l.match(/lunch|break|food|обед|перерыв|обід/))return'break';if(l.match(/sleep|bed|сон/))return'sleep';return'work';}

function makeRecurring(hour){
  document.querySelector('.context-menu')?.remove();
  const b=document.querySelector(`.time-block[data-hour="${hour}"]`),s=b.querySelector('.time-slot');
  if(!S.user.recurringTasks)S.user.recurringTasks=[];
  if(!S.user.recurringTasks.find(r=>r.hour==hour)){S.user.recurringTasks.push({hour,name:s.textContent});save();alert(S.user.lang==='ru'?'Регулярная задача создана!':'Recurring task created!');}
}

function deleteTask(hour){
  document.querySelector('.context-menu')?.remove();
  const b=document.querySelector(`.time-block[data-hour="${hour}"]`),s=b.querySelector('.time-slot');
  s.className='time-slot empty';s.textContent='';s.style.opacity='';s.style.textDecoration='';
  delete S.user.completedTasks[`task_${hour}_${getDateKey(S.dateOffset)}`];
  save();updateDailyProgress();
}

// ===== HABITS =====
function toggleHabitCheck(btn){btn.classList.toggle('done');save();}

// ===== JOURNAL =====
function openNewEntry(){document.getElementById('new-entry-form').classList.remove('hidden');}
function closeNewEntry(){document.getElementById('new-entry-form').classList.add('hidden');document.getElementById('entry-title').value='';document.getElementById('entry-body').value='';document.querySelectorAll('.journal-form .mood-btn').forEach(b=>b.classList.remove('selected'));}

function saveEntry(){
  const title=document.getElementById('entry-title').value.trim(),body=document.getElementById('entry-body').value.trim();
  const m=document.querySelector('.journal-form .mood-btn.selected');
  if(!title||!body)return;
  S.user.journal.unshift({title,body,mood:m?m.textContent:'😐',date:new Date(),tags:body.split(' ').filter(w=>w.length>5).slice(0,2)});
  save();renderJournalEntry(S.user.journal[0]);closeNewEntry();
}

function renderJournalEntry(entry){
  const c=document.getElementById('journal-entries'),n=entry.date;
  const mo=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const d=document.createElement('div');d.className='journal-entry';
  d.innerHTML=`<div class="entry-date"><span class="entry-day">${n.getDate()}</span><span class="entry-month">${mo[n.getMonth()]}</span></div><div class="entry-content"><h4>${entry.title}</h4><p>${entry.body.substring(0,150)}${entry.body.length>150?'...':''}</p><div class="entry-tags">${entry.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div><div class="entry-mood">${entry.mood}</div>`;
  c.prepend(d);
}

function saveQuickNote(){
  const note=document.getElementById('quick-note').value.trim();if(!note)return;
  S.user.notes.unshift({text:note,time:new Date()});save();
  document.getElementById('quick-note').value='';
  const btn=event.target,L=D[S.user.lang]||D.en;
  btn.textContent=L.saved;btn.style.borderColor='var(--neon-green)';btn.style.color='var(--neon-green)';
  setTimeout(()=>{btn.textContent=L.save;btn.style.borderColor='';btn.style.color='';},1500);
}

// ===== AI =====
function toggleAIPanel(){document.getElementById('ai-panel').classList.toggle('hidden');document.getElementById('settings-panel').classList.add('hidden');}
function sendAI(){
  const input=document.getElementById('ai-input'),msg=input.value.trim();if(!msg)return;
  const mc=document.getElementById('ai-messages');
  const ud=document.createElement('div');ud.className='ai-msg user';ud.textContent=msg;mc.appendChild(ud);input.value='';
  setTimeout(()=>{const ad=document.createElement('div');ad.className='ai-msg ai';ad.textContent=genAI(msg);mc.appendChild(ad);mc.scrollTop=mc.scrollHeight;},800);
  mc.scrollTop=mc.scrollHeight;
}
function genAI(m){
  const l=m.toLowerCase();
  if(l.match(/schedule|расписан|розклад/))return`Based on your energy peak at ${S.user.energyPeak||'10:00'}, I recommend scheduling demanding tasks between 9-12.`;
  if(l.match(/habit|привыч|звичк/))return`You've been consistent with 2 of 4 tracked habits this week. Try setting hourly reminders.`;
  if(l.match(/mood|настроен|настрій/))return`Your mood dips around 3-4 PM. I suggest a short break during that window.`;
  return`Thanks for your input, ${S.user.name||'friend'}. Ask about schedule, habits, or mood for insights.`;
}

// ===== SETTINGS =====
function toggleSettings(){
  document.getElementById('settings-panel').classList.toggle('hidden');
  document.getElementById('ai-panel').classList.add('hidden');
  if(!document.getElementById('settings-panel').classList.contains('hidden')){
    document.querySelectorAll('.settings-lang-btn').forEach(b=>{b.classList.toggle('active',b.dataset.lang===S.user.lang);});
  }
}
function resetData(){if(confirm('Delete all NOX data?')){localStorage.clear();location.reload();}}

// ===== MODAL =====
function openAddTask(){
  const L=D[S.user.lang]||D.en;
  document.getElementById('modal-title').textContent=L.addTask;
  document.getElementById('modal-body').innerHTML=`<div class="form-group"><label>${L.title}</label><input type="text" id="new-task-name"></div><div class="form-group"><label>TIME</label><input type="time" id="new-task-time" value="09:00"></div><div class="form-group"><label>CATEGORY</label><select id="new-task-cat"><option value="work">${L.deepW}</option><option value="exercise">${L.exercise}</option><option value="learning">${L.learning}</option><option value="break">${L.lunch}</option><option value="evening">${L.freeTime}</option></select></div><button class="btn-primary" onclick="addTask()" style="width:100%">${L.add}</button>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function openAddHabit(){
  const L=D[S.user.lang]||D.en;
  document.getElementById('modal-title').textContent=L.newHabit;
  document.getElementById('modal-body').innerHTML=`<div class="form-group"><label>${L.title}</label><input type="text" id="new-habit-name"></div><div class="form-group"><label>${S.user.lang==='ru'?'ИКОНКА':'ICON'}</label><input type="text" id="new-habit-icon" value="⭐" maxlength="2"></div><button class="btn-primary" onclick="addHabit()" style="width:100%">${L.add}</button>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function addTask(){
  const n=document.getElementById('new-task-name').value.trim(),tm=document.getElementById('new-task-time').value,c=document.getElementById('new-task-cat').value;
  if(!n){shakeEl(document.getElementById('new-task-name'));return;}
  const h=parseInt(tm.split(':')[0]),b=document.querySelector(`.time-block[data-hour="${h}"]`);
  if(b){const s=b.querySelector('.time-slot');s.className=`time-slot task-block ${c}`;s.textContent=n;}
  closeModal();save();
}
function addHabit(){
  const n=document.getElementById('new-habit-name').value.trim(),icon=document.getElementById('new-habit-icon').value.trim()||'⭐';
  if(!n){shakeEl(document.getElementById('new-habit-name'));return;}
  const g=document.getElementById('habits-grid'),card=document.createElement('div');card.className='habit-card';
  card.innerHTML=`<div class="habit-icon">${icon}</div><div class="habit-info"><h4>${n}</h4><div class="habit-progress"><div class="habit-bar"><div class="habit-bar-fill" style="width:0%"></div></div><span>0%</span></div></div><button class="habit-check" onclick="toggleHabitCheck(this)">✓</button>`;
  g.appendChild(card);closeModal();save();
}
function closeModal(){document.getElementById('modal-overlay').classList.add('hidden');}
function toggleLike(btn){btn.classList.toggle('liked');const t=btn.textContent,n=parseInt(t.match(/\d+/)[0]);btn.textContent=btn.classList.contains('liked')?`♥ ${n+1}`:`♡ ${n-1}`;}

// ===== STYLE =====
const style=document.createElement('style');
style.textContent=`
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}50%{transform:translateX(8px)}75%{transform:translateX(-4px)}}
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
.settings-lang-btn:hover{border-color:var(--neon-purple)}
.cal-nav{display:flex;align-items:center;gap:8px;margin-bottom:16px}
.cal-btn{padding:6px 12px;background:var(--bg-secondary);border:1px solid var(--border);color:var(--text-secondary);border-radius:4px;cursor:pointer;font-family:var(--font-mono);font-size:12px;transition:all 0.3s}
.cal-btn:hover{border-color:var(--neon-purple)}
.cal-label{font-family:var(--font-display);font-size:14px;color:var(--neon-cyan);flex:1;text-align:center}
.cal-today{border-color:var(--neon-cyan);color:var(--neon-cyan)}
`;
document.head.appendChild(style);
