/**
 * Formats a price by dividing it by 100 and normalizing decimals
 *
 * @param {number} price
 * @returns {string}
 */
export default (price) => (
    // Divide cents by 100 and format as US currency-style number
    (price / 100)
        .toLocaleString('en-US', { minimumFractionDigits: 2 })
);
