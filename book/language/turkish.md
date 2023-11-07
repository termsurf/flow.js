# Turkish Words

Turkish is an agglutinative language, so words are typically formed from
a base and many suffixes. This means we have two types of tries:

1. **dictionary trie**: For words (base + possible suffixes) which are
   commonly used and go into the dictionary.
2. **possibility trie**: For words which are theoretically possible to
   generate, and whose meaning can be automatically figured out from the
   component parts, but it doesn't need or deserve a dictionary entry.

First, query the dictionary trie, to see if we have it in the
dictionary. If not, query the possibility trie to see if it's a possible
match. Use fuzzy pronunciation matching to determine candidates from
either trie.

## Suffixes

```
şair + sin/sın/sun/etc.
"a/ı": use the "ı" ending.
"e/i": use the "i" ending.
"o/u": use the "u" ending.
"ö/ü": use the "ü" ending.

{
  load: [
    {
      name: 'base', base: true
    },
    {
      name: 'last-vowel', form: 'or', test: {
        form: 'pattern',
        text: 'ei'
      }
    },
    {
      name: 'head', form: 'pattern', text: 'consonant'
    }
  ],
  save: [
    { name: 'base' },
    { name: 'last-vowel' },
    { name: 'head' },
    { text: 'sin' }
  ]
}
```

## Resources

- https://ai.glossika.com/blog/learn-the-basics-of-turkish-suffixes-of-turkish-verbs-and-nouns
- https://www.quora.com/Are-there-irregulars-in-the-Turkish-conjugation
- https://en.wikipedia.org/wiki/Turkish_grammar
- https://www.reddit.com/r/linguistics/comments/1z8ef8/why_havent_irregular_verbs_evolved_in_turkish/
