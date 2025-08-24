import { Link } from 'react-router-dom'
import { samplePacks } from '../data/sample'

export default function Packs() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Packs</h2>
        <p className="text-sm text-slate-400">Choose a pack to open.</p>
      </div>

      <ul className="grid gap-3">
        {samplePacks.map((pack) => (
          <li key={pack.id} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
            <div>
              <div className="font-medium">{pack.name}</div>
              <div className="text-xs text-slate-400">{pack.cards} cards</div>
            </div>
            <Link
              to="/pack/open"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500"
            >
              Open
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}