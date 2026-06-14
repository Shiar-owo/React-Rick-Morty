const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function getCharacters(page = 1, filters = {}) {
  const params = new URLSearchParams({ page: String(page) });

  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  if (!response.ok) throw new Error('Failed to fetch characters');
  return response.json();
}

export async function getCharacter(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error('Character not found');
  return response.json();
}
