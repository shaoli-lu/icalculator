import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import HelpModal from './components/HelpModal.jsx';

function App() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 0,
    expectedReturn: 10.3,
    duration: 30,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  function handleOpenHelp() {
    setIsHelpOpen(true);
  }

  function handleCloseHelp() {
    setIsHelpOpen(false);
  }

  return (
    <>
      {isHelpOpen && <HelpModal onClose={handleCloseHelp} />}
      <Header onHelp={handleOpenHelp} />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
