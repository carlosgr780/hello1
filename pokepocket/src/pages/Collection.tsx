import { useMemo, useState } from 'react'
import { sampleCards, type Card } from '../data/sample'

const types = ['All', 'Grass', 'Fire', 'Water', 'Lightning', 'Psychic', 'Fighting', 'Darkness', 'Metal', 'Dragon', 'Colorless'] as const
const rarities = ['All', 'Common', 'Uncommon', 'Rare', 'Ultra Rare'] as const

type TypeFilter = typeof types[number]
type RarityFilter = typeof rarities[number]

function CardTile({ card, onClick }: { card: Card; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col items-start rounded-lg border border-white/10 bg-white/5 p-3 text-left hover:bg-white/10">
      <div className="text-sm font-medium">{card.name}</div>
      <div className="text-xs text-slate-400">{card.type} • {card.rarity}</div>
    </button>
  )
}

function CardModal({ card, onClose }: { card: Card | null; onClose: () => void }) {
  if (!card) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-slate-900 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{card.name}</h3>
          <button onClick={onClose} className="rounded-md px-2 py-1 text-sm text-slate-300 hover:bg-white/10">Close</button>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <div>Type: {card.type}</div>
          <div>Rarity: {card.rarity}</div>
          <div>HP: {card.hp}</div>
        </div>
      </div>
    </div>
  )
}

export default function Collection() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('All')
  const [rarityFilter, setRarityFilter] = useState<RarityFilter>('All')
  const [selected, setSelected] = useState<Card | null>(null)

  const filtered = useMemo(() => sampleCards.filter((c) => {
    const typeOk = typeFilter === 'All' || c.type === typeFilter
    const rarityOk = rarityFilter === 'All' || c.rarity === rarityFilter
    return typeOk && rarityOk
  }), [typeFilter, rarityFilter])

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">Collection</h2>
          <p className="text-sm text-slate-400">Browse your cards.</p>
        </div>
        <div className="flex gap-2">
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as TypeFilter)} className="rounded-md border border-white/10 bg-slate-900 px-2 py-1 text-sm">
            {types.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={rarityFilter} onChange={(e) => setRarityFilter(e.target.value as RarityFilter)} className="rounded-md border border-white/10 bg-slate-900 px-2 py-1 text-sm">
            {rarities.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {filtered.map((c) => (
          <CardTile key={c.id} card={c} onClick={() => setSelected(c)} />
        ))}
      </div>

      <CardModal card={selected} onClose={() => setSelected(null)} />
    </section>
  )
}