# Sanskrit Words

Sanskrit words are composed out of a base ("dhatu"), and prefixes and
suffixes. You can then combine these 3 "units" into compound words.

We can create 2 tries:

1. **dictionary trie**
2. **possibility trie**

The possibility trie can be used to check for possible new words,
combined out of known parts. The dictionary trie is words we know for
sure exist, even if we don't yet have a handwritten definition for it.

## Chunking Words in Sanskrit

For Sanskrit, we divide the word into chunks.

- prefix fragment: Links to original whole prefix.
- base fragment: Links to original whole base word.
- suffix fragment: Links to original whole suffix.

```ts
type TrieNode = {
  source: string // word
  known: boolean // if it's a combined word
  child: Array<TrieNode>
}

// actual details of word is defined in wavebond/form
type Word = {
  slug: string
  kind: 'prefix' | 'suffix' | 'base' | 'compound'
}
```

## Derived (but "known") Words

These don't seem to be necessary to store in the trie, but not sure.

## Breaking a word down into components

For this, it seems you would need to have built up the exact strings of
how things combine, and link that back to the base original word.

### Examples

```
योगिन् (yogin) + चर (cara) = योगिंश्चर or योगिँश्चर (yogiṁścara or yogim̐ścara)
n + [c|ch|ṭ|ṭh|t|t] = ṁs|m̐s.

bind: [
  { name: 'base' },
  { name: 'head' }
],
load: [
  { host: 'base', name: 'base', base: true },
  { host: 'base', name: 'n', text: 'n' },
  { host: 'head', name: 'head', form: 'or', test: [
    { text: 'c' },
    { text: 'ch' },
    { text: 'ṭ' },
    ...
  ] }
],
save: [
  { name: 'base' },
  { text: 'ṁs', host: 'n' },
  { name: 'head' }
]
```

Defaults to `bind: { name: 'self' }`.

```
"r", "ṣ", "ṛ" or "ṝ" + "n" (not at the end of the word) = "n" is turned into "ṇ"

load: [
  { base: true },
  { name: 'base', form: 'or', test: [
    { text: 'r' },
    { text: 'ṣ' },
    ...
  ] },
  { text: 'n' },
  { head: false }
],
save: [
  { name: 'base' },
  { text: 'ṇ', host: 'n' }
]
```

```
tat + lobhaḥ = tallobhaḥ
dah + ta = dagdha
muh + ta = mūḍha
```

## Resources

- https://www.sanskrit-trikashaivism.com/en/learning-sanskrit-combination-7-1/434
- https://www.sanskrit-trikashaivism.com/en/learning-sanskrit-combination-rules-of-sandhi-1/435#FurinfoSandhirules
- https://www.learnsanskrit.org/start/nouns/sandhi/
- https://www.learnsanskrit.org/references/sandhi/internal/
