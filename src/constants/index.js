export const BASE_URL = 'https://64b56a16f3dbab5a95c74858.mockapi.io';
export const API_URLS = {
    PRODUCTS: {
        url: `${BASE_URL}/products`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    },
    CATEGORIES: {
        url: `${BASE_URL}/categories`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }
}