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
  { id:'dis8',  cat:'Disney Cruise', pts:15, emoji:'🔍', label:'Find a Hidden Mickey somewhere on the ship' },
  { id:'dis9',  cat:'Disney Cruise', pts:15, emoji:'👸', label:'Spot a Disney Princess' },
  { id:'dis10', cat:'Disney Cruise', pts:15, emoji:'👂', label:'Take a photo wearing Mickey ears' },
  { id:'dis12', cat:'Disney Cruise', pts:15, emoji:'⏰', label:'Be the first person at breakfast' },
  { id:'dis20', cat:'Disney Cruise', pts:15, emoji:'🌙', label:'Be the first person at dinner' },
  { id:'dis13', cat:'Disney Cruise', pts:15, emoji:'🗿', label:'Find a Disney character statue' },
  { id:'dis14', cat:'Disney Cruise', pts:15, emoji:'🚴', label:'Ride the Iron Cycle Test Run' },
  { id:'dis15', cat:'Disney Cruise', pts:15, emoji:'🤫', label:'Find the quietest spot on the ship' },
  { id:'dis16', cat:'Disney Cruise', pts:15, emoji:'🍰', label:"Try a dessert you've never had before" },
  { id:'dis17', cat:'Disney Cruise', pts:15, emoji:'🍹', label:'Try a virgin Piña Colada' },

  // ── DISNEY ADVENTURE BONUS (25 pts) ─────────────────────
  { id:'dab9',  cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🎤', label:'Sing karaoke onboard' },
  { id:'dab1',  cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🏃', label:'Be the first person in the family to visit every themed area' },
  { id:'dab2',  cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🌊', label:'Complete a waterslide multiple times' },
  { id:'dab3',  cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🎯', label:'Win a game or trivia activity' },
  { id:'dab4',  cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🔍', label:'Find 3 Hidden Mickeys' },
  { id:'dab5',  cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🎡', label:'Ride every attraction on the ship' },
  { id:'dab6',  cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🍴', label:"Try 3 foods you've never eaten before" },
  { id:'dab7',  cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🎪', label:'Attend 3 different onboard activities' },
  { id:'dab8',  cat:'Disney Adventure Bonus ⭐', pts:25, emoji:'🗺️', label:"Find a spot on the ship nobody else in the family has discovered yet" },

  // ── PASSPORT CHALLENGE (50 pts) ──────────────────────────
  { id:'pass1', cat:'Passport Challenge 🗺️', pts:50, emoji:'🎖️', label:'Visit all 7 themed lands — Imagination Garden · Disney Discovery Reef · San Fransokyo Street · Marvel Landing · Toy Story Place · Town Square · Wayfinder Bay' },

  // ── MARINA BAY ICONS (15 pts) ────────────────────────────
  { id:'mb1', cat:'Marina Bay Icons', pts:15, emoji:'🦁', label:'Find the Merlion and tell another family member why it is half lion and half fish' },
  { id:'mb2', cat:'Marina Bay Icons', pts:15, emoji:'🌉', label:'Walk across the entire Helix Bridge' },
  { id:'mb3', cat:'Marina Bay Icons', pts:15, emoji:'🌳', label:'Find the tallest Supertree in Gardens by the Bay' },
  { id:'mb4', cat:'Marina Bay Icons', pts:15, emoji:'🌊', label:'Take a photo reflected in the Marina Bay waterfront at night' },
  { id:'mb5', cat:'Marina Bay Icons', pts:15, emoji:'💧', label:'Find the Rain Oculus waterfall inside Marina Bay Sands' },
  { id:'mb6', cat:'Marina Bay Icons', pts:15, emoji:'👜', label:'Photo with the Louis Vuitton Floating Store' },
  { id:'mb7', cat:'Marina Bay Icons', pts:15, emoji:'🎵', label:'Watch part of the Garden Rhapsody show' },

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
  { id:'nfb1',  cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🤴', label:'Convince Dad to pose like a Disney Prince' },
  { id:'nfb2',  cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'📱', label:'Convince Tee to do a TikTok' },
  { id:'nfb9',  cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🗓️', label:'Catch Myles saying "check the itinerary"' },
  { id:'nfb10', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🎢', label:'Convince Mom to ride a rollercoaster' },
  { id:'nfb11', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🤝', label:'Successfully haggle a vendor for a lower price on an item' },
  { id:'nfb12', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'👕', label:'Find an outfit for Kwame that he would want to buy' },
  { id:'nfb3',  cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🧍', label:'Get everyone doing the exact same pose' },
  { id:'nfb4',  cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🎬', label:'Recreate a Disney movie scene' },
  { id:'nfb5',  cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'😴', label:'Capture someone being sleep master sensei' },
  { id:'nfb13', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🍔', label:'Capture someone being grub master sensei' },
  { id:'nfb6',  cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🕐', label:'Catch Jeslin running late — photographic evidence required' },
  { id:'nfb14', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🕐', label:'Catch Zoe running late — photographic evidence required' },
  { id:'nfb15', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'🛌', label:'Catch Akua trying to go to bed early' },
  { id:'nfb7',  cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'📷', label:'Recreate a childhood family photo' },
  { id:'nfb16', cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'📵', label:'Catch Shae being distracted on her phone while something important is going on' },
  { id:'nfb8',  cat:'Nobles Family Bonus 👨‍👩‍👧‍👦', pts:25, emoji:'👁️', label:'Take a photo where nobody looks at the camera' },

  // ── LEGENDARY CHALLENGES (50 pts) ────────────────────────
  { id:'leg1', cat:'Legendary Challenges 🏆', pts:50, emoji:'🦘', label:'Entire group jumps in one photo' },
  { id:'leg2', cat:'Legendary Challenges 🏆', pts:50, emoji:'🐭', label:'Entire group in Disney gear' },
  { id:'leg3', cat:'Legendary Challenges 🏆', pts:50, emoji:'🦀', label:'Everyone tries chili crab' },
  { id:'leg4', cat:'Legendary Challenges 🏆', pts:50, emoji:'🌵', label:'Try durian' },
  { id:'leg5', cat:'Legendary Challenges 🏆', pts:50, emoji:'🌿', label:'Family photo at Gardens by the Bay with Marina Bay Sands visible' },
  { id:'leg6', cat:'Legendary Challenges 🏆', pts:50, emoji:'🌅', label:'Family photo on the Disney ship at sunset' },
  { id:'leg7', cat:'Legendary Challenges 🏆', pts:50, emoji:'💃', label:'Entire family performs a dance move together' },
  { id:'leg8', cat:'Legendary Challenges 🏆', pts:50, emoji:'🎶', label:'Entire family sings part of a Disney song together' },

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
  debouncedSync();
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

function renderLbRows(players) {
  if (players.length === 0) {
    lbList.innerHTML = `<div class="lb-empty"><div class="e-icon">🏆</div><p>No players yet — start the hunt!</p></div>`;
    return;
  }
  const medals = ['🥇','🥈','🥉'];
  lbList.innerHTML = players.map((p, i) => {
    const rClass = i === 0 ? 'r1' : i === 1 ? 'r2' : i === 2 ? 'r3' : '';
    const isMe   = p.name === currentPlayer;
    const badge  = medals[i] || (i + 1);
    const pct    = TOTAL_ITEMS > 0 ? Math.round(p.found / TOTAL_ITEMS * 100) : 0;
    return `
      <div class="lb-item ${rClass}${isMe ? ' me' : ''}">
        <div class="rank-num">${badge}</div>
        <div class="lb-avatar">${p.name[0].toUpperCase()}</div>
        <div class="lb-info">
          <div class="lb-name">${esc(p.name)}${isMe ? ' ✦' : ''}</div>
          <div class="lb-prog">${p.found}/${TOTAL_ITEMS} items · ${pct}%</div>
        </div>
        <div class="lb-score">${p.pts.toLocaleString()}</div>
      </div>`;
  }).join('');
}

async function renderLeaderboard() {
  // Phase 1: render local data immediately
  const localPlayers = loadPlayers()
    .map(name => { const s = loadState(name); return { name: s.name, pts: s.pts, found: s.checked.length }; })
    .sort((a, b) => b.pts - a.pts);
  renderLbRows(localPlayers);

  // Phase 2: merge with remote and re-render
  const remote = await fetchLeaderboard();
  if (!remote) return;
  const remoteNames = new Set(remote.map(r => r.player_name));
  const localOnly   = localPlayers.filter(p => !remoteNames.has(p.name));
  const allPlayers  = [
    ...remote.map(r => ({ name: r.player_name, pts: r.total_points, found: r.items_found })),
    ...localOnly,
  ].sort((a, b) => b.pts - a.pts);
  renderLbRows(allPlayers);
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
//  Supabase sync
// ─────────────────────────────────────────────────────────────

const SUPA_URL = 'https://pvvddgepzwkprtxualml.supabase.co';
const SUPA_KEY = 'sb_publishable_QlYgYaqg_1bLVV9cX__xBQ_UCrOF_I_';

let sb         = null;
let syncTimer  = null;

function getDeviceId() {
  let id = localStorage.getItem('nh_device_id');
  if (!id) {
    id = (crypto.randomUUID ? crypto.randomUUID()
         : Date.now().toString(36) + Math.random().toString(36).slice(2));
    localStorage.setItem('nh_device_id', id);
  }
  return id;
}

function initSupabase() {
  try {
    sb = window.supabase.createClient(SUPA_URL, SUPA_KEY);
    subscribeRealtime();
    updateOnlineBadge();
  } catch { /* CDN blocked / offline — graceful degradation */ }
}

async function syncToSupabase() {
  if (!sb || !currentPlayer) return;
  const state = loadState(currentPlayer);
  try {
    await sb.from('hunt_scores').upsert({
      device_id:    getDeviceId(),
      player_name:  state.name,
      total_points: state.pts,
      items_found:  state.checked.length,
      checked_items: state.checked,
      updated_at:   new Date().toISOString(),
    }, { onConflict: 'device_id' });
  } catch {}
}

function debouncedSync() {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(syncToSupabase, 1500);
}

async function fetchLeaderboard() {
  if (!sb) return null;
  try {
    const { data, error } = await sb
      .from('hunt_scores')
      .select('player_name, total_points, items_found')
      .order('total_points', { ascending: false });
    if (error) return null;
    return data;
  } catch { return null; }
}

function subscribeRealtime() {
  if (!sb) return;
  sb.channel('scores-channel')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'hunt_scores' }, () => {
      renderLeaderboard();
    })
    .subscribe();
}

function updateOnlineBadge() {
  const badge = document.getElementById('sync-badge');
  if (!badge) return;
  if (navigator.onLine && sb) {
    badge.textContent = '● Live';
    badge.className   = 'sync-badge online';
  } else {
    badge.textContent = '○ Offline';
    badge.className   = 'sync-badge offline';
  }
}

window.addEventListener('online',  () => { updateOnlineBadge(); syncToSupabase(); });
window.addEventListener('offline', () => { updateOnlineBadge(); });

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
initSupabase();
