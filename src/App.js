import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutIconLink from "./Components/AboutIconLink";
import AboutPage from "./Components/Pages/AboutPage";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import { FeedbackProvider } from "./Components/context/FeedbackContext";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";

// import { useState } from "react";

// import FeedbackData from "./Components/Data/FeedbackData";







// import { v4 as uuidv4 } from "uuid";

export default function App() {
//   const [feedback, setFeedback] = useState(FeedbackData);

//   const addFeedback = (newFeedback) => {
//     newFeedback.id = uuidv4();
//     // console.log("newFeedback", newFeedback);
//     setFeedback([newFeedback, ...feedback]);
//   };

//   const deleteFeedback = (id) => {
//     if (window.confirm("Are you sure you want to delete?")) {
//       setFeedback(feedback.filter((item) => item.id !== id));
//     }
//   };
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm 
                //   handleAdd={addFeedback} 
                  />
                  <FeedbackStats
                  //   feedback={feedback}
                  />
                  <FeedbackList
                    // feedback={feedback}
                    // handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
