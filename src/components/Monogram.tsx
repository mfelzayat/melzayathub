type Props = {
  className?: string
  title?: string
  /** ink = dark bg; paper = light bg */
  on?: 'ink' | 'paper'
}

/** Geometric MEZ mark — M body + E stem. */
export function Monogram({
  className = 'h-8 w-8',
  title = 'MEZ',
  on = 'ink',
}: Props) {
  const primary = on === 'ink' ? '#d4843a' : '#a36228'
  const secondary = on === 'ink' ? '#f3eee4' : '#0c0b09'

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        d="M4 26V6h3.4l5.1 11.6L17.6 6H21v20h-3V12.8L13.4 26h-2.6L6.9 12.8V26H4z"
        fill={primary}
      />
      <path d="M24.2 6H27v20h-2.8V6z" fill={secondary} />
    </svg>
  )
}
