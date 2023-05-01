import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Guess from '../Guess/Guess';
import GuessInput from '../GuessInput'
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [showBanner, setShowBanner] = React.useState({'show': false, 'type': undefined, 'guessNumber': undefined});
  
  return (
    <>
      <Guess guessResults={guessResults} />
      <GuessInput
        answer={answer}
        guessResults={guessResults} 
        setGuessResults={setGuessResults} 
        showBanner={showBanner}
        setShowBanner={setShowBanner}
      />
      {showBanner.show && showBanner.type === 'happy' && (<WonBanner guessNumber={showBanner.guessNumber} />)}
      {showBanner.show && showBanner.type === 'sad' && (<LostBanner answer={answer} />)}
    </>
  );
}

export default Game;
