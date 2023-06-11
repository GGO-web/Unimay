export function getImageUrl(url?: string) {
  return new URL(`../assets/img/${url}`, import.meta.url).href;
}
