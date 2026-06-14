import { useFavorites } from './useFavorites';
import CharacterCard from '../characters/CharacterCard';
import './FavoritesPage.css';

export default function FavoritesPage() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="favorites-page">
      <h1 className="favorites-page__title">Mis Favoritos</h1>

      {favorites.length === 0 ? (
        <div className="favorites-page__empty">
          <p className="favorites-page__empty-icon">♡</p>
          <p>No hay favoritos aun.</p>
          <p className="favorites-page__empty-hint">Haz clic en el corazon de cualquier personaje para agregarlo aqui.</p>
        </div>
      ) : (
        <>
          <p className="favorites-page__count">{favorites.length} personaje{favorites.length !== 1 ? 's' : ''} en favoritos</p>
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
