interface WaveDividerProps {
  fill?: string
}

export function WaveDivider({ fill = "var(--color-surface)" }: WaveDividerProps) {
  return (
    <div className="block w-full leading-none -my-px" aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block h-[60px] w-full">
        <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" style={{ fill }} />
      </svg>
    </div>
  )
}
