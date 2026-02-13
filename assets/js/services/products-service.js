import axios from 'axios'; // import Axios

/**
 * @param {string|null} categoryIri
 * @param {string|null} searchTerm
 * @returns {Promise}
 */
export async function fetchProducts(categoryIri, searchTerm) { // fetch products, optionally filtered by category
    const params = {};
    // If a category ID is provided, fetch products for that category
    if (categoryIri) {
        params.category = categoryIri; // add category filter if provided
    }

    if (searchTerm) {
        params.name = searchTerm; // add name filter if search term is provided
    }

    return axios.get('/api/products', { // but we need to make the mounted method async to use await!
        params, // Pass query parameters to filter products by category if currentCategoryId is set
        // its short for { params: params } because of ES6 object property shorthand syntax, where if the property name and variable name are the same, we can just write it once.
    });
}
