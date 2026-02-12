// import axios from 'axios'; // import Axios for HTTP requests

/**
 * @returns {Promise}
 */
export function fetchCategories() { // fetch categories from API
    // return axios.get('/api/categories'); // return axios promise

    // For demonstration purposes, we return a resolved promise with categories from twig as symfony render front.
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                'hydra:member': window.categories, // fake response similar to Axios
            },
        });
        reject(new Error('Failed to fetch categories')); // Simulate an error case
    });
}
