# Arabic Words

## Circumfixes

```
bənnay => tabənnayət

{
  save: [
    { text: 'ta' },
    { name: 'self' },
    { text: 'ət' }
  ]
}
```

## Infixes

This next one first splits apart the input `self` into a consonant and
the rest of it, and then it interweaves other stuff around those two
parts as the output.

```
اجتهد ijtahada "he worked hard", from جهد jahada "he strove"

{
  load: [
    {
      name: 'consonant',
      text: 'bjk...',
      form: 'pattern',
    },
    {
      name: 'rest',
      form: 'walker',
      test: {
        form: 'pattern',
        text: '.'
      }
    }
  ],
  save: [
    { text: 'i' },
    { name: 'consonant' },
    { text: 't' },
    { name: 'rest' }
  ]
}
```

## Resources

- [Implementation of infixes and circumfixes in the spellcheckers](https://ayaspell.sourceforge.net/doc/infixes_medar_2009.pdf)
- [Moroccan Arabic Borrowed Circumfix From Berber: Investigating Morphological Categories in A Language Contact Situation](https://www.researchgate.net/publication/307445411_Moroccan_Arabic_borrowed_circumfix_from_Berber_investigating_morphological_categories_in_a_language_contact_situation/fulltext/57d8dd3d08ae0c0081ee1018/Moroccan-Arabic-borrowed-circumfix-from-Berber-investigating-morphological-categories-in-a-language-contact-situation.pdf)
- https://en.wikipedia.org/wiki/Infix#Arabic
