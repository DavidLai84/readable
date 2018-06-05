export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const DELETE_POST = 'DELETE_POST'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const receivePost = post => ({
    type: RECEIVE_POST,
    post,
});

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts,
});

export const postDeleted = post => ({
    type: DELETE_POST,
    post,
});

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment,
});

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments,
});

export const commentDeleted = comment => ({
    type: DELETE_COMMENT,
    comment,
});