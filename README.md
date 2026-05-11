MuyLigero
===========
MuyLigero helps you track the gear you bring on adventures.

Architecture
-----------

MuyLigero is split into three responsibilities:

1. `api`: Node/Express application on port `3000`
2. `web`: webpack dev server on port `8080`
3. `mongo`: MongoDB on port `27017`

In development, the frontend runs through `8080` and proxies requests to the API on `3000`.

How to run MuyLigero with Docker
-----------

1. `docker compose up --build`
2. Open `http://localhost:8080`

How to run MuyLigero without Docker
-----------

1. Install node.js, npm and mongo
2. `npm install`
3. Start MongoDB
4. Start the API: `npm run dev:api`
5. Start the frontend dev server: `npm run dev:web`
6. Open `http://localhost:8080`

Future non-feature initiatives
-----------
- Migrate to postgres document store from mongo
