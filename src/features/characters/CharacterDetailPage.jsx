import { useReducer, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCharacter } from './api';
import { useFavorites } from '../favorites/useFavorites';
import './CharacterDetailPage.css';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { character: action.payload, loading: false, error: null };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function CharacterDetailPage() {
  const { id } = useParams();
  const [state, dispatch] = useReducer(reducer, {
    character: null,
    loading: true,
    error: null,
  });
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: 'FETCH_START' });
    getCharacter(id)
      .then((data) => { if (!cancelled) dispatch({ type: 'FETCH_SUCCESS', payload: data }); })
      .catch((err) => { if (!cancelled) dispatch({ type: 'FETCH_ERROR', payload: err.message }); });
    return () => { cancelled = true; };
  }, [id]);

  if (state.loading) return <div className="detail__status">Loading...</div>;
  if (state.error) return <div className="detail__status detail__status--error">{state.error}</div>;
  if (!state.character) return null;

  const character = state.character;
  const favorite = isFavorite(character.id);

  return (
    <div className="detail">
      <Link to="/" className="detail__back">← Back to Characters</Link>

      <div className="detail__card">
        <div className="detail__image-wrapper">
          <img src={character.image} alt={character.name} className="detail__image" />
        </div>

        <div className="detail__info">
          <div className="detail__header">
            <h1 className="detail__name">{character.name}</h1>
            <button
              className={`detail__favorite ${favorite ? 'detail__favorite--active' : ''}`}
              onClick={() => toggleFavorite(character)}
            >
              {favorite ? '♥ Favorited' : '♡ Add to Favorites'}
            </button>
          </div>

          <div className="detail__meta">
            <span className={`detail__badge detail__badge--${character.status.toLowerCase()}`}>
              {character.status}
            </span>
            <span className="detail__badge">{character.species}</span>
            {character.type && <span className="detail__badge">{character.type}</span>}
            <span className="detail__badge">{character.gender}</span>
          </div>

          <div className="detail__sections">
            <div className="detail__section">
              <h3>Origin</h3>
              <p>{character.origin.name}</p>
            </div>
            <div className="detail__section">
              <h3>Last Known Location</h3>
              <p>{character.location.name}</p>
            </div>
            <div className="detail__section">
              <h3>Episodes Appeared</h3>
              <p>{character.episode.length} episodes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
