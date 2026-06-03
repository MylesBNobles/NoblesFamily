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

## Live URLs

| URL | Use |
|---|---|
| https://noblesfamilyvacation.com | Share this with the family |
| https://nobles-family.vercel.app | Backup / Vercel dashboard |

Hosted on Vercel — auto-deploys on every push to `main`.

## Before the Trip

- Everyone opens the URL on their phone while on WiFi (first load caches everything)
- Tap "Add to Home Screen" for the best app experience
- From that point on, works with zero internet connection

## Tech

Vanilla HTML/CSS/JS — no framework, no build step, no dependencies.
