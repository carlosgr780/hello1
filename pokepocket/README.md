# PokéPocket (MVP UI)

Interfaz de usuario mínima inspirada en Pokémon TCG Pocket. Sin jugabilidad ni lógica de reglas; solo pantallas y navegación.

## Requisitos
- Node 18+
- npm 10+

## Ejecutar en desarrollo
```bash
cd pokepocket
npm install
npm run dev
```
Abre `http://localhost:5173`.

## Build de producción
```bash
npm run build
npm run preview
```

## Tecnologías
- React + Vite + TypeScript
- React Router
- Tailwind CSS (v4)

## Pantallas incluidas
- Packs (inicio): lista de sobres y botón “Open”
- Pack Opening: rejilla estática de cartas simuladas
- Collection: grid con filtros por tipo y rareza y modal de detalle
- Deck Builder: selección y listado simple hasta 60 cartas
- Battle (estática): distribución visual de campo, mano y activos

## Nota
- Todos los datos son de ejemplo (sin assets oficiales)
- No hay mecánicas de juego; es solo una maqueta funcional de UI
