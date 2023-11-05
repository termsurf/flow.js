# English Words

## Irregular Words

All "irregular" English words must be stored explicitly in the
dictionary.

## Prefixes

```
rearrange

{
  save: [
    { text: 're' },
    { name: 'self' }
  ]
}
```

## Suffixes

```
candy
candied

{
  load: [
    { name: 'base', base: true, form: 'walker', test: {
      form: 'pattern',
      text: '.'
    } },
    { name: 'note', form: 'not', test: { form: 'or', text: 'aeiou' } },
    { text: 'y', head: true }
  ],
  save: [
    { name: 'base' },
    { name: 'note' },
    { text: 'ied' },
  ]
}
```

Can have it be a `head` (suffix) or `base` (prefix) form. Or otherwise
it processes the whole word.

```
{
  form: 'suffix',
  load: [
    { name: 'note', form: 'not', test: { form: 'or', text: 'aeiou' } },
    { text: 'y', head: true }
  ],
  save: [
    { name: 'note' },
    { text: 'ied' },
  ]
}
```

## Multiple Prefixes and Suffixes

```
payable, non-payable but not non-pay
drinkable, undrinkable but not undrink

{
  name: 'plural',
  save: [
    { name: 'self' },
    { text: 's' }
  ]
}

{
  name: 'able',
  save: [
    { name: 'self' },
    { text: 'able' },
    { rule: 'plural', need: false }
  ]
}

{
  name: 'un',
  save: [
    { text: 'un' },
    { name: 'self' },
  ]
}

{
  save: [
    { rule: 'un' },
    { name: 'self' },
    { rule: 'able' }
  ]
}
```

```
beauty + full = beautiful

bind: [
  { name: 'base' },
  { name: 'head' }
],
load: [
  { name: 'base', host: 'base', form: 'sequence', test: {
    form: 'pattern',
    text: '.',
  } },
  { host: 'base', text: 'y' },
  { host: 'head', flow: 'full' }
],
save: [
  { name: 'base' },
  { text: 'i' },
  { name: 'ful' }
]
```

```
{
  text: 'beauty',
}
{
  text: 'full',
}
{
  text: 'ous'
}
```

```
marvelous

{
  save: [
    { name: 'self' },
    { flow: 'ous' }
  ]
}
```

```
interconnected

{
  name: 'ed',
  load: [
    { form: 'anchor', name: 'base', base: true },
    { form: 'pattern', name: 'consonant', test: 'consonant' },
    { form: 'anchor', head: false }
  ],
  save: [
    { name: 'base' },
    { name: 'consonant' },
    { text: 'ed' },
  ]
}

{
  name: 'inter',
  save: [
    { text: 'inter' },
    { name: 'self' }
  ]
}

{
  save: [
    { rule: 'inter' },
    { name: 'self' },
    { rule: 'ed' }
  ]
}
```

## Derived Words

Any derived word that isn't irregular doesn't need to be stored in the
dictionary explicitly. If we know the derivation is incorrect, we can
explicitly include a `false` somewhere to know that the derivation is
not allowed.
