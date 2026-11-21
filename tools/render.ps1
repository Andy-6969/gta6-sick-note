# Renders a meme page (default meme/sick-note-v2.html) to a PNG beside it (1080 x 1080) with headless Chrome.
param([string]$Name = 'sick-note-v2')
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$html = Join-Path $root "meme\$Name.html"
$png = Join-Path $root "meme\$Name.png"
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$profile = Join-Path $env:TEMP 'gta6-sick-note-chrome'
# Chrome logs harmless registry warnings on stderr; do not let them stop the script.
$ErrorActionPreference = 'Continue'
& $chrome --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 `
  --user-data-dir="$profile" --window-size=1080,1080 --screenshot="$png" ("file:///" + ($html -replace '\\', '/')) 2>$null | Out-Null
Start-Sleep -Milliseconds 500
Get-Item $png | Select-Object Name, Length
