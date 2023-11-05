export type Tree = {
  id?: number
  text: string
  form?: 'word' | 'fuse'
  slug?: string
  link?: Array<Tree>
  // if it's one item (most cases) it will be a simple string.
  // up to 1000 items, it will be an array.
  // more than 1000 items, and it will be a trie.
  load?: string | Array<string> | Tree
  // this aggregates and sorts based on frequency.
  // limit to 1000 items in array.
  base_load?: string | Array<string>
  child?: Record<string, Tree>
}

export type TreeList = Array<Tree>

export function find(tree: Tree, path: Array<string>) {
  let node: Tree | undefined = tree
  let i = 0
  while (node && node.child && i < path.length) {
    const text = path[i++]
    if (!text) {
      throw new Error(`Invalid path segment ${text}`)
    }
    node = node.child[text]
  }
  return node
}

export function stringify(tree: Tree) {
  return stringifyArray(tree).join('\n')
}

function stringifyArray(tree: Tree) {
  const text: Array<string> = []

  const attrs: Array<string> = []
  if (tree.form) {
    attrs.push(`  form <${tree.form}>`)
  }
  if (tree.slug) {
    attrs.push(`  slug <${tree.slug}>`)
  }
  text.push(`tree ${tree.text}`)
  text.push(...attrs)
  if (tree.child && Object.keys(tree.child).length) {
    for (const name in tree.child) {
      const child = tree.child[name]
      if (child) {
        stringifyArray(child).forEach(line => {
          text.push(`  ${line}`)
        })
      }
    }
  }

  return text
}
