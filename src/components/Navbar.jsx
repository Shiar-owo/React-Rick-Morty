import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        <img src="/pickle.png" alt="Pickle Rick" className="navbar__logo" width="32" height="32" />
        <span className="navbar__title">Rick & Morty API</span>
      </NavLink>
      <div className="navbar__links">
        <NavLink to="/" end className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>
          Personajes
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>
          Favoritos
        </NavLink>
      </div>
    </nav>
  );
}
