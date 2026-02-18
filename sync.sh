#!/bin/bash
echo "🛠️  Construyendo sitio estático..."
pnpm run build

# Si la carpeta de salida de Marko Run es 'dist' o 'build' (usualmente dist)
if [ -d "dist" ]; then
    echo "📦 Sincronizando con GitHub..."
    git add .
    git commit -m "Auto-update: $(date +'%d/%m/%Y %H:%M')"
    git push origin main
    echo "✅ ¡Sincronizado!"
else
    echo "❌ Error: No se generó la carpeta de build."
fi
