import { dateFormater } from "./date_formatter"

describe("date formatter", () => {
    test("coverts to dd month yyyy , if there is no displacement", () => {
        const testInput = 1751956380000
        const output = dateFormater(testInput)
        expect(output).toEqual('July 08, 2025')
    })
    test("coverts to dd month yyyy , if there is displacement", () => {
        const testInput = 1751956380000
        const output = dateFormater(testInput, 5)
        expect(output).toEqual('July 13, 2025')
    })
    test("return empty string if the date is invalid", () => {
        const testInput = 1751e956380000
        const output = dateFormater(testInput, 5)
        expect(output).toEqual('')
    })
})