import { useState } from 'react';

import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results';

function App() {

  
const [inputValues, setInputValues] = useState({
  initialInvestment: 10000,
  annualInvestment: 200,
  expectedReturn: 7,
  duration: 12
})


function handleInputChange(inputIdentifier, newValue) {

  setInputValues(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: newValue
      };
  })
}




  return (
    <>
    <Header />
    <UserInput onChangeInput={handleInputChange} userInput={inputValues} />
    <Results userInput={inputValues} />
    </>
  )
}

export default App
