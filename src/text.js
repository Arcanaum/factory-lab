/** Number of words in a text. */
export function countWords(text) {
  return text.trim().split(/\s+/).length
}

/** A web address part from a title: lower case, words joined by single dashes. */
export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
