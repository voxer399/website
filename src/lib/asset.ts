/**
 * Resolves a public-asset path against the app's base URL, so references
 * stay correct regardless of trailing slashes on the current page URL
 * (a classic GitHub Pages project-site pitfall with relative paths).
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}
