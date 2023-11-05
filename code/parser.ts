// the settings for the environment.
type Parser = {
  ignored_character: string // the characters to ignore, like arabic diacritics
  language: {
    slug: string // the language code
  }
}

// Takes the rule list/book, and can test if a word is in the "set". Can correct the word by suggesting alternatives which have a small edit distance away.
