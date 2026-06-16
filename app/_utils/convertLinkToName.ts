export const convertLinkToName = (input: string): string => {
  return input
    .trim()
    .toLowerCase()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase()).split('/')[2]
}
