import { useMemo } from 'react'
import { sampleCards } from '../data/sample'

function CardPlaceholder({ name, rarity }: { name: string; rarity: string }) {
  const rarityColor =
    rarity === 'Ultra Rare' ? 'from-yellow-400 to-pink-500' :
    rarity === 'Rare' ? 'from-blue-400 to-purple-500' :
    rarity === 'Uncommon' ? 'from-emerald-400 to-teal-600' :
    'from-slate-500 to-slate-700'

  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-br p-[2px]">
      <div className={`rounded-[10px] bg-gradient-to-br ${rarityColor} p-3`}> 
        <div className="rounded-md bg-black/60 p-6 text-center">
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-xs text-slate-300">{rarity}</div>
        </div>
      </div>
    </div>
  )
}

export default function PackOpen() {
  const packCards = useMemo(() => sampleCards.slice(0, 7), [])

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Pack Opening</h2>
        <p className="text-sm text-slate-400">Static reveal mockup.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {packCards.map((c) => (
          <CardPlaceholder key={c.id} name={c.name} rarity={c.rarity} />
        ))}
      </div>

      <div className="pt-2 text-right">
        <a href="/collection" className="text-sm text-blue-400 hover:underline">View in Collection →</a>
      </div>
    </section>
  )
}