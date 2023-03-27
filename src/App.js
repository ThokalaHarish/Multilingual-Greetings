import {Component} from 'react'

import Greetings from './Components/Greetings'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {isActive: languageGreetingsList[0].id}

  onClickButton = id => {
    this.setState({isActive: id})
  }

  getDisplayImage = () => {
    const {isActive} = this.state

    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(eachImage => eachImage.id === isActive)
    ]

    return <img src={imageUrl} alt={imageAltText} className="language-image" />
  }

  render() {
    const {isActive} = this.state
    return (
      <div className="app-container">
        <div className="languageContainer">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="buttons-list">
            {languageGreetingsList.map(eachLanguage => (
              <Greetings
                key={eachLanguage.id}
                eachLanguageDetails={eachLanguage}
                isActiveLanguage={eachLanguage.id === isActive}
                onClickButton={this.onClickButton}
              />
            ))}
          </ul>
        </div>
        {this.getDisplayImage()}
      </div>
    )
  }
}
export default App
