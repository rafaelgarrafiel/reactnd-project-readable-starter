import * as API from '../utils/api';
export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'
export const FETCH_POST_ID = 'FETCH_POST_ID'
export const VOTE_POST_UP_DOWN = 'VOTE_POST_UP_DOWN'
export const EDIT_POST_ID = 'EDIT_POST_ID'
export const DELETE_POST_ID = 'DELETE_POST_ID'
export const SORT_POSTS = 'SORT_POSTS'

//GET /posts
export const fetchPosts = posts => ({
    type: FETCH_POSTS,
    posts
});

//POST /posts
export const addPost = ({ id, timestamp, title, body, author, category}) => ({
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
});

//GET /posts/:id
export const fetchPostId = post => ({
    type: FETCH_POST_ID,
    post
});


//POST /posts/:id
export const votePostUpDown = (post) => ({
    type: VOTE_POST_UP_DOWN,
    post
})

//PUT /posts/:id
export const editPostId = ({id, title, body}) => ({
    type: EDIT_POST_ID,
    id,
    title,
    body
})

//DELETE /posts/:id
export const deletePostId = (post) => ({
    type: DELETE_POST_ID,
    post
})

export const sortPosts = (posts) => ({
    type: SORT_POSTS,
    posts
});


export const getPosts = () => dispatch => (
    API
      .getPosts()
      .then(posts => dispatch(fetchPosts(posts)))
);

export const createPost = ({ id, timestamp, title, body, author, category}) => dispatch => (
    API
      .createPost({ id: id, timestamp: timestamp, title: title, body: body, author: author, category: category})
      .then(post => dispatch(addPost(post)))
);

export const getPostId = (id) => dispatch => (
    API
      .getPostId(id)
      .then(post => dispatch(fetchPostId(post)))
);

export const votePost = ({id, option}) => dispatch => (
    API
      .votePost({id:id, option:option})
      .then(post => dispatch(votePostUpDown(post)))
);

export const editPost = ({id, title, body}) => dispatch => (
    API
      .editPost({id, title, body})
      .then(post => dispatch(editPostId({id, title, body})))
);

export const deletePost = (id) => dispatch => (
    API
      .deletePost(id)
      .then(id => dispatch(deletePostId(id)))
);

export const sortAllPost = (value) => dispatch => {
    API
      .getPosts()
      .then((posts) => {
        if (value) {
          dispatch(sortPosts(posts.sort((a,b) => b.voteScore - a.voteScore)))
        } else {
          console.log("normal")
          dispatch(fetchPosts(posts))
        }
      })
};