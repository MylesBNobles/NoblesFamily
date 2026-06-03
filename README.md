# Nobles Family Hunt 🦁✨🐭

**Singapore & Disney Adventure Scavenger Hunt — June 6–13, 2026**

A mobile-first PWA (Progressive Web App) for the Nobles family scavenger hunt. Works fully offline after the first load.

## Features

- 90 challenges across 11 categories — 1,800 total points
- Each family member tracks their own progress on their phone
- Scores persist through phone sleep and browser refresh (LocalStorage)
- Works **100% offline** after first load (Service Worker)
- Installable to phone home screen ("Add to Home Screen")
- Live leaderboard showing all players on a device
- Confetti on completion 🎉

## Categories

| Category | Points |
|---|---|
| Arrival Day | 5 each |
| Hawker Food Challenges | 10 each |
| Sentosa Adventure | 10 each |
| Disney Cruise | 15 each |
| Disney Adventure Bonus | 25 each |
| Passport Challenge | 50 |
| Marina Bay Icons | 15 each |
| Cultural Singapore | 10 each |
| Nobles Family Bonus | 25 each |
| Legendary Challenges | 50 each |
| Grand Challenge | 100 each |

## Deploy to GitHub Pages

1. Create a new repo on GitHub: `nobles-family-hunt`
2. Push this folder:
   ```bash
   cd nobles-family-hunt
   git init
   git add .
   git commit -m "Initial commit — Nobles Family Hunt 2026"
   git branch -M main
   git remote add origin https://github.com/MylesBNobles/NoblesFamily.git
   git push -u origin main
   ```
3. In the repo Settings → Pages → Source: **Deploy from branch → main → / (root)**
4. Your URL: `https://mylesbnobles.github.io/NoblesFamily/`
5. Share the URL with the family **before the trip** so everyone loads it once on WiFi

## Before the Trip

- Everyone opens the URL on their phone while on WiFi (first load caches everything)
- Tap "Add to Home Screen" for the best app experience
- From that point on, works with zero internet connection

## Tech

Vanilla HTML/CSS/JS — no framework, no build step, no dependencies.
