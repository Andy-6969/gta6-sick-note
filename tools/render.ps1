# Renders meme/sick-note.html to meme/sick-note.png (1080 x 1080) with headless Chrome.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$html = Join-Path $root 'meme\sick-note.html'
$png = Join-Path $root 'meme\sick-note.png'
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$profile = Join-Path $env:TEMP 'gta6-sick-note-chrome'
& $chrome --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 `
  --user-data-dir="$profile" --window-size=1080,1080 --screenshot="$png" ("file:///" + ($html -replace '\\', '/')) | Out-Null
Start-Sleep -Milliseconds 500
Get-Item $png | Select-Object Name, Length
