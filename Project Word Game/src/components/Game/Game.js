import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Guess from '../Guess/Guess';
import GuessInput from '../GuessInput'
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessResults, setGuessResults] = React.useState([]);
  const [showBanner, setShowBanner] = React.useState({'show': false, 'type': undefined, 'guessNumber': undefined});
  const [inputDisable, setInputDisable] = React.useState(false);
  
  return (
    <>
      <Guess guessResults={guessResults} />
      <GuessInput
        answer={answer}
        guess={guess} 
        setGuess={setGuess}
        guessResults={guessResults} 
        setGuessResults={setGuessResults} 
        showBanner={showBanner}
        setShowBanner={setShowBanner}
        inputDisable={inputDisable}
        setInputDisable={setInputDisable}
      />
      {showBanner.show && (<Banner showBanner={showBanner} answer={answer} />)}
    </>
  );
}

export default Game;
