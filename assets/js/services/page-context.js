/**
 * Returns the current category IRI set by the server.
 *
 * @returns {string|null}
 */
export function getCurrentCategoryId() {
    return window.currentCategoryId; // read global variable
}
