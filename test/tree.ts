/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Trie } from 'dawg-lookup'

const trie = new Trie(
  `
hello
world
apply
apple
appendix
apprehension
apprehend
appreciate
dog
cat
bird
birding
birth
rant
random
rabbit
rack
rancid
bit
bite
dream
clean
cart
code
fish
fist
first
grow
glow
growl
stench
step
stair
tree
treat
trench
`
    .trim()
    .replace(/\n+/g, ' '),
)

const packed = trie.pack()
console.log(packed.split(';').join('\n'))
