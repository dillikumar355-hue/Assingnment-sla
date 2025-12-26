import React, { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("5");
  const [agree, setAgree] = useState(false);

  const handleSubmit = () => {
    const data = { feedback, rating, agree };
    console.log("Feedback Data:", data);
  };

  return (
    <div>
      <h3>Feedback</h3>

      <textarea
        placeholder="Your feedback"
        onChange={(e) => setFeedback(e.target.value)}
      />

      <br /><br />

      <select onChange={(e) => setRating(e.target.value)}>
        <option value="5">5 - Excellent</option>
        <option value="4">4 - Good</option>
        <option value="3">3 - Average</option>
        <option value="2">2 - Poor</option>
        <option value="1">1 - Bad</option>
      </select>

      <br /><br />

      <label>
        <input
          type="checkbox"
          onChange={(e) => setAgree(e.target.checked)}
        />
        I agree to submit
      </label>

      <br /><br />

      <button onClick={handleSubmit}>Send Feedback</button>
    </div>
  );
}

export default FeedbackForm;