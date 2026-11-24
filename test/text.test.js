import { test } from 'node:test'
import assert from 'node:assert/strict'
import { countWords, slugify } from '../src/text.js'

test('counts words separated by any white space', () => {
  assert.equal(countWords('one two\n three\tfour'), 4)
})

test('makes a slug from a title', () => {
  assert.equal(slugify('  Hello, World!  '), 'hello-world')
})
