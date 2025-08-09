export function formatMonthYear(dateStr?: string): string {
  if (!dateStr) return ""
  const d = new Date(dateStr)
  // If parsing fails, fall back to original string (but still strip day parts heuristically)
  if (isNaN(d.getTime())) {
    // Try to strip day components like "August 10, 2023" -> "August 2023"
    const match = dateStr.match(/([A-Za-z]+)\s+\d{1,2},\s+(\d{4})/)
    if (match) return `${match[1]} ${match[2]}`
    return dateStr
  }
  return d.toLocaleString("en-US", { month: "long", year: "numeric" })
}
