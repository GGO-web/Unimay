export function getIconUrl(url?: string) {
  return new URL(`../assets/svg/${url}`, import.meta.url).href;
}
