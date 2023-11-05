import { Buffer } from 'buffer'

export function getByteLength(text: string) {
  return Buffer.byteLength(text, 'utf8')
}
