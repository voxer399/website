import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

type Mode = "light" | "dark" | "system"
type Palette = "classic" | "sage" | "ocean"

const MODE_KEY = "theme-mode"
const PALETTE_KEY = "theme-palette"

const MODES: { key: Mode; label: string; icon: typeof Sun }[] = [
  { key: "light", label: "Light", icon: Sun },
  { key: "dark", label: "Dark", icon: Moon },
  { key: "system", label: "System", icon: Monitor },
]

const PALETTES: { key: Palette; label: string; swatch: string }[] = [
  { key: "classic", label: "Classic", swatch: "#7b002c" },
  { key: "sage", label: "Sage", swatch: "#4a6b52" },
  { key: "ocean", label: "Ocean", swatch: "#1f5f74" },
]

function resolveMode(mode: Mode): "light" | "dark" {
  if (mode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }
  return mode
}

function applyTheme(mode: Mode, palette: Palette) {
  const root = document.documentElement
  const resolved = resolveMode(mode)
  root.setAttribute("data-palette", palette)
  root.setAttribute("data-mode", resolved)
  root.style.colorScheme = resolved
}

function readStoredMode(): Mode {
  if (typeof window === "undefined") return "system"
  const stored = localStorage.getItem(MODE_KEY)
  return stored === "light" || stored === "dark" || stored === "system" ? stored : "system"
}

function readStoredPalette(): Palette {
  if (typeof window === "undefined") return "classic"
  const stored = localStorage.getItem(PALETTE_KEY)
  return stored === "classic" || stored === "sage" || stored === "ocean" ? stored : "classic"
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>(readStoredMode)
  const [palette, setPalette] = useState<Palette>(readStoredPalette)

  useEffect(() => {
    applyTheme(mode, palette)
    localStorage.setItem(MODE_KEY, mode)
    localStorage.setItem(PALETTE_KEY, palette)
  }, [mode, palette])

  useEffect(() => {
    if (mode !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => applyTheme("system", palette)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [mode, palette])

  const ActiveIcon = MODES.find((m) => m.key === mode)?.icon ?? Sun

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Appearance and color theme settings"
          className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-navy text-navy transition-colors duration-200 hover:bg-cream"
        >
          <ActiveIcon className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        {MODES.map(({ key, label, icon: Icon }) => (
          <DropdownMenuItem key={key} active={mode === key} onSelect={() => setMode(key)}>
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
        {PALETTES.map(({ key, label, swatch }) => (
          <DropdownMenuItem key={key} active={palette === key} onSelect={() => setPalette(key)}>
            <span
              className="h-4 w-4 shrink-0 rounded-full border border-hairline"
              style={{ backgroundColor: swatch }}
              aria-hidden="true"
            />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
