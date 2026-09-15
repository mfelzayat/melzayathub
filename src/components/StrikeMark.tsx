type Props = {
  className?: string
  /** Show the oval ring around the lightning S */
  framed?: boolean
  title?: string
}

/** Stylized Strike S — red lightning mark on black oval. */
export function StrikeMark({
  className = 'h-8 w-8',
  framed = true,
  title = 'Strike Media',
}: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      {framed && (
        <>
          <ellipse cx="24" cy="24" rx="20" ry="22" fill="#0A0A0A" />
          <ellipse
            cx="24"
            cy="24"
            rx="20"
            ry="22"
            stroke="#E8282C"
            strokeWidth="1.5"
            opacity="0.9"
          />
        </>
      )}
      <path
        d="M16.2 34.5 27.8 20.2H19.4l2-9.2 12.4 14.2h-8.1L23.2 36.2z"
        fill="#E8282C"
      />
      <path
        d="M16.2 34.5 27.8 20.2H19.4l2-9.2"
        stroke="#FF3236"
        strokeWidth="0.6"
        opacity="0.45"
        strokeLinejoin="round"
      />
    </svg>
  )
}
