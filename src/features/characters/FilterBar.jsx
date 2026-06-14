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
        placeholder="Search by name..."
        value={filters.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <select
        className="filter-bar__select"
        value={filters.status}
        onChange={(e) => handleChange('status', e.target.value)}
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className="filter-bar__select"
        value={filters.species}
        onChange={(e) => handleChange('species', e.target.value)}
      >
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Robot">Robot</option>
        <option value="Animal">Animal</option>
        <option value="Disease">Disease</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Poopybutthole">Poopybutthole</option>
        <option value="Mythological">Mythological</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className="filter-bar__select"
        value={filters.gender}
        onChange={(e) => handleChange('gender', e.target.value)}
      >
        <option value="">All Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button className="filter-bar__reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
