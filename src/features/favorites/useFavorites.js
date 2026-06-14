import { useState, useEffect } from 'react';

const STORAGE_KEY = 'rick-morty-favorites';

function loadFavorites() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(loadFavorites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (character) => {
    setFavorites((prev) => {
      if (prev.some((c) => c.id === character.id)) return prev;
      return [...prev, { id: character.id, name: character.name, image: character.image, status: character.status, species: character.species }];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((c) => c.id !== id));
  };

  const isFavorite = (id) => favorites.some((c) => c.id === id);

  const toggleFavorite = (character) => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return { favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite };
}
