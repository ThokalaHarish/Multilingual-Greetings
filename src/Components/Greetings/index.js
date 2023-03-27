import './index.css'

const Greetings = props => {
  const {eachLanguageDetails, isActiveLanguage, onClickButton} = props
  const {id, buttonText} = eachLanguageDetails

  const onClickLanguageButton = () => {
    onClickButton(id)
  }

  const buttonBgColor = isActiveLanguage
    ? 'active languageButton'
    : 'languageButton'

  return (
    <li className="buttons">
      <button
        type="button"
        className={buttonBgColor}
        onClick={onClickLanguageButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Greetings
