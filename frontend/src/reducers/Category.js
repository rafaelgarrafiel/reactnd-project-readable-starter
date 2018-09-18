import {
    RECEIVE_CATEGORIES,
    ADD_CATEGORY
} from '../actions/Category'

const initialState = {
    categories: []
}

export const Category = (state = initialState, action) => {

    const { categories, name, path } = action

    switch ( action.type ) {

        case RECEIVE_CATEGORIES :
            return { 
                ...state,
                categories: categories
            }

        case ADD_CATEGORY :
            return { 
                ...state,
                categories: [...state.categories, {
                    name: name,
                    path: path
                  }]
            }

        default :
            return state
    }
}