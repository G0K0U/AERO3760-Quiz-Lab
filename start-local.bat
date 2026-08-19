@echo off
cd /d "F:\Onedrive_USYD\OneDrive - The University of Sydney (Students)\Desktop\USYD\AERO\AERO3760\quiz-review-site"

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm not found. Please install Node.js first.
  pause
  exit /b
)

start "AERO3760 dev server" cmd /k "npm run dev"
echo Starting dev server and waiting for it to become ready...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ok=$false; for($i=0;$i -lt 45;$i++){ try{ $r=Invoke-WebRequest -Uri 'http://localhost:3000/' -UseBasicParsing -TimeoutSec 2; if($r.StatusCode -eq 200){$ok=$true; break} }catch{}; Start-Sleep -Seconds 1 }; if($ok){ Write-Host 'Ready. Opening browser...'; Start-Process 'http://localhost:3000/' } else { Write-Host '[ERROR] Server did not become ready in 45s. Check the other window for errors.' }"
pause
