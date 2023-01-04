import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../passwordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordList: [],
  }

  deletePassword = passwordId => {
    const {passwordList} = this.state
    this.setState({
      passwordList: passwordList.filter(password => password.id !== passwordId),
    })
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  onChangeWebsiteInput = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onChangeUserNameInput = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordList,
    } = this.state
    return (
      <div className="password-container">
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
          <div className="main-container">
            <div className="input-box">
              <h1 className="add-pass-heading"> Add New Password</h1>
              <div className="input-header">
                <form type="submit" onClick={this.onAddPassword}>
                  <div className="website-input-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="website-img"
                    />
                    <input
                      type="text"
                      placeholder="Enter Website"
                      className="website-input"
                      value={websiteInput}
                      onChange={this.onChangeWebsiteInput}
                    />
                  </div>
                  <div className="website-input-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="website-img"
                    />
                    <input
                      type="text"
                      placeholder="Enter Username"
                      className="website-input"
                      value={usernameInput}
                      onChange={this.onChangeUserNameInput}
                    />
                  </div>
                  <div className="website-input-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="website-img"
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="website-input"
                      value={passwordInput}
                      onChange={this.onChangePasswordInput}
                    />
                  </div>
                  <div className="button-add">
                    <button type="submit" className="add-button">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="person-img"
            />
          </div>
          <div className="bottom-container">
            <div className="your-password-container">
              <h1 className="para"> Your Passwords </h1>
              <p className="span-text">{passwordList.length}</p>
              <div>
                <input
                  type="search"
                  placeholder="Search"
                  className="serach-box"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
              </div>
            </div>
            <hr />
            <div className="show-pass-sec">
              <input type="checkbox" id="showPassword" />
              <label htmlFor="showPassword" className="label">
                Show passwords
              </label>
            </div>
            <div className="img-2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-image"
              />
              <p>No Passwords</p>
            </div>
            <ul>
              {passwordList.map(eachPassword => (
                <PasswordItem
                  key={eachPassword.id}
                  passwordDetails={eachPassword}
                  deletePassword={this.deletePassword}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
