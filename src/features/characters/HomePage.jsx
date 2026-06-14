import { useState, useReducer, useEffect } from 'react';
import { getCharacters } from './api';
import { useFavorites } from '../favorites/useFavorites';
import CharacterCard from './CharacterCard';
import FilterBar from './FilterBar';
import Pagination from './Pagination';
import './HomePage.css';

const INITIAL_FILTERS = { name: '', status: '', species: '', gender: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        characters: action.payload.results,
        totalPages: action.payload.info.pages,
        loading: false,
        error: null,
      };
    case 'FETCH_ERROR':
      return { ...state, characters: [], loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, {
    characters: [],
    totalPages: 0,
    loading: true,
    error: null,
  });
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: 'FETCH_START' });
    getCharacters(page, filters)
      .then((data) => { if (!cancelled) dispatch({ type: 'FETCH_SUCCESS', payload: data }); })
      .catch((err) => { if (!cancelled) dispatch({ type: 'FETCH_ERROR', payload: err.message }); });
    return () => { cancelled = true; };
  }, [page, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <div className="home-page">
      <h1 className="home-page__title">Personajes</h1>
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />

      {state.loading && <div className="home-page__status">Cargando...</div>}
      {state.error && <div className="home-page__status home-page__status--error">{state.error}</div>}

      {!state.loading && !state.error && state.characters.length === 0 && (
        <div className="home-page__status">No se encontraron personajes.</div>
      )}

      {!state.loading && !state.error && state.characters.length > 0 && (
        <>
          <div className="home-page__grid">
            {state.characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isFavorite={isFavorite(character.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={state.totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}
