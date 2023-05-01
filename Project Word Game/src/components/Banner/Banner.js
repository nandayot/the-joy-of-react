import React from "react";

function Banner({ showBanner, answer }) {
  function getBannerType() {
    if(showBanner.type === 'happy') {
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {showBanner.guessNumber} guesses</strong>.
          </p>
        </div>
      )
    } else {
      return(
        <div className="sad banner">
          <p>
            Sorry, the correct answer is
            <strong> {answer}</strong>.</p>
        </div>
      )
    }
  }
  return (getBannerType());
}

export default Banner;
