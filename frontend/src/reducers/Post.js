import {
    ADD_POST,
    FETCH_POSTS,
    UP_POST,
    DOWN_POST
} from '../actions/Post'

const initialState = {
    posts: []
}

export const Post = (state = initialState, action) => {
    
    const { author, category, title, msg, key, up, down } = action
    // console.log(action)

    switch ( action.type ) {
        case ADD_POST :
            return { 
                ...state,
                posts: [...state.posts, {
                    author: author,
                    title: title,
                    category: category,
                    msg: msg,
                    up:0,
                    down:0,
                    comments:[]
                  }]
            }

        case FETCH_POSTS :
            return {}

        case UP_POST :

            return { 
                ...state,
                posts: state.posts.map( (item, index) => {
                    if(index !== key) {
                        return item
                    }
                    return {
                        ...item,
                        'up':up
                    };   
                })
            }

        case DOWN_POST :
        
            return { 
                ...state,
                posts: state.posts.map( (item, index) => {
                    if(index !== key) {
                        return item
                    }
                    return {
                        ...item,
                        'down':down
                    };   
                })
            }

        default :
            return state
    }
}
