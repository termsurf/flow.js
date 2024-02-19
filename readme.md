<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<p align='center'>
  <img src='https://github.com/termsurf/flow.js/blob/make/view/flow.svg?raw=true' height='192'>
</p>

<h3 align='center'>@termsurf/flow</h3>
<p align='center'>
  Word querying library in TypeScript
</p>

<br/>
<br/>
<br/>

## Introduction

The goal of this library is to clearly define how to create the data
structures to store words across any natural language, so they can be
queried using prefix searching and fuzzy matching, and then to implement
that. The ideas and thoughts behind each language so far considered is
in the [book](https://github.com/termsurf/flow.js/tree/make/book)
folder.

_**Note**: This library is just in the idea phases at this time. Still a
long and hard road ahead._

This library will be used to query words in a dictionary basically.
Imagine you are searching for some word and mispell it, or want
autocomplete to finish it for you. That will be done through this
library in the end.

## Goals

This project aims to include a few features:

- Splitting strings into "words" (things separated by spaces, at least
  conceptual spaces).
- Finding if a word is in the dictionary of known words, or is at least
  allowed from the rules of a grammar.
- Splitting a word into its parts, recursively (for compound words).

It is clear this is still an active research problem (word and
morphological segmentation), but we will still work on applying the key
findings and trying to figure out heuristic shortcuts in the meantime.

The usage might be something like this:

```ts
import flow from '@termsurf/flow/host/code/language/tibetan'

// check if it is in the dictionary
// returns 'possible' | 'known' | 'derived' | 'missing'
flow.test('ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པ་')

// determine the structure of the data.
flow.form('ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པ་')
{
  type: 'compound',
  content: [
    {
      type: 'word',
      content: [
        {
          type: 'syllable',
          text: '...',
        },
        {
          type: 'syllable',
          text: '...',
        }
      ]
    },
    {
      type: 'word',
      content: [
        {
          type: 'syllable',
          text: '...',
        }
      ]
    }
  ]
}

// find related records using this as a prefix.
flow.list('ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པ་')
```

## License

Copyright 2021-2024 <a href='https://term.surf'>TermSurf</a>

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## TermSurf

This is being developed by the folks at [TermSurf](https://term.surf), a
California-based project for helping humanity master information and
computation. Find us on [Twitter](https://twitter.com/termsurf),
[LinkedIn](https://www.linkedin.com/company/termsurf), and
[Facebook](https://www.facebook.com/termsurf). Check out our other
[GitHub projects](https://github.com/termsurf) as well!
