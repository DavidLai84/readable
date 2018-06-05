import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import Post from './Post'
import {
  fetchPosts,
  upvotePost,
  downvotePost,
  deletePost
} from '../utils/api'
import {
  receivePosts,
  receivePost,
  postDeleted
} from '../actions'

class PostList extends Component {
  state = {
    sortBy: 'title',
  }
  componentDidMount() {
    const { dispatch } = this.props

    fetchPosts().then(posts => {
      dispatch(receivePosts(posts))
    })
  }
  upvotePost = post => {
    const { dispatch } = this.props

    upvotePost(post.id).then(post => {
      dispatch(receivePost(post))
    })
  }
  downvotePost = post => {
	const { dispatch } = this.props
	
    downvotePost(post.id).then(post => {
      dispatch(receivePost(post))
    })
  }
  deletePost = post => {
    const { dispatch } = this.props

    deletePost(post.id).then(response => {
      dispatch(postDeleted(post))
    })
  }
  sortChanged = e => {
    this.setState({
      sortBy: e.target.value,
    })
  }
  render() {
    const { posts } = this.props

    posts.sort(sortBy(this.state.sortBy))

    return (
      <div>
        <div className="container">
          <nav className="breadcrumb">
            <ul>
              <li className="is-active">
                <a>Home</a>
              </li>
            </ul>
          </nav>
        </div>

        <section className="section">
          <div className="container">
            <nav className="level" style={{ marginBottom: '1rem' }}>
              <div className="level-left">
                <div className="level-item">
                  <p className="level-item">
                    <Link className="button" to={`/create-post/`}>New</Link>
                  </p>
                  <p className="subtitle is-5">Sort by: &nbsp;</p>
                  <div className="field has-addons">
                    <span className="select">
                      <select onChange={this.sortChanged}>
                        <option value="title">Title</option>
                        <option value="-voteScore">Score</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <p className="subtitle is-5">
                    <strong>{posts.length}</strong>{' '}
                    {posts.length < 2 ? 'post' : 'posts'}
                  </p>
                </div>
              </div>
            </nav>
            {posts.map(post => (
              <Post
                key={post.id}
                post={post}
                onUpvote={() => this.upvotePost(post)}
                onDownvote={() => this.downvotePost(post)}
                onDelete={() => this.deletePost(post)}
              />
            ))}
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { posts } = state.postListReducer

  return {
    posts,
  }
}

export default connect(mapStateToProps)(PostList)