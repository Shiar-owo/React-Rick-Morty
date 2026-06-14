import './FilterBar.css';

export default function FilterBar({ filters, onFilterChange }) {
  const handleChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleReset = () => {
    onFilterChange({ name: '', status: '', species: '', gender: '' });
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        className="filter-bar__input"
        placeholder="Buscar por nombre..."
        value={filters.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <select
        className="filter-bar__select"
        value={filters.status}
        onChange={(e) => handleChange('status', e.target.value)}
      >
        <option value="">Todos los estados</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
      <select
        className="filter-bar__select"
        value={filters.species}
        onChange={(e) => handleChange('species', e.target.value)}
      >
        <option value="">Todas las especies</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoide</option>
        <option value="Robot">Robot</option>
        <option value="Animal">Animal</option>
        <option value="Disease">Enfermedad</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Poopybutthole">Poopybutthole</option>
        <option value="Mythological">Mitologico</option>
        <option value="unknown">Desconocido</option>
      </select>
      <select
        className="filter-bar__select"
        value={filters.gender}
        onChange={(e) => handleChange('gender', e.target.value)}
      >
        <option value="">Todos los generos</option>
        <option value="female">Femenino</option>
        <option value="male">Masculino</option>
        <option value="genderless">Sin genero</option>
        <option value="unknown">Desconocido</option>
      </select>
      <button className="filter-bar__reset" onClick={handleReset}>
        Limpiar
      </button>
    </div>
  );
}
