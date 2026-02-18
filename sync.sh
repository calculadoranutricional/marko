#!/bin/bash
echo "🛠️  Construyendo sitio estático..."
pnpm run build

echo "📦 Sincronizando con GitHub (incluyendo dist)..."
git add .
git commit -m "Auto-update: $(date +'%H:%M:%S')"
git push origin main
echo "✅ ¡Sincronizado!"
