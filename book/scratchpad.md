_Note: This is just random notes that change over time probably, to
capture quick thoughts, which get later translated into the specific
language pages and such. So probably want to avoid this file for most
purposes._

# Scratchpad

1. Find base word candidates using a hash table.
2. Sort base words by frequency.
3. Then find derived words for the top frequency matches.

For the first step, of finding base words using a hash table, you want
to store the deletions in there too. You will have to take the input,
and find the corresponding matching base words from it. So if it is a
derived word, you will have to

unremarkable

That is a derived word, the base word is remark, which is in the
dictionary. It is also a derived word which is exact, so return that.

unremarka ble bles

- First do search for exact match (or mispelled match).
- Then do phonetic match if no matches are found. Sort by frequency.

Have a trie for each of the phonetic hash variants. Do deletion like
SimSpell on each of these tries as well.

- `is_edited`: Trie node is marked as having a deletion.
- `is_word`: Trie node is marked as being a complete word.
- `phonetic_feature`: Which phonetic feature categories it is in.

Have a trie merging all phonetic nodes, with merging deletions. Mark

Use the rules to determine the next trie to navigate. Each rule gets its
own trie for the prefix or suffix it adds.

You don't need a matches array, you can get those by traversing the
trie. You can precompute the top-20 matches for each, by sorting by
frequency. Get those by iterating over the trie one trie node at a time.

```
backtrack: phonetic-symbol
progress: phonetic-trie
```

The rule is used to attach "RuleTrie" to the base "WordTrie" phonetic
trie. It says how to backtrack on the dictionary word, and how to move
forward. The "progression trie" is attached to the WordTrie.

The trie contains phonetic version of text, along with links to
dynamically generated words. Each rule is an affix, and gets merged with
the main trie. The end of the rules link back to the trie nodes they can
be a part of.

- re => word trie
- able => plural trie
- prefix-trie

Have a `constraint` property or `test`, which checks that the prefix or
suffix hasn't already been used in constructing the string.

```
if (serializedPath.includes('re', 'prefix) && triePath === 're') {
  skip
} else {
  accept
}
```

You would have a case where a word may have the same letter as the trie
start. So you need to handle both cases.

```
barlam (word)
barlala (bar is word, la is suffix)
recursive
```

Prefer the word vs. the suffix.

The word is suffixed.

```ts
type TrieNode = {
  start?: TrieNode
  // top ~100 prefix matches sorted by frequency.
  match?: Array<Flow>
  // if this completes a word
  is_complete?: boolean
  child?: Record<string, TrieNode>
  // pronunciation text fragment
  text: string
  // so we know what kind of native text it matches to
  // if it `is_complete`.`
  // the full word
  slug?: string
  // so we know what kind of fragment this is if it is complete.
  // flow can have variants.
  // should return base/head for sandhi
  source?: Array<{ base: Flow; head: Flow } | Flow>
  // if a suffix, make sure it doesn't already have a word.
  // if a prefix, make sure prefix only occurs once?
  test?: (list: Array<TrieNode>) => boolean
}

if (node.is_complete) {
  if (node.test && !node.test(path)) {
    return false
  }
}
```

So it breaks down by pronunciation in the trie. Several pronunciation
variants. With 1 sound deletions.

And we have a trie for the spelling in native script, with 2 character
deletions (latin script), or 1 character deletions other scripts.

So we set all the `node.flow` to the native flow value, and later we
iterate through each, build a list of possible strings, and sort and
take the top 1000 or so. And then we set `match` to that final result
set.
