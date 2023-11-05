# Navajo Words

## Verb Templates

```
diʼnisbąąs "I'm in the act of driving some vehicle (into something) & getting stuck"
[di-ʼa-ni-sh-ł-bąąs: ʼa- + di- + ni- + sh- + ł + -bąąs]

{
  save: [
    { text: 'di', need: false }, // need === optional
    { text: "'a", need: false },
    { text: 'ni', need: false },
    { text: 'sh', need: false },
    { text: 'ł', need: false },
    { name: 'self' },
  ]
}
```

But that is just one specific instance. Would just have to use patterns
over it.

```
{
  save: [
    { group: 'di', need: false }, // need === optional
    { group: "'a", need: false },
    { group: 'ni', need: false },
    { group: 'sh', need: false },
    { group: 'ł', need: false },
    { name: 'base' },
  ]
}
```

Can have a generic rule, and then a rule that overrides it.

## Resources

- [Navajo Verb Template](https://en.wikipedia.org/wiki/Navajo_grammar#Verb_template)
- [How to Use Young and Morgan’s 1987 The Navajo Language](https://www.sas.rochester.edu/lin/joycemarymcdonough/htouym-june2015.pdf)
