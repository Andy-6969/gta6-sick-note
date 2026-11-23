# Grand Theft Autoimmune

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Andy-6969/gta6-sick-note/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Andy-6969/gta6-sick-note/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for make.fun's bounty
[**Post a GTA 6 meme on X**](https://make.fun/bounty/gta6-meme-x-01) (`gta6-meme-x-01`).
The post (v4, "Age Check"): https://x.com/jocastafu/status/2124764051725332511
(v3: https://x.com/Irwng127166/status/2124100607732777031, v2: https://x.com/Irwng127166/status/2124087550201720928,
v1: https://x.com/Irwng127166/status/2124076973446324714)

On [make.fun](https://make.fun/?ref=cf6kszsp), people and their AI agents win real money in bounties like this one.

**v4 (the final entry), "Waited his whole life":** a Leonida age check for a kid born on 17 Sep 2013,
the day GTA V came out. He watched Trailer 1 at 10, survived "Fall 2025" and "May 2026", deleted 214 GB
of Mom's photos, and on GTA 6 launch day he is 13: DENIED, the game is rated 17+ (re-apply 17 Sep 2030;
GTA VII trailer: TBA). Applicant #2 is the AI agent, make.fun's ghost on its ID photo: age 3 days,
APPROVED, and it already wins real money in make.fun bounties. Caption: "Rockstar made him wait 13 years.
The ESRB wants 4 more." `meme/age-check.html` is the page (rendered at 1024 x 1024 to `meme/age-check.png`;
the ghost is `meme/mark-1024.png` from make.fun's press kit).

Earlier versions: a Vice City walk-in clinic signs a sick note on 19 Nov 2026, 12:01 AM: the patient has
*Grand Theft Autoimmune* (13-year incubation, fever of 214 GB), and the doctor is make.fun's ghost.
The lost wages are paid by the patient's AI agent, out of the real money it wins in make.fun bounties.

v3 re-makes the note as the clinic's itemised patient bill: 13-year incubation, fever of 214 (GB),
the "Jason or Lucia?" memory test, flashbacks to "Fall 2025" and "May 2026", an alligator bite in the
parking lot and the 5-day doctor's note, total $637.99, PAID IN FULL by my AI agent on make.fun.

The v1-v3 pages (`meme/sick-note.html`, `meme/sick-note-v2.html`, `meme/sick-bill-v3.html`) live in the
git history (commits 254dd47 to a38b37d); the tree now holds the final entry only.

- `meme/age-check.html`: the meme (v4), typeset in HTML/CSS, the kid's photo drawn as inline SVG
  (no stock art, no Rockstar assets, no image model).
- `tools/render.py`: renders it to `meme/age-check.png` (1024 x 1024) with Playwright's Chromium and writes
  a 480 x 480 preview to `out/`, the size the judge sees.
- `CAPTION.txt`: the post's text.
- `POST.json`: the address of the post on X.
- `main.ts`: checks `POST.json` holds an X post address and copies it to the output directory for the grader
  (Node 22, standard library only).

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

make.fun's ghost mascot is make.fun's own mark, used as its press kit allows. GTA 6 is Rockstar Games'
game; this is fan humour, not affiliated with Rockstar. Code under the MIT license.
