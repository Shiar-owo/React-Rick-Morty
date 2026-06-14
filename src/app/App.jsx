import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomePage from '../features/characters/HomePage'
import CharacterDetailPage from '../features/characters/CharacterDetailPage'
import FavoritesPage from '../features/favorites/FavoritesPage'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
