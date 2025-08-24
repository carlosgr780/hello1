import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Packs from './pages/Packs'
import PackOpen from './pages/PackOpen'
import Collection from './pages/Collection'
import Decks from './pages/Decks'
import Battle from './pages/Battle'

function BottomNav() {
  const navItems = [
    { to: '/', label: 'Packs' },
    { to: '/collection', label: 'Collection' },
    { to: '/decks', label: 'Decks' },
    { to: '/battle', label: 'Battle' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <ul className="mx-auto grid max-w-md grid-cols-4 gap-1 p-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-center text-sm font-medium transition-colors ${
                  isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-white/10'
                }`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto min-h-full max-w-md pb-16">
        <header className="sticky top-0 z-10 border-b border-white/10 bg-black/50 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <h1 className="text-lg font-semibold tracking-wide">PokéPocket</h1>
        </header>

        <main className="px-4 py-4">
          <Routes>
            <Route path="/" element={<Packs />} />
            <Route path="/pack/open" element={<PackOpen />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/decks" element={<Decks />} />
            <Route path="/battle" element={<Battle />} />
          </Routes>
        </main>

        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App
