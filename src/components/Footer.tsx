import { Monogram } from './Monogram'

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-5 py-9 text-ink md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Monogram className="h-6 w-6" on="paper" />
          <p className="font-ui text-[11px] tracking-label uppercase">
            Mohamed El Zayat · Strike Media
          </p>
        </div>
        <p className="font-ui text-[11px] tracking-label text-mute uppercase">
          © 2026 · Cairo
        </p>
      </div>
    </footer>
  )
}
