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

## Resources

### Infix Resources

- [Infixation](https://julietteblevins.ws.gc.cuny.edu/files/2016/10/Blevins2012_Infixationrev1.pdf)
- [Infixes: right in the middle\*](http://www.skase.sk/Volumes/JTL07/2.pdf)
- [Infixes really are (underlyingly) prefixes/suffixes](https://muse.jhu.edu/article/873747/pdf)

### Allomorphy Resources

- https://en.wikipedia.org/wiki/Allomorph
