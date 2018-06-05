import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({ post, onUpvote, onDownvote, onDelete }) {
  return (
    <div
      className="card"
      style={{
        marginBottom: '22px',
      }}
    >
      <header className="card-header">
        <div
          className="card-header-title"
          style={{
            justifyContent: 'space-between',
          }}
        >
          <p>
            <i
              className="fa fa-sticky-note"
              style={{ color: '#000088'}}
            />&nbsp;
            [ <Link to={`/${post.category}`}>{post.category}</Link> ]
            &nbsp;
            <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
            &nbsp;&nbsp;
            <small>
            [ by: {post.author} ]
            &nbsp;|&nbsp;
            [ <Link to={`/${post.category}/${post.id}/edit`}
            >Edit
            </Link>
            &nbsp;|&nbsp;
            <a onClick={onDelete}>Delete</a> ]
            </small>
          </p>
          <div style={{ fontSize: '14px' }}>
            <p className="is-pulled-left">
              <i className="fa fa-comment" style={{ color: '#000088'}} />
              &nbsp;[ {post.commentCount} ]
            </p>
            <p
              className="is-pulled-right"
              style={{
                marginLeft: '12px',
              }}
            >
              <a style={{ color: '#000099' }} onClick={onDownvote}>
                <i className="fa fa-arrow-down" />
              </a>
              &nbsp;
              <i
                className="fa fa-heart"
                style={{
                  color:
                    post.voteScore === 0
                      ? 'gray'
                      : post.voteScore > 0 ? 'red' : 'black',
                }}
              />
              {post.voteScore}
              &nbsp;
              <a style={{ color: '#000099' }} onClick={onUpvote}>
                <i className="fa fa-arrow-up" />
              </a>
            </p>
          </div>
        </div>
      </header>
      <div className="card-content">
        <div className="content">{post.body}</div>
      </div>
    </div>
  )
}