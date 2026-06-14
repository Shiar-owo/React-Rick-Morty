import { useFavorites } from './useFavorites';
import CharacterCard from '../characters/CharacterCard';
import './FavoritesPage.css';

export default function FavoritesPage() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="favorites-page">
      <h1 className="favorites-page__title">My Favorites</h1>

      {favorites.length === 0 ? (
        <div className="favorites-page__empty">
          <p className="favorites-page__empty-icon">♡</p>
          <p>No favorites yet.</p>
          <p className="favorites-page__empty-hint">Click the heart on any character to add them here.</p>
        </div>
      ) : (
        <>
          <p className="favorites-page__count">{favorites.length} character{favorites.length !== 1 ? 's' : ''} favorited</p>
          <div className="favorites-page__grid">
            {favorites.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isFavorite={isFavorite(character.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
