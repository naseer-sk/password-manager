import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchInput: '',
    passwordItems: [],
    checked: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangePasssword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }))
  }

  onSubmit = () => {
    this.setState(prevState => {
      const {passwordItems, website, username, password, checked} = prevState
      const newItem = {website, username, password, id: uuidv4()}
      return {
        website: '',
        username: '',
        password: '',
        passwordItems: [...passwordItems, newItem],
      }
    })
  }

  onDelete = id => {
    this.setState(prevState => ({
      passwordItems: prevState.passwordItems.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    const {username, password, website, searchInput, checked, passwordItems} =
      this.state

    console.log(password)

    const filteredItems = passwordItems.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-card">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="logo"
            alt="app logo"
          />
        </div>
        <div className="upper-card">
          <form className="inputs-card" onSubmit={this.handleSubmit}>
            <h1 className="main-heading">Add New Password</h1>
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="input-image"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="input-image"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="input-image"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePasssword}
                value={password}
              />
            </div>
            <button className="button" type="submit" onClick={this.onSubmit}>
              Add
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="password-img"
              alt="password manager"
            />
          </div>
        </div>
        <div className="lower-card">
          <div className="navbar">
            <h1 className="passwords-count">
              Your Passwords <p>{filteredItems.length}</p>
            </h1>
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="input-image"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-card">
            <input
              type="checkbox"
              className="input-check"
              id="myCheckbox"
              onChange={this.onChangeCheckbox}
            />
            <label htmlFor="myCheckbox" className="label-text">
              Show Passwords
            </label>
          </div>
          {filteredItems.length === 0 && (
            <div className="no-passwords-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="password-img"
              />
              <p className="main-heading">No Passwords</p>
            </div>
          )}
          {filteredItems.length !== 0 && (
            <ul className="password-items-card">
              {filteredItems.map(eachItem => (
                <PasswordItem
                  itemDetails={eachItem}
                  key={eachItem.id}
                  onDelete={this.onDelete}
                  isChecked={checked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
