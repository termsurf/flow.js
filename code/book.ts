import _ from 'lodash'
import { Rule, RuleBook, RuleLoad, RuleSave } from './form'
import { link } from './make'

export * from './make'

export default class Book {
  book: RuleBook

  host?: Rule

  constructor(book: RuleBook = []) {
    this.book = book

    Object.defineProperty(this, 'host', {
      enumerable: false,
      value: undefined,
    })
  }

  toJSON() {
    return this.book
  }

  rule(name: string) {
    const rule = { name }
    this.host = rule
    this.book.push(rule)
    return this
  }

  bind(...load: Array<string>) {
    if (!this.host) {
      throw new Error('No rule in scope')
    }

    const bind = (this.host.bind ??= [])

    bind.push(...load.map(name => ({ name })))

    return this
  }

  load(...site: Array<string | RuleLoad>) {
    if (!this.host) {
      throw new Error('No rule in scope')
    }

    const load = (this.host.load ??= [])

    const name =
      typeof site[0] === 'string' ? (site.shift() as string) : undefined
    const host = site.pop()

    if (typeof host !== 'object' || !('form' in host)) {
      throw new Error('Invalid load')
    }

    if (name) {
      load.push({
        form: host.form,
        name,
        ..._.omit(host, ['form']),
      })
    } else {
      load.push(host)
    }

    return this
  }

  save(site: string | RuleSave) {
    if (!this.host) {
      throw new Error('No rule in scope')
    }

    const save = (this.host.save ??= [])

    if (typeof site === 'string') {
      save.push(link(site))
    } else {
      save.push(site)
    }

    return this
  }
}
