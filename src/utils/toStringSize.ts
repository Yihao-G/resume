/**
 * Defaults to px
 */
export function toStringSize(size: string | number): string {
    if (typeof size === 'number' || !isNaN(+size)) {
        return size + 'px'
    } else {
        return size
    }
}
