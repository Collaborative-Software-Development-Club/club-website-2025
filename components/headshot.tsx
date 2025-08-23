type HeadshotProps = {
  filename?: string
  member: string
  size?: "sm" | "md" | "lg"
}

export function Headshot({ filename, member, size = "md" }: HeadshotProps) {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20",
  }

  const imageSrc = filename ? `/headshots/${filename}` : "/headshots/member-headshot-placeholder.png"

  return (
    <img
      src={imageSrc || "/placeholder.svg"}
      alt={`${member} photo`}
      className={`${sizeClasses[size]} rounded-full object-cover border border-white/10`}
    />
  )
}
