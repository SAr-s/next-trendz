// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.push('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.setState
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPassword() {
    const {password} = this.state
    return (
      <div className="form-group">
        <div>
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
        </div>
        <input
          type="password"
          id="password"
          className="password-input"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  renderUserName() {
    const {username} = this.state
    return (
      <div className="form-group">
        <div>
          <label htmlFor="username" className="input-label">
            USERNAME
          </label>
        </div>
        <input
          type="text"
          id="username"
          className="username-input"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <div className="form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo"
            alt="website logo"
          />
          <form className="form-internal-container" onSubmit={this.submitForm}>
            <div className="username-container">{this.renderUserName()}</div>
            <div className="password-container">{this.renderPassword()}</div>

            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
