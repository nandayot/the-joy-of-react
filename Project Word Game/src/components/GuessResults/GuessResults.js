import React from "react";
import { range } from "../../utils";

function GuessResults({ guessResults }) {
  return (
    <>
      {guessResults.map(({id, guess, status}) => (
        <p className="guess" key={id}>
          {
            range(5).map((colIndex) => (
            <span className={`cell ${status[colIndex].status}`} key={colIndex}>{guess[colIndex]}</span>
            ))
          }
        </p>
      ))}
    </>
  );
}

export default GuessResults;
