export const ADD_POST = 'ADD_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const UP_POST = 'UP_POST'
export const DOWN_POST = 'DOWN_POST'

export const addPost = ({ author, category, title, msg}) => ({
    type: ADD_POST,
    author,
    category,
    title,
    msg
});

export const fetchPosts = posts => ({
    type: FETCH_POSTS,
    posts
});

export const upPost = ({ key, up }) => ({
    type: UP_POST,
    key,
    up
});

export const downPost = ({ key, down }) => ({
    type: DOWN_POST,
    key,
    down
});