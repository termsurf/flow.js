import Book, { flow, host, list, form, text } from './code/book'

const book = new Book()

book
  .rule('iful')
  .bind('base')
  .bind('head')
  .load('base', host('base', list(form('.'))))
  .load(host('base', form('y')))
  .load(host('head', flow('full')))
  .save('base')
  .save(text('i'))
  .save(text('ful'))

console.log(JSON.stringify(book.toJSON(), null, 2))

// [
//   {
//     name: 'iful',
//     bind: [
//       {
//         name: 'base',
//       },
//       {
//         name: 'head',
//       },
//     ],
//     load: [
//       {
//         form: 'list',
//         name: 'base',
//         test: [
//           {
//             form: 'form',
//             text: '.',
//           },
//         ],
//       },
//       {
//         form: 'form',
//         text: 'y',
//       },
//       {
//         form: 'flow',
//         flow: 'full',
//       },
//     ],
//     save: [
//       {
//         form: 'link',
//         name: 'base',
//       },
//       {
//         form: 'text',
//         text: 'i',
//       },
//       {
//         form: 'text',
//         text: 'ful',
//       },
//     ],
//   }
// ]
