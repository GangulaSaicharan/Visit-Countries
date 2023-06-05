import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, deleteVisitCountry} = props
  const {name, imageUrl, id} = visitedCountryDetails

  const onRemoveCountry = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="visited-country-list-item">
      <div className="visited-country-container">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <div className="details-section">
          <p className="visited-country-title">{name}</p>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCountry}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
