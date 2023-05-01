import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ guessNumber }) {
  return (
    <Banner type='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{guessNumber} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
