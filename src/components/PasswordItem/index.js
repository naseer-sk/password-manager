import './index.css'

const PasswordItem = props => {
  const {itemDetails, onDelete, isChecked} = props
  const {website, username, password, id} = itemDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="item-card">
      <p className="website-logo">{website.charAt(0).toUpperCase()}</p>
      <div>
        <p className="text">{website}</p>
        <p className="text">{username}</p>
        <p className="text">
          {isChecked ? (
            password
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </p>
      </div>
      <button
        className="button-delete"
        data-testid="delete"
        type="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
