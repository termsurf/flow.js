# Flow Types

```ts
type Flow = {
  // the word itself.
  slug?: string
  feature?: FlowRule.Feature | Array<FlowRule.Feature>
  link?: FlowRule.Dependency | Array<FlowRule.Dependency>
}

namespace FlowRule {
  type Book = {
    // these two _group arrays
    // are object shortcuts essentially,
    // not totally necessary but make things
    // more concise.
    definition_group?: Array<DefinitionGroup>
    feature_group?: Array<FeatureGroup>
    // here is where the main definitions go.
    prefix: Array<Definition>
    suffix: Array<Definition>
  }

  type DefinitionType = 'prefix' | 'suffix'

  type Definition = {
    group?: string
    // Remove this from end of previous word for suffix.
    strip: Content | Array<Content>
    // start of next word.
    start: Content | Array<Content>
    // replacement, which can reference start or end or not.
    value: Content | Array<Content>
    // morphological fields, coming from hunspell
    feature?: Feature | Array<Feature>
    // requirements/dependencies of other rules
    dependency?: Dependency | Array<Dependency>
  }

  // a way to define multiple references to definitions in one object.
  type DefinitionGroup = {
    id: number
    reference: Array<string>
  }

  type Feature = FeatureReference | FeatureAlias

  type FeatureReference = {
    type: 'reference'
    key: string
    value: string
  }

  // aliases to a feature group
  type FeatureAlias = {
    type: 'alias'
    value: number
  }

  type FeatureGroup = {
    id: number
    reference: Array<FeatureReference>
  }

  type Dependency = DefinitionAlias | DefinitionReference

  // link to an alias to a set of definitions
  type DefinitionAlias = {
    type: 'alias'
    value: number
  }

  // link to an actuall definition by id
  type DefinitionReference = {
    type: 'reference'
    value: string
  }

  type Content = Sequence | Pattern | Element

  type Sequence = {
    type: 'sequence'
    value: string
  }

  type Pattern = {
    type: 'pattern'
    value: string
  }

  type Element = {
    type: 'element'
    value: string
  }
}
```
