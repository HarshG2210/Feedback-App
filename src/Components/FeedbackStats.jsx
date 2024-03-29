import React, { useContext } from "react";

import FeedbackContext from "./context/FeedbackContext";

// import propTypes from "prop-typesF";

function FeedbackStats() {
// { feedback }
  const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback?.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? "0" : average}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedback: propTypes.array.isRequired,
// };

export default FeedbackStats;
