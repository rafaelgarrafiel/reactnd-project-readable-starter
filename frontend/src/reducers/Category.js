import {
    FETCH_CATEGORIES,
    FETCH_CATEGORIES_POSTS
} from '../actions/Category'

const initialState = {
    categories: []
}

export const Category = (state = initialState, action) => {

    const { categories } = action

    switch ( action.type ) {

        case FETCH_CATEGORIES :
            return categories

        case FETCH_CATEGORIES_POSTS :
            return categories

        default :
            return state
    }
}