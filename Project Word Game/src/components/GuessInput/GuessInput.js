import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessInput({answer, guessResults, setGuessResults, setShowBanner}) {

  const [guess, setGuess] = React.useState('');
  const [inputDisable, setInputDisable] = React.useState(false);

  function guessFormHandler() {
    setGuess('');
    let correctAnswer = (guess === answer);
    let guessStatus = checkGuess(guess, answer);
    let newItem = {'id': crypto.randomUUID(), 'guess': guess, 'status': guessStatus, 'correct': correctAnswer}
    let newGuessResultList = [...guessResults, newItem];
    setGuessResults(newGuessResultList);

    if(correctAnswer) {
      setShowBanner({'show': true, 'type': 'happy', 'guessNumber': newGuessResultList.length})
      setInputDisable(true);
    }
    else if(newGuessResultList.length === 6) {
      setShowBanner({'show': true, 'type': 'sad', 'guessNumber': newGuessResultList.length})
      setInputDisable(true);
    }
  }

  return (
    <>
      <form className="guess-input-wrapper" 
        onSubmit={(event) => {
          event.preventDefault();
          console.log({'guess': guess});
          guessFormHandler();          
        }}>
        <label htmlFor="guess-input">Enter a guess:</label>
        <input id="guess-input" type="text" disabled={inputDisable} pattern="[a-zA-Z]{5,5}" value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase())
          }}
          />
      </form>
    </>
  );
}

export default GuessInput;
