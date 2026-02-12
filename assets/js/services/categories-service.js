import axios from 'axios'; // import Axios for HTTP requests

/**
 * @returns {Promise}
 */
export function fetchCategories() { // fetch categories from API
    return axios.get('/api/categories'); // return axios promise
}
