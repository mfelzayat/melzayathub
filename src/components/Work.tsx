import { Reveal } from './Reveal'

type Piece = {
  client: string
  talent?: string
  title: string
  type: string
  year?: string
  videoId: string
  featured?: boolean
}

const pieces: Piece[] = [
  {
    client: 'Strike Media',
    title: 'Showreel 2025',
    type: 'Showreel',
    year: '2025',
    videoId: 'r0xWUfp7TOg',
    featured: true,
  },
  {
    client: 'TH Productions',
    talent: 'Tamer Hosny',
    title: 'Restart — Movie Premiere',
    type: 'Premiere',
    year: '2025',
    videoId: 'xwurAH2x-Fo',
  },
  {
    client: 'Reflect Developments · Moment',
    talent: 'Wael Jassar',
    title: 'لحظة / Moment',
    type: 'TVC',
    videoId: 'r-MvbBbZl3A',
  },
  {
    client: 'Nile Developments',
    talent: 'George Kordahy · Tamer Hosny',
    title: 'Unforgettable Night',
    type: 'Launch',
    videoId: 'Jv42Hcjq9n4',
  },
  {
    client: 'Golden View',
    title: 'Launch @ Grand Egyptian Museum',
    type: 'Launch',
    videoId: '-VP1jQn0a1M',
  },
  {
    client: 'Capital Hills',
    talent: 'Karim Afifi',
    title: 'TVC — تيتة زوزو',
    type: 'TVC',
    videoId: '9z5h1VDXaWo',
  },
  {
    client: 'ARQA · Ritz New Zayed',
    talent: 'Ahmed Elwakil',
    title: 'Ritz Launch Film',
    type: 'Launch',
    videoId: 'Drsj3tHd4to',
  },
  {
    client: 'Xiaomi Egypt',
    talent: 'Tamer Hosny',
    title: 'Ambassador TVC',
    type: 'TVC',
    videoId: 'DOlD1PtuqSM',
  },
  {
    client: 'Horus University',
    talent: 'Amir Gomaa',
    title: 'Graduation 2025 Fire Show',
    type: 'Event',
    year: '2025',
    videoId: 'GrKznyygeLk',
  },
  {
    client: 'UNESCO',
    talent: 'Dr. Khaled El-Enany',
    title: 'Director General Celebration',
    type: 'Doc',
    videoId: 'Og8dJmackVo',
  },
  {
    client: 'Sphinx Airport',
    talent: 'Rahma Hassan · Dalida',
    title: 'Helwa Ya Baladi',
    type: 'Film',
    videoId: 'Lhlx39N3H2w',
  },
  {
    client: 'FORTHING · Al Amal Automotive',
    title: 'Egypt Launch',
    type: 'Launch',
    videoId: '4KMW2qVNKm4',
  },
]

function watchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`
}

function thumbUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

export function Work() {
  const featured = pieces.find((p) => p.featured)!
  const rest = pieces.filter((p) => !p.featured)

  return (
    <section
      id="work"
      className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-ui text-[11px] font-medium tracking-label text-strike uppercase">
              02 · Work
            </p>
            <h2 className="mt-4 font-display fluid-section font-bold text-paper">
              Selected work
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mute md:text-right md:text-base">
            Nights, films, and launches brands hire for. Full archive on
            YouTube — these are the ones that still get asked about.
          </p>
        </Reveal>

        <Reveal className="mb-12 overflow-hidden rounded-sm border border-line bg-ink md:mb-16">
          <div className="grid lg:grid-cols-12">
            <div className="relative aspect-video bg-void lg:col-span-8">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${featured.videoId}?rel=0`}
                title={`${featured.client} — ${featured.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-between gap-6 border-t border-line p-6 md:p-8 lg:col-span-4 lg:border-t-0 lg:border-l">
              <div>
                <p className="font-ui text-[10px] tracking-label text-strike uppercase">
                  Featured · {featured.type}
                  {featured.year ? ` · ${featured.year}` : ''}
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm text-paper-soft/80">{featured.client}</p>
                <p className="mt-5 text-sm leading-relaxed text-mute">
                  The year cut down: launch nights, TVCs, fire shows,
                  institutional films. If you only watch one piece, watch this.
                </p>
              </div>
              <a
                href={watchUrl(featured.videoId)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui inline-flex w-fit border border-strike/50 px-4 py-2 text-[11px] font-semibold tracking-label text-strike uppercase transition hover:border-strike hover:bg-strike hover:text-paper"
              >
                Open on YouTube ↗
              </a>
            </div>
          </div>
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.videoId} as="li" delayMs={(i % 3) * 50}>
              <a
                href={watchUrl(p.videoId)}
                target="_blank"
                rel="noopener noreferrer"
                className="group @container/work-card flex h-full flex-col overflow-hidden rounded-sm border border-line bg-ink transition hover:border-strike/50 hover:bg-ink-2"
              >
                <div className="relative aspect-video overflow-hidden bg-ink-3">
                  <img
                    src={thumbUrl(p.videoId)}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-80"
                    aria-hidden
                  />
                  <span className="absolute bottom-3 left-3 font-ui border border-paper/15 bg-void/75 px-2 py-1 text-[9px] tracking-label text-paper uppercase backdrop-blur-sm">
                    {p.type}
                    {p.year ? ` · ${p.year}` : ''}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                    <span className="font-ui rounded-full border border-strike bg-strike/90 px-3 py-1.5 text-[10px] font-semibold tracking-label text-paper uppercase shadow-[0_0_24px_color-mix(in_oklab,#e8282c_40%,transparent)]">
                      Watch
                    </span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 border-t border-line p-5">
                  <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-paper md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="text-sm text-paper-soft/75">{p.client}</p>
                  {p.talent && (
                    <p className="work-meta font-ui text-[10px] tracking-label text-mute uppercase">
                      {p.talent}
                    </p>
                  )}
                  <p className="mt-auto pt-3 font-ui text-[10px] tracking-label text-strike uppercase transition group-hover:text-strike-bright">
                    Watch ↗
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="text-sm text-mute">
            ~117 pieces on the channel. Not a highlight reel of vibes —
            receipts.
          </p>
          <a
            href="https://www.youtube.com/@mfelzayat"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui text-[11px] font-semibold tracking-label text-strike uppercase transition hover:text-strike-bright"
          >
            youtube.com/@mfelzayat ↗
          </a>
        </Reveal>
      </div>
    </section>
  )
}
