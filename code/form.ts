export type RuleBook = Array<Rule>

export type Rule = {
  name: string
  bind?: Array<RuleBind>
  load?: Array<RuleLoad>
  save?: Array<RuleSave>
}

export type RuleSave = RuleSaveLink | RuleSaveText

export type RuleSaveText = {
  form: 'text'
  text: string
}

export type RuleSaveLink = {
  form: 'link'
  name: string
}

export type RuleLoad =
  | RuleLoadHook
  | RuleLoadForm
  | RuleLoadText
  | RuleLoadRule
  | RuleLoadFlow
  | RuleLoadTake
  | RuleLoadList

export type RuleLoadBase = {
  name?: string
  need?: boolean
}

export type RuleLoadHook = RuleLoadBase & {
  form: 'hook'
  base?: boolean
  head?: boolean
}

export type RuleLoadForm = RuleLoadBase & {
  form: 'form'
  text?: string
}

export type RuleLoadText = RuleLoadBase & {
  form: 'text'
  text?: string
}

export type RuleLoadList = RuleLoadBase & {
  form: 'list'
  test?: RuleLoad | Array<RuleLoad>
}

export type RuleLoadTake = RuleLoadBase & {
  form: 'take'
  test?: Array<RuleLoad>
}

export type RuleLoadRule = RuleLoadBase & {
  form: 'rule'
  rule?: string
}

export type RuleLoadFlow = RuleLoadBase & {
  form: 'flow'
  flow?: string
}

export type RuleBind = {
  name: string
}
