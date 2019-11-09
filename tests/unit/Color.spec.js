import { rgb, hex, hsl } from '@/utils/Color'

const color = "e3342f";

describe("Color", () => {
  test("devuelva el color en formato RGB", () => {
    expect(rgb(color)).toBe('227, 52, 47');
  })

  test("devuelva el color en formato HEX", () => {
    expect(hex(color)).toBe('#e3342f');
  })

  test("devuelva el color en formato HSL", () => {
    expect(hsl(color)).toBe('2°, 76%, 54%');
  })
})