export function removeAllChild(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}