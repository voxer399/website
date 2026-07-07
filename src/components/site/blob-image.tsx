import { cn } from "@/lib/utils"
import { asset } from "@/lib/asset"

interface BlobImageProps {
  src: string
  alt: string
  variant?: "default" | "alt"
  float?: boolean
  className?: string
}

export function BlobImage({ src, alt, variant = "default", float = false, className }: BlobImageProps) {
  return (
    <div
      className={cn(
        "blob-media overflow-hidden shadow-[var(--shadow-lift)]",
        variant === "alt" && "blob-alt",
        float && "float-decor",
        className,
      )}
    >
      <img src={asset(src)} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}
