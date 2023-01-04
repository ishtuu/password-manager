import './index.css'

const PasswordItem = props => {
  const {passwordDetails} = props
  const {id, website, username, password} = passwordDetails
  const initial = website ? website[0].toUpperCase() : ''

  const onDeletePassword = () => {
    const {deletePassword} = props
    deletePassword(id)
  }

  return (
    <li className="list-password-container">
      <div className="password-list-container">
        <div>
          <p className="initial">{initial}</p>
          <div>
            <div className="username-time-container">
              <p className="website">{website}</p>
              <p className="username">{username}</p>
            </div>
            <p className="password">{password}</p>
          </div>
        </div>
        <button className="button" type="button" onClick={onDeletePassword}>
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
