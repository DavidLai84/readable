import { API_BASE_URL, API_AUTHORIZATION_HEADER } from '../.env'

function generateUrl(route) {
  const baseUrl = API_BASE_URL.replace(/\/+$/, '')
  route = route.replace(/^\//, '')

  return `${baseUrl}/${route}`
}

// Get all posts
export function fetchPosts() {
  const url = generateUrl('posts')
  
  return fetch(url, {
    headers: { Authorization: API_AUTHORIZATION_HEADER },
    credentials: 'include',
  }).then(res => res.json())
}

// Get all categories
export function fetchCategories() {
  const url = generateUrl('categories')

  return fetch(url, {
    headers: { Authorization: API_AUTHORIZATION_HEADER },
    credentials: 'include',
  }).then(res => res.json())
}

// Get the posts of category
export function fetchPostsByCategory(categoryId) {
  const url = generateUrl(`${categoryId}/posts`)

  return fetch(url, {
    headers: { Authorization: API_AUTHORIZATION_HEADER },
    credentials: 'include',
  }).then(res => res.json())
}

// Store new post
export function createPost({ id, timestamp, title, body, author, category }) {
  const url = generateUrl(`posts`)
  //console.log('createPost',id+'|'+timestamp+'|'+title+'|'+body+'|'+author+'|'+category);
  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      id,
      category,
      author,
      title,
      body,
      timestamp,
    }),
  }).then(res => res.json())
}

// Get the details of post wiht id
export function fetchPost(id) {
  const url = generateUrl(`posts/${id}`)

  return fetch(url, { headers: {
      Authorization: API_AUTHORIZATION_HEADER
    },
      credentials: 'include',
    })
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }

      return res
    })
    .then(res => res.json())
}

// Upvote post
export function upvotePost(id) {
  const url = generateUrl(`posts/${id}`)

  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      option: 'upVote',
    }),
  }).then(res => res.json())
}

// Downvote post
export function downvotePost(id) {
  const url = generateUrl(`posts/${id}`)

  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      option: 'downVote',
    }),
  }).then(res => res.json())
}

// Update post with id
export function updatePost({ id, title, body }) {
  const url = generateUrl(`posts/${id}`)

  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify({
      title,
      body,
    }),
  }).then(res => res.json())
}

// Delete post with id
export function deletePost(id) {
  const url = generateUrl(`posts/${id}`)
  
  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
    method: 'DELETE',
  }).then(res => res.text())
}

// Get comments with id
export function fetchCommentsByPostId(id) {
  const url = generateUrl(`posts/${id}/comments`)

  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
  }).then(res => res.json())
}

// Store new comment
export function createComment(postId, { id, author, body, timestamp }) {
  const url = generateUrl(`comments`)
  //console.log('createComment',postId+'|'+id+'|'+author+'|'+body+'|'+timestamp);
  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      parentId: postId,
      id,
      author,
      body,
      timestamp,
    }),
  }).then(res => res.json())
}

// Upvote comment
export function upvoteComment(id) {
  const url = generateUrl(`comments/${id}`)

  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      option: 'upVote',
    }),
  }).then(res => res.json())
}

// Downvote comment
export function downvoteComment(id) {
  const url = generateUrl(`comments/${id}`)

  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      option: 'downVote',
    }),
  }).then(res => res.json())
}

// Update comment with id
export function updateComment(id, { timestamp, body }) {
  const url = generateUrl(`comments/${id}`)

  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify({
      body,
      timestamp,
    }),
  }).then(res => res.json())
}

// Delete comment with id
export function deleteComment(id) {
  const url = generateUrl(`comments/${id}`)

  return fetch(url, {
    headers: {
      Authorization: API_AUTHORIZATION_HEADER,
      'Content-type': 'application/json',
    },
    credentials: 'include',
    method: 'DELETE',
  }).then(res => res.json())
}