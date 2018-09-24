import {
    FETCH_POSTS,
    ADD_POST,
    FETCH_POST_ID,
    VOTE_POST_UP_DOWN,
    EDIT_POST_ID,
    DELETE_POST_ID,
    SORT_POSTS
} from '../actions/Post'

const initialState = {
    status: 'view',
    sortBy: false,
    posts: [],
    post: null
}
export const Post = (state = initialState, action) => {
    
    const { author, category, title, body, posts, post } = action

    switch ( action.type ) {
        case FETCH_POSTS :
            return { 
                ...state,
                posts: posts
            }
        case ADD_POST :
            return { 
                ...state,
                posts: [...state.posts, {
                    author: author,
                    title: title,
                    category: category,
                    body: body,
                    up:0,
                    down:0,
                    comments:[]
                  }]
            }
        case FETCH_POST_ID :
            return { 
                ...state,
                post: post
            }
        case VOTE_POST_UP_DOWN :
            return { 
                ...state,
                post: post,
                posts: state.posts.map( (item) => {
                    if(item.id !== post.id) {
                        return item
                    }
                    return {
                        ...item,
                        'voteScore':post.voteScore
                    };   
                })
            }
        case EDIT_POST_ID :
            return { 
                ...state,
                post: {
                    ...state,
                    title: title,
                    body: body
                }
            }
        case DELETE_POST_ID :
            return { 
                ...state,
                posts: posts
            }
            
        case SORT_POSTS :
            return { 
                ...state,
                posts: posts
            }
        default :
            return state
    }
}
