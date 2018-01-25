export function productsJson(state = [], action) {
    switch (action.type) {
        case 'CLEAR_PRODUCTS_JSON':
            return action.productsJson;
        case 'GETTING_PRODUCTS_JSON_SUCCESS':
            // return productsJsonData;
        default:
            return state;
    }
}
export function usersJson(state = [], action) {
    switch (action.type) {
        case 'CLEAR_USERS_JSON':
            return action.usersJson;
        case 'GETTING_USERS_JSON_SUCCESS':
            // return usersJsonData;
        default:
            return state;
    }
}

export function data(state = [], action) {
    switch (action.type) {
        case 'CLEAR_DATA':
            return action.data;
        case 'GETTING_DATA_SUCCESS':
            // return userDummyData;
        default:
            return state;
    }
}

