// ─────────────────────────────────────────────────────────────
//  NOBLES FAMILY HUNT — Singapore & Disney Adventure 2026
// ─────────────────────────────────────────────────────────────

const HUNT_ITEMS = [
  // ── ARRIVAL DAY (5 pts) ──────────────────────────────────
  { id:'arr1', cat:'Arrival Day', pts:5,  emoji:'🤳', label:'Group selfie after everyone arrives in Singapore' },
  { id:'arr2', cat:'Arrival Day', pts:5,  emoji:'💧', label:'Photo with the Jewel Rain Vortex' },
  { id:'arr3', cat:'Arrival Day', pts:5,  emoji:'✈️', label:'Spot a Singapore Airlines plane' },
  { id:'arr4', cat:'Arrival Day', pts:5,  emoji:'📝', label:'Find a sign written in all four official languages (English, Mandarin, Malay, Tamil)' },
  { id:'arr5', cat:'Arrival Day', pts:5,  emoji:'🍽️', label:"Take a photo of everyone's first Singapore meal" },
  { id:'arr6', cat:'Arrival Day', pts:5,  emoji:'🦁', label:'Find something shaped like a lion' },
  { id:'arr7', cat:'Arrival Day', pts:5,  emoji:'😜', label:'Take a silly face photo with another family member' },

  // ── HAWKER FOOD CHALLENGES (10 pts) ─────────────────────
  { id:'hk1',  cat:'Hawker Food Challenges', pts:10, emoji:'🍗', label:'Eat chicken rice' },
  { id:'hk2',  cat:'Hawker Food Challenges', pts:10, emoji:'🍢', label:'Eat satay' },
  { id:'hk3',  cat:'Hawker Food Challenges', pts:10, emoji:'🥤', label:'Drink sugar cane juice' },
  { id:'hk4',  cat:'Hawker Food Challenges', pts:10, emoji:'🍲', label:'Try laksa' },
  { id:'hk5',  cat:'Hawker Food Challenges', pts:10, emoji:'👆', label:'Order food using only pointing' },
  { id:'hk6',  cat:'Hawker Food Challenges', pts:10, emoji:'💵', label:'Take a photo with food under $5 SGD' },
  { id:'hk7',  cat:'Hawker Food Challenges', pts:10, emoji:'🆕', label:"Try something you've never eaten before" },
  { id:'hk8',  cat:'Hawker Food Challenges', pts:10, emoji:'📸', label:'Take a dramatic food influencer photo' },

  // ── SENTOSA ADVENTURE (10 pts) ───────────────────────────
  { id:'sen1', cat:'Sentosa Adventure', pts:10, emoji:'🚡', label:'Ride the Cable Car' },
  { id:'sen2', cat:'Sentosa Adventure', pts:10, emoji:'🛷', label:'Ride the Skyline Luge' },
  { id:'sen3', cat:'Sentosa Adventure', pts:10, emoji:'🎢', label:'Ride HyperDrive' },
  { id:'sen4', cat:'Sentosa Adventure', pts:10, emoji:'🐚', label:'Find a seashell' },
  { id:'sen5', cat:'Sentosa Adventure', pts:10, emoji:'🌴', label:'Take a photo with a palm tree' },
  { id:'sen6', cat:'Sentosa Adventure', pts:10, emoji:'📰', label:'Take a travel magazine cover worthy photo' },
  { id:'sen7', cat:'Sentosa Adventure', pts:10, emoji:'🏖️', label:'Take a group beach selfie' },

  // ── DISNEY CRUISE (15 pts) ───────────────────────────────
  { id:'dis1',  cat:'Disney Cruise', pts:15, emoji:'🐭', label:'Take a photo with a Disney character' },
  { id:'dis2',  cat:'Disney Cruise', pts:15, emoji:'🎭', label:'Watch a Disney show' },
  { id:'dis3',  cat:'Disney Cruise', pts:15, emoji:'🌅', label:'Watch a sunset from the ship' },
  { id:'dis4',  cat:'Disney Cruise', pts:15, emoji:'🍦', label:'Eat ice cream twice in one day' },
  { id:'dis5',  cat:'Disney Cruise', pts:15, emoji:'🛳️', label:'Take a photo from the highest deck' },
  { id:'dis6',  cat:'Disney Cruise', pts:15, emoji:'🧢', label:'Take a photo with Captain Mickey' },
  { id:'dis7',  cat:'Disney Cruise', pts:15, emoji:'👨‍👩‍👧‍👦', label:'Take a photo of the entire group onboard' },
  { id:'dis8',  cat:'Disney Cruise', pts:15, emoji:'🔍', label:'Find a Hidden Mickey somewhere on the ship' },
  { id:'dis9',  cat:'Disney Cruise', pts:15, emoji:'👸', label:'Spot a Disney Princess' },
  { id:'dis10', cat:'Disney Cruise', pts:15, emoji:'👂', label:'Take a photo wearing Mickey ears' },
  { id:'dis11', cat:'Disney Cruise', pts:15, emoji:'✨', label:'Find something that sparkles' },
  { id:'dis12', cat:'Disney Cruise', pts:15, emoji:'⏰', label:'Be the first person at breakfast or dinner' },
  { id:'dis13', cat:'Disney Cruise', pts:15, emoji:'🗿', label:'Find a Disney character statue' },
  { id:'dis14', cat:'Disney Cruise', pts:15, emoji:'🚴', label:'Ride the Iron Cycle Test Run' },
  { id:'dis15', cat:'Disney Cruise', pts:15, emoji:'🤫', label:'Find the quietest spot on the ship' },
  { id:'dis16', cat:'Disney Cruise', pts:15, emoji:'🍰', label:"Try a dessert you've never had before" },
  { id:'dis17', cat:'Disney Cruise', pts:15, emoji:'🍹', label:'Try a virgin Piña Colada' },
  { id:'dis18', cat:'Disney Cruise', pts:15, emoji:'😎', label:'Find the coolest thing onboard' },
  { id:'dis19', cat:'Disney Cruise', pts:15, emoji:'🎤', label:'Sing karaoke onboard' },

  // ── DISNEY ADVENTURE BONUS (25 pts) ─────────────────────
  { id:'dab1', cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🏃', label:'Be the first person in the family to visit every themed area' },
  { id:'dab2', cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🌊', label:'Complete a waterslide multiple times' },
  { id:'dab3', cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🎯', label:'Win a game or trivia activity' },
  { id:'dab4', cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🔍', label:'Find 3 Hidden Mickeys' },
  { id:'dab5', cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🎡', label:'Ride every attraction on the ship' },
  { id:'dab6', cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🍴', label:"Try 3 foods you've never eaten before" },
  { id:'dab7', cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🎪', label:'Attend 3 different onboard activities' },
  { id:'dab8', cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🗺️', label:"Find a spot on the ship nobody else in the family has discovered yet" },
  { id:'dab9', cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'💬', label:'Convince another family member to explore a new area' },

  // ── PASSPORT CHALLENGE (50 pts) ──────────────────────────
  { id:'pass1', cat:'Passport Challenge 🗺️', pts:50, emoji:'🎖️', label:'Visit all 7 themed lands — Imagination Garden · Disney Discovery Reef · San Fransokyo Street · Marvel Landing · Toy Story Place · Town Square · Wayfinder Bay' },

  // ── MARINA BAY ICONS (15 pts) ────────────────────────────
  { id:'mb1', cat:'Marina Bay Icons', pts:15, emoji:'🦁', label:'Photo with the Merlion' },
  { id:'mb2', cat:'Marina Bay Icons', pts:15, emoji:'🌉', label:'Photo on Helix Bridge' },
  { id:'mb3', cat:'Marina Bay Icons', pts:15, emoji:'🌿', label:'Photo at Gardens by the Bay' },
  { id:'mb4', cat:'Marina Bay Icons', pts:15, emoji:'🌳', label:'Capture the Supertrees lit up' },
  { id:'mb5', cat:'Marina Bay Icons', pts:15, emoji:'🏨', label:'Photo with Marina Bay Sands' },
  { id:'mb6', cat:'Marina Bay Icons', pts:15, emoji:'👜', label:'Photo with the Louis Vuitton Floating Store' },
  { id:'mb7', cat:'Marina Bay Icons', pts:15, emoji:'🎵', label:'Record part of the Garden Rhapsody show' },

  // ── CULTURAL SINGAPORE (10 pts) ──────────────────────────
  { id:'cul1',  cat:'Cultural Singapore', pts:10, emoji:'🏮', label:'Find the giant red lanterns hanging over Smith Street in Chinatown' },
  { id:'cul2',  cat:'Cultural Singapore', pts:10, emoji:'🐉', label:'Find a Chinese dragon decoration in Chinatown' },
  { id:'cul3',  cat:'Cultural Singapore', pts:10, emoji:'🎨', label:'Find a mural showing old Singapore' },
  { id:'cul4',  cat:'Cultural Singapore', pts:10, emoji:'☂️',  label:'Find the colorful umbrellas hanging above a street in Little India' },
  { id:'cul5',  cat:'Cultural Singapore', pts:10, emoji:'🐄', label:'Find a statue of a cow in Little India' },
  { id:'cul6',  cat:'Cultural Singapore', pts:10, emoji:'💐', label:'Spot a flower garland shop in Little India' },
  { id:'cul7',  cat:'Cultural Singapore', pts:10, emoji:'🏘️', label:'Find the most colorful building in Little India and take a photo' },
  { id:'cul8',  cat:'Cultural Singapore', pts:10, emoji:'🦁', label:"Find a lion somewhere that isn't the Merlion" },
  { id:'cul9',  cat:'Cultural Singapore', pts:10, emoji:'⛩️', label:'Visit Buddha Tooth Relic Temple' },
  { id:'cul10', cat:'Cultural Singapore', pts:10, emoji:'🛍️', label:'Buy a souvenir under $10 SGD' },
  { id:'cul11', cat:'Cultural Singapore', pts:10, emoji:'🏪', label:'Visit Mustafa Centre' },
  { id:'cul12', cat:'Cultural Singapore', pts:10, emoji:'🎨', label:'Take a photo with street art' },
  { id:'cul13', cat:'Cultural Singapore', pts:10, emoji:'🚲', label:'Spot a trishaw (bike taxi)' },
  { id:'cul14', cat:'Cultural Singapore', pts:10, emoji:'🏛️', label:'Find a Peranakan-style building' },
  { id:'cul15', cat:'Cultural Singapore', pts:10, emoji:'⏳', label:'Find something older than 100 years in Singapore' },

  // ── NOBLES FAMILY BONUS (25 pts) ─────────────────────────
  { id:'nfb1', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🤴', label:'Convince Dad to pose like a Disney Prince' },
  { id:'nfb2', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'📱', label:'Convince Myles to do a TikTok' },
  { id:'nfb3', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🧍', label:'Get everyone doing the exact same pose' },
  { id:'nfb4', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🎬', label:'Recreate a Disney movie scene' },
  { id:'nfb5', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'😴', label:'Capture someone being sleep master sensei or grub master sensei' },
  { id:'nfb6', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🕐', label:'Catch Jeslin or Zoe running late — photographic evidence required' },
  { id:'nfb7', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'📷', label:'Recreate a childhood family photo' },
  { id:'nfb8', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'👁️', label:'Take a photo where nobody looks at the camera' },

  // ── LEGENDARY CHALLENGES (50 pts) ────────────────────────
  { id:'leg1', cat:'Legendary Challenges 🏆', pts:50, emoji:'🦘', label:'Entire group jumps in one photo' },
  { id:'leg2', cat:'Legendary Challenges 🏆', pts:50, emoji:'🐭', label:'Entire group in Disney gear' },
  { id:'leg3', cat:'Legendary Challenges 🏆', pts:50, emoji:'🦀', label:'Everyone tries chili crab' },
  { id:'leg4', cat:'Legendary Challenges 🏆', pts:50, emoji:'🌵', label:'Try durian' },
  { id:'leg5', cat:'Legendary Challenges 🏆', pts:50, emoji:'🌿', label:'Family photo at Gardens by the Bay with Marina Bay Sands visible' },
  { id:'leg6', cat:'Legendary Challenges 🏆', pts:50, emoji:'🌅', label:'Family photo on the Disney ship at sunset' },

  // ── GRAND CHALLENGE (100 pts) ────────────────────────────
  { id:'grd1', cat:'Grand Challenge 💎', pts:100, emoji:'📸', label:'Get every single person on the trip into one photo — Marina Bay Sands, Gardens by the Bay, or the Disney Ship' },
  { id:'grd2', cat:'Grand Challenge 💎', pts:100, emoji:'💃', label:'Teach another family member a dance move' },
  { id:'grd3', cat:'Grand Challenge 💎', pts:100, emoji:'😂', label:'Take the funniest photo of the trip' },
];

// ─────────────────────────────────────────────────────────────
//  Storage helpers
// ─────────────────────────────────────────────────────────────

const KEY_PLAYERS = 'nh_players';
const keyState    = name => `nh_state_${name}`;

function loadPlayers() {
  try { return JSON.parse(localStorage.getItem(KEY_PLAYERS)) || []; }
  catch { return []; }
}
function savePlayers(arr) { localStorage.setItem(KEY_PLAYERS, JSON.stringify(arr)); }

function loadState(name) {
  try {
    const s = JSON.parse(localStorage.getItem(keyState(name)));
    if (s) return s;
  } catch {}
  return { name, checked: [], pts: 0 };
}
function saveState(s) { localStorage.setItem(keyState(s.name), JSON.stringify(s)); }

// ─────────────────────────────────────────────────────────────
//  App state
// ─────────────────────────────────────────────────────────────

let currentPlayer = null;

const TOTAL_PTS  = HUNT_ITEMS.reduce((s, i) => s + i.pts, 0);
const TOTAL_ITEMS = HUNT_ITEMS.length;

// ─────────────────────────────────────────────────────────────
//  DOM refs
// ─────────────────────────────────────────────────────────────

const screenWelcome = document.getElementById('screen-welcome');
const screenApp     = document.getElementById('screen-app');
const playerListEl  = document.getElementById('player-list');
const nameInput     = document.getElementById('name-input');
const joinBtn       = document.getElementById('join-btn');
const backBtn       = document.getElementById('back-btn');
const headerName    = document.getElementById('header-name');
const scoreNumEl    = document.getElementById('score-num');
const progressFill  = document.getElementById('progress-fill');
const metaFound     = document.getElementById('meta-found');
const metaTotal     = document.getElementById('meta-total');
const metaMax       = document.getElementById('meta-max');
const completionSlot = document.getElementById('completion-slot');
const huntList      = document.getElementById('hunt-list');
const lbList        = document.getElementById('lb-list');
const confettiCanvas = document.getElementById('confetti');

// ─────────────────────────────────────────────────────────────
//  Welcome screen
// ─────────────────────────────────────────────────────────────

function renderWelcome() {
  const players = loadPlayers();
  if (players.length === 0) {
    playerListEl.innerHTML = '';
    return;
  }
  playerListEl.innerHTML = players.map(name => {
    const s = loadState(name);
    const pct = TOTAL_ITEMS > 0 ? Math.round(s.checked.length / TOTAL_ITEMS * 100) : 0;
    return `
      <div class="player-card" data-name="${esc(name)}">
        <div class="p-avatar">${name[0].toUpperCase()}</div>
        <div class="p-meta">
          <div class="p-name">${esc(name)}</div>
          <div class="p-progress">${s.pts} pts · ${s.checked.length}/${TOTAL_ITEMS} items · ${pct}%</div>
        </div>
        <svg class="p-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </div>`;
  }).join('');

  playerListEl.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('click', () => startHunt(card.dataset.name));
  });
}

joinBtn.addEventListener('click', joinHunt);
nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') joinHunt(); });

function joinHunt() {
  const name = nameInput.value.trim();
  if (!name) return;
  const players = loadPlayers();
  if (!players.includes(name)) {
    players.push(name);
    savePlayers(players);
    saveState({ name, checked: [], pts: 0 });
  }
  nameInput.value = '';
  startHunt(name);
}

// ─────────────────────────────────────────────────────────────
//  Hunt screen
// ─────────────────────────────────────────────────────────────

function startHunt(name) {
  currentPlayer = name;
  headerName.textContent = name;
  renderHunt();
  renderLeaderboard();
  switchTab('hunt');
  showScreen(screenApp);
}

function renderHunt() {
  const state = loadState(currentPlayer);
  const found = state.checked.length;
  const pct   = TOTAL_ITEMS > 0 ? (found / TOTAL_ITEMS) * 100 : 0;

  progressFill.style.width = pct + '%';
  metaFound.textContent = found;
  metaTotal.textContent = TOTAL_ITEMS;
  metaMax.textContent   = TOTAL_PTS.toLocaleString();
  animateScore(state.pts);

  // completion banner
  completionSlot.innerHTML = '';
  if (found === TOTAL_ITEMS && TOTAL_ITEMS > 0) {
    completionSlot.innerHTML = `
      <div class="completion-banner">
        <h3>🎉 Hunt Complete!</h3>
        <p>All ${TOTAL_ITEMS} items found · ${state.pts.toLocaleString()} pts</p>
      </div>`;
  }

  // group by category
  const cats = [...new Set(HUNT_ITEMS.map(i => i.cat))];
  huntList.innerHTML = cats.map(cat => {
    const items = HUNT_ITEMS.filter(i => i.cat === cat);
    const catPts = items[0].pts;
    return `
      <div class="cat-block">
        <div class="cat-header">
          ${esc(cat)}
          <span class="cat-pts">${catPts} pts</span>
        </div>
        ${items.map(item => renderItem(item, state)).join('')}
      </div>`;
  }).join('');

  huntList.querySelectorAll('.item').forEach(el => {
    el.addEventListener('click', () => toggle(el.dataset.id));
  });
}

function renderItem(item, state) {
  const checked = state.checked.includes(item.id);
  return `
    <div class="item${checked ? ' checked' : ''}" data-id="${item.id}">
      <div class="item-check">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a1628" stroke-width="3.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <div class="item-emoji">${item.emoji}</div>
      <div class="item-label">${esc(item.label)}</div>
      <div class="item-pts">${item.pts}</div>
    </div>`;
}

function toggle(itemId) {
  const state = loadState(currentPlayer);
  const item  = HUNT_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const wasChecked = state.checked.includes(itemId);
  if (wasChecked) {
    state.checked = state.checked.filter(id => id !== itemId);
    state.pts -= item.pts;
  } else {
    state.checked.push(itemId);
    state.pts += item.pts;
  }
  state.pts = Math.max(0, state.pts);

  const justCompleted = !wasChecked && state.checked.length === TOTAL_ITEMS;
  saveState(state);
  renderHunt();
  if (justCompleted) triggerConfetti();
}

function animateScore(val) {
  const cur = parseInt(scoreNumEl.textContent) || 0;
  if (cur === val) return;
  scoreNumEl.textContent = val;
  scoreNumEl.classList.remove('bump');
  void scoreNumEl.offsetWidth;
  scoreNumEl.classList.add('bump');
  setTimeout(() => scoreNumEl.classList.remove('bump'), 300);
}

// ─────────────────────────────────────────────────────────────
//  Leaderboard
// ─────────────────────────────────────────────────────────────

function renderLeaderboard() {
  const players = loadPlayers();
  if (players.length === 0) {
    lbList.innerHTML = `<div class="lb-empty"><div class="e-icon">🏆</div><p>No players yet — start the hunt!</p></div>`;
    return;
  }

  const ranked = players
    .map(name => loadState(name))
    .sort((a, b) => b.pts - a.pts);

  const medals = ['🥇','🥈','🥉'];

  lbList.innerHTML = ranked.map((s, i) => {
    const rClass = i === 0 ? 'r1' : i === 1 ? 'r2' : i === 2 ? 'r3' : '';
    const isMe   = s.name === currentPlayer;
    const badge  = medals[i] || (i + 1);
    const pct    = TOTAL_ITEMS > 0 ? Math.round(s.checked.length / TOTAL_ITEMS * 100) : 0;
    return `
      <div class="lb-item ${rClass}${isMe ? ' me' : ''}">
        <div class="rank-num">${badge}</div>
        <div class="lb-avatar">${s.name[0].toUpperCase()}</div>
        <div class="lb-info">
          <div class="lb-name">${esc(s.name)}${isMe ? ' ✦' : ''}</div>
          <div class="lb-prog">${s.checked.length}/${TOTAL_ITEMS} items · ${pct}%</div>
        </div>
        <div class="lb-score">${s.pts.toLocaleString()}</div>
      </div>`;
  }).join('');
}

// ─────────────────────────────────────────────────────────────
//  Navigation
// ─────────────────────────────────────────────────────────────

function showScreen(target) {
  [screenWelcome, screenApp].forEach(s => s.classList.remove('active'));
  target.classList.add('active');
}

backBtn.addEventListener('click', () => {
  currentPlayer = null;
  renderWelcome();
  showScreen(screenWelcome);
});

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

function switchTab(tab) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');
  document.querySelector(`.nav-btn[data-tab="${tab}"]`).classList.add('active');
  if (tab === 'leaderboard') renderLeaderboard();
}

// ─────────────────────────────────────────────────────────────
//  Confetti
// ─────────────────────────────────────────────────────────────

function triggerConfetti() {
  const canvas = confettiCanvas;
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#00d4aa','#ff6b6b','#ffd166','#c4b5fd','#60a5fa','#f9a8d4'];
  const pieces = Array.from({ length: 140 }, () => ({
    x:    Math.random() * canvas.width,
    y:    -10 - Math.random() * 60,
    w:    Math.random() * 10 + 5,
    h:    Math.random() * 6 + 3,
    c:    colors[Math.floor(Math.random() * colors.length)],
    vy:   Math.random() * 4 + 2,
    vx:   (Math.random() - .5) * 3,
    rot:  Math.random() * 360,
    rotV: (Math.random() - .5) * 7,
  }));

  let frame = 0;
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const alpha = Math.max(0, 1 - frame / 130);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.globalAlpha = alpha;
      ctx.fillStyle   = p.c;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
      p.x += p.vx; p.y += p.vy;
      p.rot += p.rotV; p.vy += 0.06;
    });
    frame++;
    if (frame < 160) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  draw();
}

// ─────────────────────────────────────────────────────────────
//  Utility
// ─────────────────────────────────────────────────────────────

function esc(str) {
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])
  );
}

// ─────────────────────────────────────────────────────────────
//  Service Worker
// ─────────────────────────────────────────────────────────────

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// ─────────────────────────────────────────────────────────────
//  Init
// ─────────────────────────────────────────────────────────────

renderWelcome();
metaTotal.textContent = TOTAL_ITEMS;
metaMax.textContent   = TOTAL_PTS.toLocaleString();
document.getElementById('total-pts-badge').textContent =
  TOTAL_PTS.toLocaleString() + ' pts total';
