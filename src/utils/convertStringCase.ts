export function toCamelCase(text: string): string {
    return text.replace(/-\w/g, clearAndUpper)
}

export function toPascalCase(text: string): string {
    return text.replace(/(^\w|-\w)/g, clearAndUpper)
}

function clearAndUpper(text: string) {
    return text.replace(/-/, '').toUpperCase()
}
