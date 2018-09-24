import * as API from '../utils/api';

export const ADD_COMMENT = 'ADD_COMMENT'
export const FETCH_COMMENT_ID = 'FETCH_COMMENT_ID'
export const VOTE_COMMENT_UP_DOWN = 'VOTE_COMMENT_UP_DOWN'
export const EDIT_COMMENT_ID = 'EDIT_COMMENT'
export const DELETE_COMMENT_ID = 'DELETE_COMMENT_ID'
export const FETCH_COMMENTS_POSTS = 'FETCH_COMMENTS_POSTS'

//POST /comments
export const addComment = ({id, timestamp, body, author, parentId}) => ({
    type: ADD_COMMENT,
    id,
    timestamp,
    body,
    author,
    parentId
});

//GET /comments/:id
export const fetchCommentId = comment => ({
    type: FETCH_COMMENT_ID,
    comment
});

//POST /comments/:id
export const voteCommentUpDown = (comment) => ({
    type: VOTE_COMMENT_UP_DOWN,
    comment
})

//PUT /comments/:id
export const editCommentId = ({id, body}) => ({
    type: EDIT_COMMENT_ID,
    id,
    body
})

//GET /posts/:id/comments
export const fetchCommentsPosts = (comments) => ({
    type: FETCH_COMMENTS_POSTS,
    comments
})

export const deleteCommentId = comment => ({
    type: DELETE_COMMENT_ID,
    comment
})

export const createComment = ({ id, timestamp, body, author, parentId}) => dispatch => (
    API
      .createComment({ id: id, timestamp: timestamp, body: body, author: author, parentId: parentId})
      .then(post => dispatch(addComment(post)))
);

export const getPostComments = (id) => dispatch => (
    API
      .getPostComments(id)
      .then(comments => dispatch(fetchCommentsPosts(comments)))
);

export const voteComment = ({id, option}) => dispatch => (
    API
      .voteComment({id:id, option:option})
      .then(comment => dispatch(voteCommentUpDown(comment)))
);

export const editComment = ({id, title, body}) => dispatch => (
    API
      .editComment({id, title, body})
      .then(post => dispatch(editCommentId({id, body})))
);

export const deleteComment = (id) => dispatch => (
    API
      .deleteComment(id)
      .then(comment => dispatch(deleteCommentId(comment)))
);
