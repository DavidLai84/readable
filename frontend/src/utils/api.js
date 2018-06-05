//import { UdacityAPI, Authorization } from '../.env'

const api = 'http://localhost:3001';
const Authorization = 'accessgranted'; //whatever-you-want

// Get all posts
export function fetchPosts() {
  const url = `${api}/posts`
  
  return fetch(url, {
    headers: { Authorization },
    
  }).then(res => res.json())
}

// Get all categories
export function fetchCategories() {
  const url = `${api}/categories`

  return fetch(url, {
    headers: { Authorization },
    
  }).then(res => res.json())
}

// Get the posts of category
export function fetchPostsByCategory(categoryId) {
  const url = `${api}/${categoryId}/posts`

  return fetch(url, {
    headers: { Authorization },
    
  }).then(res => res.json())
}

// Store new post
export function createPost({ id, timestamp, title, author, category, body }) {
  const url = `${api}/posts`
  //console.log('createPost',id+'|'+timestamp+'|'+title+'|'+author+'|'+category+'|'+body)
  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
    method: 'POST',
    body: JSON.stringify({
      id,
      timestamp,
      title,
      author,
      category,
      body,
    }),
  }).then(res => res.json())
}

// Get the details of post wiht id
export function fetchPost(id) {
  const url = `${api}/posts/${id}`

  return fetch(url, { headers: {
      Authorization
      },
      
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
  const url = `${api}/posts/${id}`

  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
    method: 'POST',
    body: JSON.stringify({
      option: 'upVote',
    }),
  }).then(res => res.json())
}

// Downvote post
export function downvotePost(id) {
  const url = `${api}/posts/${id}`

  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
    method: 'POST',
    body: JSON.stringify({
      option: 'downVote',
    }),
  }).then(res => res.json())
}

// Update post with id
export function updatePost({ id, title, body }) {
  const url = `${api}/posts/${id}`

  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
    method: 'PUT',
    body: JSON.stringify({
      title,
      body,
    }),
  }).then(res => res.json())
}

// Delete post with id
export function deletePost(id) {
  const url = `${api}/posts/${id}`
  
  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
    method: 'DELETE',
  }).then(res => res.text())
}

// Get comments with id
export function fetchCommentsByPostId(id) {
  const url = `${api}/posts/${id}/comments`
  
  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
  }).then(res => res.json())
}

// Store new comment
export function createComment(postId, { id, timestamp, author, body }) {
  const url = `${api}/comments`
  const parentId = postId
  console.log('createComment',postId+'|'+id+'|'+author+'|'+body+'|'+timestamp)
  //createComment 6ni6ok3ym7mf1p33lnez|575cfdca-9248-4bf4-97dc-6c2be8c7ba6c|username|comment|1528044072620
  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
    method: 'POST',
    body: JSON.stringify({
      parentId,
      id,
      timestamp,
      author,
      body,
    }),
  }).then(res => res.json())
}

// Upvote comment
export function upvoteComment(id) {
  const url = `${api}/comments/${id}`

  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
    method: 'POST',
    body: JSON.stringify({
      option: 'upVote',
    }),
  }).then(res => res.json())
}

// Downvote comment
export function downvoteComment(id) {
  const url = `${api}/comments/${id}`

  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
    method: 'POST',
    body: JSON.stringify({
      option: 'downVote',
    }),
  }).then(res => res.json())
}

// Update comment with id
export function updateComment(id, { timestamp, body }) {
  const url = `${api}/comments/${id}`

  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
    method: 'PUT',
    body: JSON.stringify({
      body,
      timestamp,
    }),
  }).then(res => res.json())
}

// Delete comment with id
export function deleteComment(id) {
  const url = `${api}/comments/${id}`

  return fetch(url, {
    headers: {
      Authorization,
      'Content-type': 'application/json',
    },
    
    method: 'DELETE',
  }).then(res => res.json())
}