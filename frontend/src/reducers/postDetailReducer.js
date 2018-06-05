import {
  RECEIVE_POST,
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  DELETE_COMMENT,
} from '../actions/types'

const initialPostState = {
  post: {
    comments: [],
  },
}

function post(state = initialPostState, action) {
  switch (action.type) {
    case RECEIVE_POST:
      return {
        post: { ...action.post,
               comments: state.post.comments },
      }
    case RECEIVE_COMMENTS:
      return {
        post: { ...state.post,
               comments: action.comments },
      }
    case RECEIVE_COMMENT:
      let existsComment = false

      const newState = {
        post: {
          ...state.post,
          comments: state.post.comments.map(comment => {
            if (!existsComment && comment.id === action.comment.id) {
              existsComment = !existsComment

              return action.comment
            }

            return comment
          }),
        },
      }

      if (!existsComment) {
        ++newState.post.commentCount
        newState.post.comments.push(action.comment)
      }

      return newState
    case DELETE_COMMENT:
      const post = state.post
      --post.commentCount

      return {
        post: {
          ...post,
          comments: state.post.comments.filter(
            comment => comment.id !== action.comment.id,
          ),
        },
      }
    default:
      return state
  }
}

export default post