#!/bin/bash
echo "👀 Vigilando cambios en src/... (Presiona Ctrl+C para salir)"
# Espera cambios en la carpeta src y lanza el sync
while inotifywait -r -e modify ./src; do
    ./sync.sh
done
