import { add } from '../package/add'
import { it, expect } from 'vitest'

it('add', () => {
  expect(add()).toBe(0)
  expect(add(1)).toBe(1)
  expect(add(1, 2, 3)).toBe(6)
})
