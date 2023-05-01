import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import GuessResults from '../GuessResults/GuessResults';

function Guess({ guessResults, answer }) {
  const guessesLenght = NUM_OF_GUESSES_ALLOWED - guessResults.length;
  
  return (
    <>
      <div className="guess-results">
        <GuessResults guessResults={guessResults} answer={answer}/>
        {
          range(guessesLenght).map((rowIndex) => (
          <p className="guess" key={rowIndex}>
            {
              range(5).map((colIndex) => (
                <span className="cell" key={colIndex}></span>
              ))
            }
          </p>
          ))
        }
      </div>
    </>
  );
}

export default Guess;
