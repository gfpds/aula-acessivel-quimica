#!/usr/bin/env bash
cd "$(dirname "$0")"
echo "AulaAcessivel - Modulo Quimica"
echo "Abrindo em http://localhost:8000 ..."
if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server 8000
elif command -v python >/dev/null 2>&1; then
  python -m http.server 8000
else
  echo "Python não encontrado. Abra o arquivo index.html diretamente no navegador."
fi
