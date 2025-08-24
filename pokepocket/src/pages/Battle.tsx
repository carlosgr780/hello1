import { sampleCards } from '../data/sample'

export default function Battle() {
  const active = sampleCards[0]
  const opponent = sampleCards[1]

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Battle (Static)</h2>
        <p className="text-sm text-slate-400">Layout-only. No mechanics yet.</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-3 text-sm text-slate-300">Opponent Active</div>
        <div className="rounded-lg border border-white/10 bg-black/40 p-4">
          <div className="text-lg font-semibold">{opponent.name}</div>
          <div className="text-xs text-slate-400">HP {opponent.hp}</div>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-3 text-sm text-slate-300">Your Active</div>
        <div className="rounded-lg border border-white/10 bg-black/40 p-4">
          <div className="text-lg font-semibold">{active.name}</div>
          <div className="text-xs text-slate-400">HP {active.hp}</div>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 text-sm text-slate-300">Your Hand</div>
        <div className="grid grid-cols-3 gap-2">
          {sampleCards.slice(0, 6).map((c) => (
            <div key={c.id} className="rounded-md border border-white/10 bg-black/40 p-3 text-center text-xs">
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}