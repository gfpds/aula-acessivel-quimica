@echo off
cd /d "%~dp0"
echo AulaAcessivel - Modulo Quimica
echo.
echo Abrindo em http://localhost:8000 ...
start http://localhost:8000
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 -m http.server 8000
) else (
  where python >nul 2>nul
  if %errorlevel%==0 (
    python -m http.server 8000
  ) else (
    echo Python nao encontrado. Abra o arquivo index.html diretamente no navegador.
    pause
  )
)
