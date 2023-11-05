# Checking Definition Compiler

A few steps:

1. Write a TypeScript DSL to define the definitions concisely and
   without repetition.
2. Compile to non-circular JSON data structure for rapid printing and
   loading.
3. Compile to optimized possibly circular object structure for fast
   lookups.
4. Use final data structure for checking against rules.

## Ideas

- Word frequency stored for base words using a hash table. Then when you
  use a trie to find all matches, you can find their frequencies to sort
  them.

## Resources

- https://github.com/GitbookIO/hunspell-spellchecker/blob/master/lib/index.js
- https://github.com/past/speller/blob/master/lib/speller.js
- [A Theory of Internal Reduplication](https://core.ac.uk/reader/13601830)
