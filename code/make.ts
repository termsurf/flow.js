import {
  RuleLoad,
  RuleLoadFlow,
  RuleLoadList,
  RuleLoadForm,
  RuleSaveText,
  RuleSaveLink,
} from './form'

export function rule(name: string) {
  return { name }
}

export function form(...load: Array<string>): RuleLoadForm {
  if (load.length === 1) {
    return { form: 'form', text: load[0] }
  } else if (load.length === 2) {
    return { form: 'form', name: load[0], text: load[1] }
  } else {
    throw new Error('Invalid form')
  }
}

export function text(text: string): RuleSaveText {
  return { form: 'text', text }
}

export function link(name: string): RuleSaveLink {
  return { form: 'link', name }
}

export function list(...load: Array<RuleLoad>): RuleLoadList {
  return { form: 'list', test: load as Array<RuleLoad> }
}

// export function

export function host(name: string, load: RuleLoad) {
  return {
    ...load,
    host,
  }
}

export function flow(...load: Array<string>): RuleLoadFlow {
  if (load.length === 1) {
    return { form: 'flow', flow: load[0] }
  } else if (load.length === 2) {
    return { form: 'flow', name: load[0], flow: load[1] }
  } else {
    throw new Error('Invalid flow')
  }
}
