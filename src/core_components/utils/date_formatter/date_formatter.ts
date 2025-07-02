export function dateFormater(millisecondsSinceEpoach: number, displacementDays?: number): string {
    try {
        if (displacementDays) {
            millisecondsSinceEpoach = millisecondsSinceEpoach+ displacementDays * 24 * 60 * 60 * 1000
        }
        const date = new Date(millisecondsSinceEpoach)
        return date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    } catch (e) {
        console.log(e)
        return ''
    }
}