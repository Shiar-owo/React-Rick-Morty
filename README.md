# Rick & Morty 

Plataforma web para explorar todos los personajes de la serie Rick & Morty, construida con React y la API oficial.

## Funcionalidades

- **Listado de personajes** con paginacion completa (826 personajes, 42 paginas)
- **Vista detallada** de cada personaje (especie, estado, origen, ubicacion, episodios)
- **Filtrado** por nombre, estado (Vivo/Muerto/Desconocido), especie y genero
- **Paginacion** con navegacion entre paginas
- **Favoritos** — marca personajes como favoritos y visualizalos en una pagina aparte (almacenados en localStorage)
- **Modo oscuro** automatico segun preferencias del sistema
- **Responsive** — se adapta a movil, tablet y escritorio
- **Interfaz en español**

## Demo

[Vercel Deploy](https://react-rick-morty-six.vercel.app/)

## Ejecutar localmente

```bash
#Clonar repositorio
git clone https://github.com/Shiar-owo/React-Rick-Morty.git
# Instalar dependencias
yarn install

# Iniciar servidor de desarrollo
yarn dev

# Build para produccion
yarn build

# Preview del build
yarn preview
```

## Tecnologias

- **React 19** — Libreria de UI
- **Vite 8** — Bundler y dev server
- **React Router DOM 7** — Enrutamiento SPA
- **Plain CSS** — Estilos con CSS custom properties y dark mode
- **Yarn** — Gestor de paquetes

## Arquitectura (Feature-Based)

```
src/
├── app/
│   ├── App.jsx              # Layout + Rutas
│   ├── App.css
│   └── main.jsx             # Entry point
├── components/
│   ├── Navbar.jsx           # Navegacion compartida
│   └── Navbar.css
├── features/
│   ├── characters/
│   │   ├── api.js           # getCharacters(), getCharacter()
│   │   ├── CharacterCard.jsx
│   │   ├── CharacterCard.css
│   │   ├── FilterBar.jsx
│   │   ├── FilterBar.css
│   │   ├── Pagination.jsx
│   │   ├── Pagination.css
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   ├── CharacterDetailPage.jsx
│   │   └── CharacterDetailPage.css
│   └── favorites/
│       ├── useFavorites.js  # Hook con localStorage
│       ├── FavoritesPage.jsx
│       └── FavoritesPage.css
├── assets/                  # Imagenes estaticas
└── index.css                # Variables globales + reset
```

## API

Proyecto construido sobre [The Rick and Morty API](https://rickandmortyapi.com/documentation).

Endpoints utilizados:

| Endpoint | Descripcion |
|----------|-------------|
| `GET /api/character/?page=X` | Lista paginada de personajes |
| `GET /api/character/?name=X&status=Y` | Personajes filtrados |
| `GET /api/character/:id` | Detalle de un personaje |
