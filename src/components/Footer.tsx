import { StrikeMark } from './StrikeMark'

export function Footer() {
  return (
    <footer className="border-t border-line bg-void px-5 py-10 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <StrikeMark className="h-7 w-7" />
          <p className="font-ui text-[11px] tracking-label text-paper-soft uppercase">
            Mohamed El Zayat · Strike Media · Producer
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="https://www.youtube.com/@mfelzayat"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui text-[11px] tracking-label text-mute uppercase transition hover:text-strike"
          >
            YouTube
          </a>
          <a
            href="https://strikemedia.net"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui text-[11px] tracking-label text-mute uppercase transition hover:text-strike"
          >
            Strike Media
          </a>
          <p className="font-ui text-[11px] tracking-label text-mute uppercase">
            © 2026 · Cairo
          </p>
        </div>
      </div>
    </footer>
  )
}
