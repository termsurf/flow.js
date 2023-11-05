import { find, stringify, Tree } from '../code/tree'

const tree: Tree = {
  text: '$',
  child: {
    a: {
      text: 'a',
      child: {
        x: {
          form: 'word',
          text: 'x',
          slug: 'AX',
        },
        y: {
          form: 'fuse',
          text: 'x',
        },
      },
    },
    b: {
      text: 'b',
    },
  },
}

console.log(stringify(tree))

console.log(find(tree, ['a', 'x']))
