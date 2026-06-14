# Rick & Morty Explorer

Plataforma web para explorar todos los personajes de la serie Rick & Morty, construida con React y la API oficial.

## Funcionalidades

- **Listado de personajes** con paginacion completa (826 personajes, 42 paginas)
- **Vista detallada** de cada personaje (especie, estado, origen, ubicacion, episodios)
- **Filtrado** por nombre, estado (Vivo/Muerto/Desconocido), especie y genero
- **Paginacion** con navegacion entre paginas
- **Favoritos** — marca personajes como favoritos y visualizalos en una pagina aparte (almacenados en localStorage)
- **Modo oscuro** automatico segun preferencias del sistema
- **Responsive** — se adapta a movil, tablet y escritorio
- **Interfaz en espanol**

## Demo

[Vercel Deploy](https://tu-proyecto.vercel.app)

## Ejecutar localmente

```bash
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
│   │   ├── FilterBar.jsx
│   │   ├── Pagination.jsx
│   │   ├── HomePage.jsx
│   │   └── CharacterDetailPage.jsx
│   └── favorites/
│       ├── useFavorites.js  # Hook con localStorage
│       └── FavoritesPage.jsx
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

## Estructura de commits

Los commits estan organizados por responsabilidad:

```
chore: install react-router-dom
feat: add feature-based directory structure and entry point setup
feat: add Navbar component with routing links
feat: add characters API layer and placeholder pages
feat: add favorites hook and placeholder page
feat: add CharacterCard component
feat: add FilterBar component
feat: add Pagination component
feat: add HomePage with character grid, filters, and pagination
feat: add CharacterDetailPage with full character info
feat: add FavoritesPage with character grid and empty state
feat: translate all UI text to Spanish
style: replace favicon and navbar logo with pickle.png
```

## Licencia

Proyecto academico — The Rick and Morty API es de uso libre.
