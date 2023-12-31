# Checking Definition Compiler

A few steps for usage:

1. Write a TypeScript DSL to define the definitions concisely and
   without repetition.
2. Compile to non-circular JSON data structure for rapid printing and
   loading.
3. Compile to optimized possibly circular object structure for fast
   lookups.
4. Use final data structure for checking against rules.

The trie will get saved to JSON, possibly over multiple files, which
will then be loaded into memory.

Define base words.

```
unrecognizable
recognize
```

Given definitions to some derived words even so.

Mark the rule with the features it adds to the dynamically generated
flow.

- `flow/base/index.json`: Base words used in dictionary.
- `flow/rule/index.json`: Rules to generate other word forms.
- `flow/tree/index.json`: The trie of words.
- `flow/index.json`: All the defined flows.
- `flow/sense/index.0001.json`
- `flow/transcription/index.0001.json`

## `flow/base/index.json`

These contain something like this:

```ts
type FlowBase = {
  text?: string
  rule?: Array<{ name?: string }>
  feature?: FlowVariant['feature']
}
```

## Ideas

- Word frequency stored for base words using a hash table. Then when you
  use a trie to find all matches, you can find their frequencies to sort
  them.

1. Convert hunspell en_US.aff to book code.
2. Generate Trie from book code. Generate pronunciations to put into it.
3. Optimize Trie with keys to remove duplication.

## Resources

- https://github.com/GitbookIO/hunspell-spellchecker/blob/master/lib/index.js
- https://github.com/past/speller/blob/master/lib/speller.js
- [A Theory of Internal Reduplication](https://core.ac.uk/reader/13601830)
