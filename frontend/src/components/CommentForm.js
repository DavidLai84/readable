import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'

class CommentForm extends Component {
  state = {
    username: '',
    body: '',
    missingUsername: true,
    missingBody: true,
  }

  onUsernameChanged = e => {
    const missingUsername = e.target.value === ''

    this.setState({
      ...this.state,
      username: e.target.value,
      missingUsername,
    })
  }
  onBodyChanged = e => {
    const missingBody = e.target.value === ''

    this.setState({
      ...this.state,
      body: e.target.value,
      missingBody,
    })
  }
  submit = () => {
    const { onSubmit } = this.props

    onSubmit({
      id: uuidv4(),
      timestamp: Date.now(),
      author: this.state.username,
      body: this.state.body,
    })

    this.reset()
  }
  reset = () => {
    this.form.reset()
  }
  render() {
    return (
      <div>
        <form
          ref={form => {
            this.form = form
          }}
        >
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Enter username..."
                onChange={this.onUsernameChanged}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-user" />
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Comment</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Enter comment..."
                onChange={this.onBodyChanged}
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                type="button"
                className="button is-link"
                onClick={this.submit}
                disabled={this.state.missingBody || this.state.missingUsername}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button type="reset" className="button is-text">
                Clear Form
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm