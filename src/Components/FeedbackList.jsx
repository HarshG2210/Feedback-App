import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";

import FeedbackContext from "./context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

// import propTypes from "prop-types";

function FeedbackList() {
//   {
//   feedback,
//   handleDelete,
// }
  const { feedback } = useContext(FeedbackContext);
  // console.log("feedback", feedback);
  if (!feedback || feedback.length === 0) {
    return <div>No Feedback Data</div>;
  }
  return (
    <div className="feedback-List">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                feedback={item}
                // handleDelete={handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
      {/* {feedback.map((item) => {
        return (
          <FeedbackItem
            key={item.id}
            feedback={item}
            handleDelete={handleDelete}
          />
        );
      })} */}
    </div>
  );
}
// FeedbackList.propTypes = {
//   feedback: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.number.isRequired,
//       text: propTypes.string.isRequired,
//       rating: propTypes.number.isRequired,
//     })
//   ),
// };
export default FeedbackList;
