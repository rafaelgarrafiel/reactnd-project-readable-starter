import {
    ADD_COMMENT,
    FETCH_COMMENTS_POSTS,
    VOTE_COMMENT_UP_DOWN,
    EDIT_COMMENT_ID,
    DELETE_COMMENT_ID
} from '../actions/Comment'

const initialState = {
    status: 'view',
    comments: []
}

export const Comment = (state = initialState, action) => {

    const { parentId, author, body, comments, id, comment } = action

    switch ( action.type ) {

        case ADD_COMMENT :
            return { 
                ...state,
                comments: [...state.comments, {
                    parentId: parentId,
                    author: author,
                    body: body,
                    up:0,
                    down:0
                  }]
            }

        case FETCH_COMMENTS_POSTS :
            return { 
                ...state,
                comments: comments
            }

        case EDIT_COMMENT_ID :
            return { 
                ...state,
                comments: state.comments.map( (item) => {
                    if(item.id !== id) {
                        return item
                    }
                    return {
                        ...item,
                        'body':body
                    };   
                })
            }

        case VOTE_COMMENT_UP_DOWN :
            return { 
                ...state,
                comments: state.comments.map( (item) => {
                    if(item.id !== comment.id) {
                        return item
                    }
                    return {
                        ...item,
                        'voteScore':comment.voteScore
                    };   
                })
            }

        case DELETE_COMMENT_ID :
            return { 
                ...state,
                comments: state.comments.filter(com => com.id !== comment.id)
            }

        default :
            return state
    }
}