import { Link } from 'react-router-dom';
import './CharacterCard.css';

const STATUS_COLORS = {
  Alive: '#00d4aa',
  Dead: '#ef4444',
  unknown: '#9ca3af',
};

export default function CharacterCard({ character, isFavorite, onToggleFavorite }) {
  return (
    <div className="character-card">
      <Link to={`/character/${character.id}`} className="character-card__link">
        <div className="character-card__image-wrapper">
          <img
            src={character.image}
            alt={character.name}
            className="character-card__image"
            loading="lazy"
          />
          <span
            className="character-card__status"
            style={{ background: STATUS_COLORS[character.status] || STATUS_COLORS.unknown }}
          >
            {character.status}
          </span>
        </div>
        <div className="character-card__info">
          <h3 className="character-card__name">{character.name}</h3>
          <p className="character-card__species">{character.species}</p>
        </div>
      </Link>
      <button
        className={`character-card__favorite ${isFavorite ? 'character-card__favorite--active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite(character);
        }}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
    </div>
  );
}
