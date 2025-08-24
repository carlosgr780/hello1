import { useState } from 'react'
import { sampleCards, type Card } from '../data/sample'

export default function Decks() {
  const [deck, setDeck] = useState<Card[]>([])

  const addToDeck = (card: Card) => {
    if (deck.length >= 60) return
    setDeck((d) => [...d, card])
  }
  const removeFromDeck = (index: number) => {
    setDeck((d) => d.filter((_, i) => i !== index))
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Deck Builder</h2>
        <p className="text-sm text-slate-400">UI-only mockup. 60-card limit.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium text-slate-300">Card Pool</h3>
          <div className="grid grid-cols-2 gap-2">
            {sampleCards.map((c) => (
              <button key={c.id} onClick={() => addToDeck(c)} className="rounded-md border border-white/10 bg-white/5 p-2 text-left hover:bg-white/10">
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-slate-400">{c.type} • {c.rarity}</div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-slate-300">Deck ({deck.length}/60)</h3>
          <ul className="grid gap-2">
            {deck.map((c, i) => (
              <li key={`${c.id}-${i}`} className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-2">
                <div className="text-sm">{c.name}</div>
                <button onClick={() => removeFromDeck(i)} className="rounded-md px-2 py-1 text-xs text-slate-300 hover:bg-white/10">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}