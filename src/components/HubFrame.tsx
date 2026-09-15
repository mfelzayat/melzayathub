type Props = {
  className?: string
  /** Decorative echo uses muted strokes */
  ghost?: boolean
}

/**
 * Signature geometric composition — crop marks + interlocking studio frames.
 * Hand-authored SVG; not a generative blob. Copper voltage reserved for structure.
 */
export function HubFrame({ className = '', ghost = false }: Props) {
  const copper = ghost ? 'rgba(212,132,58,0.35)' : '#d4843a'
  const paper = ghost ? 'rgba(243,238,228,0.22)' : '#f3eee4'
  const line = ghost ? 'rgba(243,238,228,0.12)' : 'rgba(243,238,228,0.28)'
  const ink = '#0c0b09'

  return (
    <svg
      viewBox="0 0 320 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Melzayat Hub geometric mark"
    >
      <title>Melzayat Hub Frame</title>

      {/* Outer crop marks */}
      <path d="M12 28H36M12 28V52" stroke={copper} strokeWidth="1.5" />
      <path d="M284 28H308M308 28V52" stroke={copper} strokeWidth="1.5" />
      <path d="M12 308H36M12 308V332" stroke={copper} strokeWidth="1.5" />
      <path d="M284 332H308M308 308V332" stroke={copper} strokeWidth="1.5" />

      {/* Back plate */}
      <rect x="40" y="56" width="200" height="248" stroke={line} strokeWidth="1" />

      {/* Offset paper frame */}
      <rect
        x="72"
        y="88"
        width="176"
        height="200"
        stroke={paper}
        strokeWidth="1.25"
        className={ghost ? undefined : 'hub-frame-drift'}
      />

      {/* Copper shear / diagonal structure */}
      <path
        d="M56 280L248 96"
        stroke={copper}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M56 280L56 200L136 200"
        stroke={copper}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Inner lattice — media crop logic */}
      <rect x="96" y="120" width="96" height="72" stroke={line} strokeWidth="1" />
      <rect x="128" y="168" width="88" height="88" stroke={paper} strokeWidth="1" />
      <line x1="96" y1="156" x2="192" y2="156" stroke={line} strokeWidth="1" />
      <line x1="172" y1="168" x2="172" y2="256" stroke={line} strokeWidth="1" />

      {/* Solid copper block — voltage node */}
      <rect x="220" y="248" width="36" height="36" fill={copper} />
      <rect x="232" y="260" width="12" height="12" fill={ink} />

      {/* Index ticks */}
      <path d="M248 72H268V92" stroke={paper} strokeWidth="1" />
      <circle cx="56" cy="72" r="2.5" fill={copper} />
    </svg>
  )
}
