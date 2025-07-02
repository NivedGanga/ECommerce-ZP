export function dateFormater(millisecondsSinceEpoach: number): string {
    try {
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