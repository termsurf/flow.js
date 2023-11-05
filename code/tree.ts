export type Base = {
  site: Array<Array<Site>>
  tree: Array<Tree>
  link: Record<string, number>
}

// There is a top-level array.
// Then each child array holds up to 2^24 items.
// if child.length === 2^24 create new array

export function make(): Base {
  return {
    site: [[{ bite: '$' }]],
    tree: [{ base_slot: 0, site_slot: 0, nest: {} }],
    link: {},
  }
}

export function read(base: Base, bite: string) {}

export function save(base: Base, bite: string) {
  const bite_list = [...bite]

  let node = base.tree
  let i = 0

  while (i < bite_list.length) {
    const bite = bite_list[i++] as string

    node.nest ??= {}

    const base_slot = base.site.length - 1
    const base_list = base.site[base_slot] as Array<Site>
    const site_slot = base_list.length as number

    if (!node.nest[bite]) {
      const site = { bite }
      base_list[site_slot] = site
      node.nest[bite] = {
        base_slot,
        site_slot,
      }
    }

    const site = base_list[site_slot] as Site

    if (i === bite_list.length - 1) {
      site.text = bite
    }
  }
}

// this is used as a lighweight instantiated trie,
// and we use the `id` to lookup the heavyweight trie node
// it the global array.
export type Tree = {
  base_slot: number
  site_slot: number
  nest?: Record<string, Tree>
  fork?: Array<Tree>
}

export type Site = {
  // the key character.
  bite: string
  form?: 'word' | 'fuse'
  text?: string
  // flow?: Flow
  // if it's one item (most cases) it will be a simple string.
  // up to 1000 items, it will be an array.
  // more than 1000 items, and it will be a trie.
  load?: string | Array<string> | Tree
  // this aggregates and sorts based on frequency.
  // limit to 1000 items in array.
  // base_load?: string | Array<string>
}

export type TreeList = Array<Tree>

export function bite(tree: Tree, path: Array<string>) {
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
