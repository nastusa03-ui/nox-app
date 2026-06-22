/* NOX v5 — Full i18n + Calendar + Drag-to-reorder + Context menu fix */
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
    journal_:'JOURNAL', games_:'MINI GAMES', social_:'SOCIAL', chain_:'ACKI NACKI',
    coming:'COMING SOON', close:'✕ CLOSE', settings:'SETTINGS', reset:'RESET',
    day:'Day', week:'Week', aiAuto:'AI Auto',
    memory:'Memory Chain', reaction:'Reaction Speed', focus:'Focus Zone', typist:'Shadow Typist',
    trainMem:'Train your memory', testReflex:'Test your reflexes',
    deepConc:'Deep concentration', typeSurvive:'Type to survive',
    edit:'Edit', recurring:'Make Recurring', del:'Delete', moveUp:'↑ Earlier', moveDown:'↓ Later',
    done:'Done', notStarted:'Not started', glasses:'glasses', glassesCount:'3/5',
    drink:'Drink Water', run:'Morning Run', read:'Read 30 min', med:'Meditate',
    morningR:'Morning Routine', deepW:'Deep Work', lunch:'Lunch', exercise:'Exercise',
    learning:'Learning', freeTime:'Free Time', windDown:'Wind Down', sleep:'Sleep',
    darkMode:'Dark Mode', notif:'Notifications', aiSugg:'AI Suggestions', sounds:'Sound Effects',
    resetData:'Reset All Data', lang:'Language',
    wallet:'Wallet Connection', mining:'Mining', profile:'Decentralized Profile',
    today:'TODAY', tomorrow:'TOMORROW', prev:'←', next:'→',
    aiHint:'Ask NOX anything...',
    peakWork:'Peak Deep Work',
  },
  ru: {
    greet_m:'Доброе утро,', greet_a:'Добрый день,', greet_e:'Добрый вечер,',
    dash:'Главная', sched:'Расписание', hab:'Привычки', jour:'Дневник', game:'Игры', soc:'Соцсеть', chn:'Блокчейн',
    progress:'ПРОГРЕСС ЗА ДЕНЬ', nextUp:'ДАЛЕЕ', moodQ:'КАК ТЫ ЧУВСТВУЕШЬ СЕБЯ?',
    moodHint:'Нажми чтобы отметить настроение', streak:'ДНЕЙ ПОДРЯД', quickNote:'БЫСТРАЯ ЗАМЕТКА',
    save:'СОХРАНИТЬ', saved:'СОХРАНЕНО ✓', viewFull:'ПОЛНОСТЬЮ →',
    addTask:'+ ДОБАВИТЬ', newHabit:'+ НОВАЯ ПРИВЫЧКА', newEntry:'+ НОВАЯ ЗАПИСЬ',
    title:'ЗАГОЛОВОК', mood:'НАСТРОЕНИЕ', cancel:'ОТМЕНА', add:'ДОБАВИТЬ',
    weekOv:'ИТОГИ НЕДЕЛИ', schedule:'РАСПИСАНИЕ', habits:'ПРИВЫЧКИ',
    journal_:'ДНЕВНИК', games_:'МИНИ ИГРЫ', social_:'СОЦСЕТЬ', chain_:'ACKI NACKI',
    coming:'СКОРО', close:'✕ ЗАКРЫТЬ', settings:'НАСТРОЙКИ', reset:'СБРОС',
    day:'День', week:'Неделя', aiAuto:'ИИ Авто',
    memory:'Цепь памяти', reaction:'Скорость реакции', focus:'Зона фокуса', typist:'Теневой печатник',
    trainMem:'Тренируй память', testReflex:'Проверь рефлексы',
    deepConc:'Глубокая концентрация', typeSurvive:'Печатай чтобы выжить',
    edit:'Редактировать', recurring:'Регулярная', del:'Удалить', moveUp:'↑ Раньше', moveDown:'↓ Позже',
    done:'Выполнено', notStarted:'Не начато', glasses:'стаканов', glassesCount:'3/5',
    drink:'Пить воду', run:'Утренняя пробежка', read:'Читать 30 мин', med:'Медитировать',
    morningR:'Утренняя рутина', deepW:'Глубокая работа', lunch:'Обед', exercise:'Тренировка',
    learning:'Обучение', freeTime:'Свободное время', windDown:'Расслабление', sleep:'Сон',
    darkMode:'Тёмная тема', notif:'Уведомления', aiSugg:'ИИ-рекомендации', sounds:'Звуки',
    resetData:'Сбросить все данные', lang:'Язык',
    wallet:'Кошелёк', mining:'Майнинг', profile:'Профиль',
    today:'СЕГОДНЯ', tomorrow:'ЗАВТРА', prev:'←', next:'→',
    aiHint:'Спроси NOX о чём угодно...',
    peakWork:'Пик работы',
  },
  uk: {
    greet_m:'Доброго ранку,', greet_a:'Доброго дня,', greet_e:'Доброго вечора,',
    dash:'Головна', sched:'Розклад', hab:'Звички', jour:'Щоденник', game:'Ігри', soc:'Соцмережа', chn:'Блокчейн',
    progress:'ПРОГРЕС ЗА ДЕНЬ', nextUp:'ДАЛІ', moodQ:'ЯК ТИ ПОЧУВАЄШЬСЯ?',
    moodHint:'Натисни щоб позначити настрій', streak:'ДНІВ ПІДРЯД', quickNote:'ШВИДКА НОТАТКА',
    save:'ЗБЕРЕГТИ', saved:'ЗБЕРЕЖЕНО ✓', viewFull:'ПОВНІСТЮ →',
    addTask:'+ ДОДАТИ', newHabit:'+ НОВА ЗВИЧКА', newEntry:'+ НОВИЙ ЗАПИС',
    title:'ЗАГОЛОВОК', mood:'НАСТРІЙ', cancel:'СКАСУВАТИ', add:'ДОДАТИ',
    weekOv:'ПІДСУМКИ ТИЖНЯ', schedule:'РОЗКЛАД', habits:'ЗВИЧКИ',
    journal_:'ЩОДЕННИК', games_:'МІНІ ІГРИ', social_:'СОЦМЕРЕЖА', chain_:'ACKI NACKI',
    coming:'СКОРО', close:'✕ ЗАКРИТИ', settings:'НАЛАШТУВАННЯ', reset:'СКИНУТИ',
    day:'День', week:'Тиждень', aiAuto:'ШІ Авто',
    memory:'Ланцюг пам\'яті', reaction:'Швидкість реакції', focus:'Зона фокусу', typist:'Тіньовий друкар',
    trainMem:'Тренуй пам\'ять', testReflex:'Перевір рефлекси',
    deepConc:'Глибока концентрація', typeSurvive:'Друкуй щоб вижити',
    edit:'Редагувати', recurring:'Регулярна', del:'Видалити', moveUp:'↑ Раніше', moveDown:'↓ Пізніше',
    done:'Виконано', notStarted:'Не почато', glasses:'стаканів', glassesCount:'3/5',
    drink:'Пити воду', run:'Ранкова пробіжка', read:'Читати 30 хв', med:'Медитувати',
    morningR:'Ранкова рутина', deepW:'Глибока робота', lunch:'Обід', exercise:'Тренування',
    learning:'Навчання', freeTime:'Вільний час', windDown:'Розслаблення', sleep:'Сон',
    darkMode:'Темна тема', notif:'Сповіщення', aiSugg:'ШІ-рекомендації', sounds:'Звуки',
    resetData:'Скинути всі дані', lang:'Мова',
    wallet:'Гаманець', mining:'Майнінг', profile:'Профіль',
    today:'СЬОГОДНІ', tomorrow:'ЗАВТРА', prev:'←', next:'→',
    aiHint:'Питай NOX про що завгодно...',
    peakWork:'Пік роботи',
  }
};

let S = {
  user: { name:'', age:'', timezone:'', goals:[], story:'', energyPeak:'', mood:null,
    streak:7, habits:[], notes:[], journal:[], lang:'en', recurringTasks:[], completedTasks:{} },
  currentStep: 0, dateOffset: 0
};

const t = (k) => (D[S.user.lang] || D.en)[k] || D.en[k] || k;

const Q = {
  en: ["The only way out is through.","Darkness is the beginning of something new.","Embrace the chaos. Find your order.","You are the architect of your reality.","In the void, we find our purpose.","Your habits shape your destiny."],
  ru: ["Единственный выход — через.","Тьма — начало чего-то нового.","Прими хаос. Найди свой порядок.","Ты — архитектор своей реальности.","В пустоте мы находим цель.","Твои привычки формируют судьбу."],
  uk: ["Єдиний вихід — через.","Темрява — це початок чогось нового.","Прийми хаос. Знайди свій порядок.","Ти — архітектор своєї реальності.","У порожнечі ми знаходимо мету.","Твої звички формують долю."]
};
function getQ(){const a=Q[S.user.lang]||Q.en;return a[Math.floor(Math.random()*a.length)];}

function save(){if(S.user.name)localStorage.setItem('nox_user',JSON.stringify(S.user));}

function updateClock(){
  const n=new Date(),tm=n.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:false});
  const d=n.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
  const el=document.getElementById('current-time');
  if(el)el.textContent=d+' · '+tm;
}

function selectLang(btn){
  document.querySelectorAll('.lang-card').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');S.user.lang=btn.dataset.lang;save();
}
function changeLang(lang,btn){
  document.querySelectorAll('.settings-lang-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');S.user.lang=lang;save();refreshUI();
}

function refreshUI(){
  const L=D[S.user.lang]||D.en;
  const navItems=document.querySelectorAll('.nav-label');
  const navKeys=['dash','sched','hab','jour','game','soc','chn'];
  navItems.forEach((el,i)=>{if(navKeys[i])el.textContent=L[navKeys[i]];});
  const setH=(id,k)=>{const e=document.getElementById(id);if(e)e.textContent=L[k];};
  setH('h-greeting-m','greet_m');setH('h-progress','progress');setH('h-nextup','nextUp');
  setH('h-mood','moodQ');setH('h-streak','streak');setH('h-quicknote','quickNote');
  setH('h-schedule','schedule');setH('h-habits','hab');setH('h-journal','journal_');
  setH('h-games','games_');setH('h-social','social_');setH('h-chain','chain_');
  setH('h-settings','settings');
  document.querySelectorAll('.btn-tab').forEach(b=>{
    const v=b.dataset.view;if(v==='day')b.textContent=L.day;else if(v==='week')b.textContent=L.week;else b.textContent=L.aiAuto;
  });
  setH('btn-add-task','addTask');setH('btn-add-habit','newHabit');setH('btn-new-entry','newEntry');
  setH('game-mem-title','memory');setH('game-react-title','reaction');
  setH('game-focus-title','focus');setH('game-type-title','typist');
  setH('game-mem-desc','trainMem');setH('game-react-desc','testReflex');
  setH('game-focus-desc','deepConc');setH('game-type-desc','typeSurvive');
  setH('chain-title','coming');
  setH('feat-wallet','wallet');setH('feat-mining','mining');setH('feat-profile','profile');
  setH('set-dark','darkMode');setH('set-notif','notif');
  setH('set-ai','aiSugg');setH('set-sound','sounds');
  setH('set-reset-label','resetData');setH('set-reset-btn','reset');setH('set-lang','lang');
  const aiInput=document.getElementById('ai-input');if(aiInput)aiInput.placeholder=L.aiHint;
  const tasks={'t-morning':L.morningR,'t-deepwork':L.deepW,'t-lunch':L.lunch,
    't-exercise':L.exercise,'t-learning':L.learning,'t-free':L.freeTime,
    't-wind':L.windDown,'t-sleep':L.sleep};
  Object.entries(tasks).forEach(([id,txt])=>{const e=document.getElementById(id);if(e)e.textContent=txt;});
  updateCalendar();updateGreeting();
  const qEl=document.getElementById('greeting-quote');if(qEl)qEl.textContent=getQ();
}

document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    document.getElementById('boot-screen').style.display='none';
    const s=localStorage.getItem('nox_user');
    if(s){try{S.user={...S.user,...JSON.parse(s)};if(S.user.name){showApp();return;}}catch(e){}}
    document.getElementById('onboarding').classList.remove('hidden');
  },3500);
  updateClock();setInterval(updateClock,1000);setInterval(save,30000);
  setupLongPress();setupDashboardTasks();initCalendar();
});

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
  refreshUI();updateProgressRing(65);updateStreak(S.user.streak);restoreCompletedTasks();
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
  ring.style.stroke='url(#ng)';document.getElementById('daily-pct').textContent=pct+'%';
}
function updateStreak(c){document.getElementById('streak-count').textContent=c;document.getElementById('streak-flames').textContent='🔥'.repeat(Math.min(c,10));}

function selectMood(btn){
  document.querySelectorAll('.mood-selector:not(.small) .mood-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');S.user.mood=btn.dataset.mood;save();
  const L=D[S.user.lang]||D.en;
  const h={ru:{great:'Мощь!',good:'Отлично!',neutral:'Стабильно.',low:'Тяжёлый день?',bad:'Всё нормально.'},en:{great:'Powerful!',good:'Nice!',neutral:'Steady.',low:'Tough day?',bad:'Take it easy.'},uk:{great:'Міць!',good:'Чудово!',neutral:'Стабільно.',low:'Важкий день?',bad:'Все нормально.'}};
  document.getElementById('mood-hint').textContent=(h[S.user.lang]||h.en)[S.user.mood]||'';
}
function selectEntryMood(btn){btn.closest('.mood-selector').querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');}

function switchSection(s,btn){
  document.querySelectorAll('.section').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('sec-'+s).classList.add('active');
  if(btn)btn.classList.add('active');
}

function switchScheduleView(v,btn){
  document.querySelectorAll('.btn-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');if(v==='custom')generateAISchedule();updateCalendar();
}
function generateAISchedule(){
  document.querySelectorAll('.time-slot.task-block, .time-slot.empty').forEach(s=>{s.className='time-slot empty';s.textContent='';s.style.opacity='';s.style.textDecoration='';});
  const peak=S.user.energyPeak?parseInt(S.user.energyPeak.split(':')[0]):10;
  const L=D[S.user.lang]||D.en;
  const tasks={pk:L.peakWork,brk:L.lunch,ex:L.exercise,eve:L.freeTime,wind:L.windDown,slp:L.sleep};
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

function toggleTaskComplete(slot){
  if(!slot.classList.contains('task-block'))return;
  const b=slot.closest('.time-block'),h=b.dataset.hour;
  const key='task_'+h+'_'+getDateKey(S.dateOffset);
  if(slot.classList.contains('completed')){slot.classList.remove('completed');slot.style.opacity='';slot.style.textDecoration='';delete S.user.completedTasks[key];}
  else{slot.classList.add('completed');slot.style.opacity='0.5';slot.style.textDecoration='line-through';S.user.completedTasks[key]=true;}
  save();updateDailyProgress();
}
function setupDashboardTasks(){
  document.addEventListener('click',e=>{
    const item=e.target.closest('.task-item');if(!item)return;
    const st=item.querySelector('.task-status');if(!st)return;
    if(st.classList.contains('done')){st.classList.remove('done');st.classList.add('pending');st.textContent='○';}
    else{st.classList.remove('pending','active');st.classList.add('done');st.textContent='✓';}
  });
}
function restoreCompletedTasks(){
  const today=getDateKey(0);
  document.querySelectorAll('.time-slot.task-block').forEach(s=>{
    const b=s.closest('.time-block'),key='task_'+b.dataset.hour+'_'+today;
    if(S.user.completedTasks&&S.user.completedTasks[key]){s.classList.add('completed');s.style.opacity='0.5';s.style.textDecoration='line-through';}
  });updateDailyProgress();
}
function updateDailyProgress(){
  const total=document.querySelectorAll('.time-slot.task-block').length;
  const done=document.querySelectorAll('.time-slot.task-block.completed').length;
  updateProgressRing(total>0?Math.round((done/total)*100):0);
}

/* ===== CALENDAR ===== */
function getDateKey(offset){
  const d=new Date();d.setDate(d.getDate()+(offset||0));return d.toISOString().split('T')[0];
}
function initCalendar(){
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
    if(S.dateOffset===0)calLabel.textContent=L.today+' · '+dayNames[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()];
    else if(S.dateOffset===1)calLabel.textContent=L.tomorrow+' · '+dayNames[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()];
    else calLabel.textContent=dayNames[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()];
  }
  generateAISchedule();restoreCompletedTasks();
}

/* ===== CONTEXT MENU + DRAG-TO-REORDER ===== */
let dragState=null;

function setupLongPress(){
  document.addEventListener('touchstart',e=>{
    const slot=e.target.closest('.time-slot.task-block');
    if(!slot)return;
    dragState={el:slot,startY:e.touches[0].clientY,startX:e.touches[0].clientX,moved:false,timer:null};
    dragState.timer=setTimeout(()=>{if(!dragState.moved)showTaskMenu(slot);},600);
  },{passive:true});
  document.addEventListener('touchmove',e=>{
    if(!dragState)return;
    const dy=Math.abs(e.touches[0].clientY-dragState.startY);
    const dx=Math.abs(e.touches[0].clientX-dragState.startX);
    if(dy>10||dx>10){dragState.moved=true;clearTimeout(dragState.timer);}
    if(dragState.moved&&dy>30){
      clearTimeout(dragState.timer);
      const dir=e.touches[0].clientY>dragState.startY?1:-1;
      dragState.el.style.opacity='0.6';
      moveTask(parseInt(dragState.el.closest('.time-block').dataset.hour),dir);
      dragState.startY=e.touches[0].clientY;
    }
  },{passive:true});
  document.addEventListener('touchend',()=>{
    if(dragState&&dragState.el)dragState.el.style.opacity='';
    dragState=null;
  });
  document.addEventListener('click',e=>{
    const slot=e.target.closest('.time-slot.task-block');
    if(slot&&!e.target.closest('.ctx-item'))toggleTaskComplete(slot);
  });
}

function showTaskMenu(slot){
  document.querySelectorAll('.context-menu').forEach(m=>m.remove());
  const h=parseInt(slot.closest('.time-block').dataset.hour),name=slot.textContent;
  const L=D[S.user.lang]||D.en;
  const m=document.createElement('div');m.className='context-menu';
  m.innerHTML='<div class="ctx-header">'+name+'</div>'
    +'<button class="ctx-item" onclick="moveTask('+h+',-1)">'+L.moveUp+'</button>'
    +'<button class="ctx-item" onclick="moveTask('+h+',1)">'+L.moveDown+'</button>'
    +'<button class="ctx-item" onclick="editTask('+h+')">✏️ '+L.edit+'</button>'
    +'<button class="ctx-item" onclick="makeRecurring('+h+')">🔄 '+L.recurring+'</button>'
    +'<button class="ctx-item danger" onclick="deleteTask('+h+')">🗑️ '+L.del+'</button>';
  const r=slot.getBoundingClientRect();
  m.style.cssText='position:fixed;top:'+(r.bottom+4)+'px;left:'+Math.min(r.left,window.innerWidth-200)+'px;z-index:500;';
  document.body.appendChild(m);
  setTimeout(()=>{
    const dismiss=(e)=>{if(!m.contains(e.target)){m.remove();document.removeEventListener('click',dismiss);}};
    document.addEventListener('click',dismiss);
  },50);
}

function moveTask(hour,dir){
  document.querySelectorAll('.context-menu').forEach(m=>m.remove());
  const newH=hour+dir;if(newH<6||newH>22)return;
  const src=document.querySelector('.time-block[data-hour="'+hour+'"] .time-slot');
  const dst=document.querySelector('.time-block[data-hour="'+newH+'"] .time-slot');
  const sc=src.className,st=src.textContent,scl=src.classList.contains('completed');
  const dc=dst.className,dt=dst.textContent,dcl=dst.classList.contains('completed');
  src.className=dc;src.textContent=dt;
  dst.className=sc;dst.textContent=st;
  if(dcl){src.classList.add('completed');src.style.opacity='0.5';src.style.textDecoration='line-through';}
  else{src.classList.remove('completed');src.style.opacity='';src.style.textDecoration='';}
  if(scl){dst.classList.add('completed');dst.style.opacity='0.5';dst.style.textDecoration='line-through';}
  else{dst.classList.remove('completed');dst.style.opacity='';dst.style.textDecoration='';}
  const today=getDateKey(S.dateOffset);
  const ok='task_'+hour+'_'+today,nk='task_'+newH+'_'+today;
  if(S.user.completedTasks[ok]){S.user.completedTasks[nk]=true;delete S.user.completedTasks[ok];}
  save();updateDailyProgress();
}

function editTask(hour){
  document.querySelectorAll('.context-menu').forEach(m=>m.remove());
  const s=document.querySelector('.time-block[data-hour="'+hour+'"] .time-slot'),cur=s.textContent;
  const L=D[S.user.lang]||D.en;
  document.getElementById('modal-title').textContent=L.edit;
  document.getElementById('modal-body').innerHTML='<div class="form-group"><label>'+L.title+'</label><input type="text" id="edit-task-name" value="'+cur+'"></div><div class="form-group"><label>TIME</label><input type="time" id="edit-task-time" value="'+String(hour).padStart(2,'0')+':00"></div><button class="btn-primary" onclick="saveEditTask('+hour+')" style="width:100%">'+L.save+'</button>';
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function saveEditTask(oldH){
  const n=document.getElementById('edit-task-name').value.trim(),tm=document.getElementById('edit-task-time').value;
  if(!n)return;
  const o=document.querySelector('.time-block[data-hour="'+oldH+'"] .time-slot');
  o.className='time-slot empty';o.textContent='';o.style.opacity='';o.style.textDecoration='';
  const newH=parseInt(tm.split(':')[0]),nb=document.querySelector('.time-block[data-hour="'+newH+'"] .time-slot');
  nb.className='time-slot task-block '+getCat(n);nb.textContent=n;
  closeModal();save();
}
function getCat(n){const l=n.toLowerCase();if(l.match(/work|deep|работа|глуб|робота|глиб/))return'work';if(l.match(/exerc|run|gym|трен|спорт|пробіж|тренув/))return'exercise';if(l.match(/learn|study|read|учёб|чит|навч/))return'learning';if(l.match(/lunch|break|food|обед|перерыв|обід/))return'break';if(l.match(/sleep|bed|сон/))return'sleep';return'work';}
function makeRecurring(hour){
  document.querySelectorAll('.context-menu').forEach(m=>m.remove());
  const s=document.querySelector('.time-block[data-hour="'+hour+'"] .time-slot');
  if(!S.user.recurringTasks)S.user.recurringTasks=[];
  if(!S.user.recurringTasks.find(r=>r.hour==hour)){S.user.recurringTasks.push({hour,name:s.textContent});save();alert(S.user.lang==='ru'?'Регулярная задача создана!':'Recurring task created!');}
}
function deleteTask(hour){
  document.querySelectorAll('.context-menu').forEach(m=>m.remove());
  const s=document.querySelector('.time-block[data-hour="'+hour+'"] .time-slot');
  s.className='time-slot empty';s.textContent='';s.style.opacity='';s.style.textDecoration='';
  delete S.user.completedTasks['task_'+hour+'_'+getDateKey(S.dateOffset)];save();updateDailyProgress();
}

function toggleHabitCheck(btn){btn.classList.toggle('done');save();}

function openNewEntry(){document.getElementById('new-entry-form').classList.remove('hidden');}
function closeNewEntry(){document.getElementById('new-entry-form').classList.add('hidden');document.getElementById('entry-title').value='';document.getElementById('entry-body').value='';}
function saveEntry(){
  const title=document.getElementById('entry-title').value.trim(),body=document.getElementById('entry-body').value.trim();
  const m=document.querySelector('.journal-form .mood-btn.selected');
  if(!title||!body)return;
  S.user.journal.unshift({title,body,mood:m?m.textContent:'😐',date:new Date(),tags:body.split(' ').filter(w=>w.length>5).slice(0,2)});
  save();closeNewEntry();
}
function saveQuickNote(){
  const note=document.getElementById('quick-note').value.trim();if(!note)return;
  S.user.notes.unshift({text:note,time:new Date()});save();
  document.getElementById('quick-note').value='';
  const L=D[S.user.lang]||D.en;const btn=event.target;
  btn.textContent=L.saved;btn.style.borderColor='var(--neon-green)';btn.style.color='var(--neon-green)';
  setTimeout(()=>{btn.textContent=L.save;btn.style.borderColor='';btn.style.color='';},1500);
}

function toggleAIPanel(){document.getElementById('ai-panel').classList.toggle('hidden');document.getElementById('settings-panel').classList.add('hidden');}
function sendAI(){
  const input=document.getElementById('ai-input'),msg=input.value.trim();if(!msg)return;
  const mc=document.getElementById('ai-messages');
  mc.insertAdjacentHTML('beforeend','<div class="ai-msg user">'+msg+'</div>');input.value='';
  setTimeout(()=>{mc.insertAdjacentHTML('beforeend','<div class="ai-msg ai">'+genAI(msg)+'</div>');mc.scrollTop=mc.scrollHeight;},800);
  mc.scrollTop=mc.scrollHeight;
}
function genAI(m){
  const l=m.toLowerCase();
  if(l.match(/schedule|расписан|розклад/))return'Based on your energy peak at '+S.user.energyPeak+', schedule demanding tasks between 9-12.';
  if(l.match(/habit|привыч|звичк/))return'You\'ve been consistent with 2 of 4 tracked habits this week.';
  if(l.match(/mood|настроен|настрій/))return'Your mood dips around 3-4 PM. I suggest a short break.';
  return'Thanks, '+(S.user.name||'friend')+'. Ask about schedule, habits, or mood.';
}

function toggleSettings(){
  document.getElementById('settings-panel').classList.toggle('hidden');
  document.getElementById('ai-panel').classList.add('hidden');
  if(!document.getElementById('settings-panel').classList.contains('hidden'))
    document.querySelectorAll('.settings-lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===S.user.lang));
}
function resetData(){if(confirm('Delete all NOX data?')){localStorage.clear();location.reload();}}

function openAddTask(){
  const L=D[S.user.lang]||D.en;
  document.getElementById('modal-title').textContent=L.addTask;
  document.getElementById('modal-body').innerHTML='<div class="form-group"><label>'+L.title+'</label><input type="text" id="new-task-name"></div><div class="form-group"><label>TIME</label><input type="time" id="new-task-time" value="09:00"></div><div class="form-group"><label>CATEGORY</label><select id="new-task-cat"><option value="work">'+L.deepW+'</option><option value="exercise">'+L.exercise+'</option><option value="learning">'+L.learning+'</option><option value="break">'+L.lunch+'</option><option value="evening">'+L.freeTime+'</option></select></div><button class="btn-primary" onclick="addTask()" style="width:100%">'+L.add+'</button>';
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function openAddHabit(){
  const L=D[S.user.lang]||D.en;
  document.getElementById('modal-title').textContent=L.newHabit;
  document.getElementById('modal-body').innerHTML='<div class="form-group"><label>'+L.title+'</label><input type="text" id="new-habit-name"></div><button class="btn-primary" onclick="addHabit()" style="width:100%">'+L.add+'</button>';
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function addTask(){
  const n=document.getElementById('new-task-name').value.trim(),tm=document.getElementById('new-task-time').value,c=document.getElementById('new-task-cat').value;
  if(!n){shakeEl(document.getElementById('new-task-name'));return;}
  const h=parseInt(tm.split(':')[0]),s=document.querySelector('.time-block[data-hour="'+h+'"] .time-slot');
  s.className='time-slot task-block '+c;s.textContent=n;closeModal();save();
}
function addHabit(){
  const n=document.getElementById('new-habit-name').value.trim();
  if(!n){shakeEl(document.getElementById('new-habit-name'));return;}
  const g=document.getElementById('habits-grid'),card=document.createElement('div');card.className='habit-card';
  card.innerHTML='<div class="habit-icon">⭐</div><div class="habit-info"><h4>'+n+'</h4><div class="habit-progress"><div class="habit-bar"><div class="habit-bar-fill" style="width:0%"></div></div><span>0%</span></div></div><button class="habit-check" onclick="toggleHabitCheck(this)">✓</button>';
  g.appendChild(card);closeModal();save();
}
function closeModal(){document.getElementById('modal-overlay').classList.add('hidden');}
function toggleLike(btn){btn.classList.toggle('liked');}
