import './index.css'

const HistoryItem = props => {
  const {eachItemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItemDetails

  const onClickButton = () => {
    deleteItem(id)
  }
  return (
    <li className="List-items">
      <div className="list-container">
        <div className="listed">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="image" />
          <p className="heading">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <div data-testid="delete">
          <button type="button" className="button" onClick={onClickButton}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-button"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
