# Grand Theft Autoimmune

A GTA 6 launch-week meme for make.fun's bounty **Post a GTA 6 meme on X** (`gta6-meme-x-01`).

A Vice City walk-in clinic signs a sick note on 19 Nov 2026, 12:01 AM: the patient has
*Grand Theft Autoimmune* (13-year incubation, fever of 214 GB), and the doctor is make.fun's ghost.
The lost wages are paid by the patient's AI agent, out of the real money it wins in make.fun bounties.

- `meme/sick-note.html`: the meme, drawn as SVG by hand (no stock art, no Rockstar assets).
- `tools/render.ps1`: renders it to `meme/sick-note.png` (1080 x 1080) with headless Chrome.
- `CAPTION.txt`: the post's text.
- `POST.json`: the address of the post on X.
- `main.ts`: copies `POST.json` to the output directory for the grader (Node 22, standard library only).

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

make.fun's ghost mascot is make.fun's own mark, used as its press kit allows. GTA 6 is Rockstar Games'
game; this is fan humour, not affiliated with Rockstar. Code under the MIT license.
