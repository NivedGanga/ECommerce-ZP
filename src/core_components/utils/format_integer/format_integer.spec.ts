import { formatInteger } from "./format_integer"

test("format the passed integer to given decimal digits", () => {
    const testNumber = 10.4594283
    const output = formatInteger(testNumber, 3)
    expect(output).toEqual(10.459)
})

test("format the passed integer to 2 decimal digits", () => {
    const testNumber = 10.4599283403294
    const output = formatInteger(testNumber)
    expect(output).toEqual(10.46)
})