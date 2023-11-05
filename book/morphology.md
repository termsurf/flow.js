# Morphology

Should be able to handle the following made up and real cases:

```
yogin + cara = yogimsara (change the join spot)
yogin + cara = yagrimsara (intermingle words to first part)
yogin + cara = yagrimsagran (intermingle to both parts)
i*t* + jakara = ijtakara (interweave)
i*t*o + gakar = igtakor (interwave more complex)
bep*leg + word = bepwordleg (circumfix)
*nen* + livam = livnenam (infix)
*ni* + kasi = kniasi (infix)
*ni* + suri = snuri (infix with morph, dropping i if before vowel)
*ni* + davra = diavra (infix with morph, dropping n if after d)
create + *tion = creation (suffix with morph)
absolutely + damn = absodamnlutely
```

Each of these are given a fixed `key` for representing them, a
reference. A `slug`.

After each character in a word, check starting from the `*` in the trie.

Then we break them down in a specific context.

ni = n if followed by u.

So it's like, we have:

- word
- weave (2+, includes circumfix)
  - weave_start
  - weave_middle
- start
- middle
- end

And you can have multiples of these.

```
reorganizable
```

First check start + word tries.

```
# equal the same output
yogin + cara = yogimsara
yogin + chara = yogimsara
```

If that happens, then you should show both possibilities.

## Infixes

It is like it needs to do several possible parses at once, like symbolic
evaluation in programming. It passes down the features it is looking
for.

> The simultaneous attachment of both a prefix and a suffix is called
> "parasynthesis".

## Resources

- [A typological comparison of infixes and circumfixes](https://pasithee.library.upatras.gr/mmm/article/view/4408)
- http://www.ai.mit.edu/projects/dm/bp/nonconcat.pdf
- http://grammar.ucsd.edu/courses/lign120/02-intro_rev.pdf
- [MAG-Tagalog: A Rule-Based Tagalog Morphological Analyzer and Generator](https://www.researchgate.net/publication/322869468_MAG-Tagalog_A_Rule-Based_Tagalog_Morphological_Analyzer_and_Generator)

### Allomorphy Resources

- https://en.wikipedia.org/wiki/Allomorph

### SpellChecking

- [Spellcheckers for the South African languages, Part 2: The utilisation of clusters of circumfixes](https://www.researchgate.net/publication/237331124_Spellcheckers_for_the_South_African_languages_Part_2_The_utilisation_of_clusters_of_circumfixes)
