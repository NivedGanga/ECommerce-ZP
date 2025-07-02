export function formatInteger(no: number, digits?: number): number {
    if (!digits) {
        digits = 2
    }
    return Number(no.toFixed(digits))
}