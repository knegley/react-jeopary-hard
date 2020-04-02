import React from "react";
import { JepContext, SCORE } from "./Jeopardy";

const AnswerChecker = ({ question }) => {
  const { jepData, dispatch } = React.useContext(JepContext);
  // const handleChange = event => {
  //   console.log(event.target.value);
  //   return event.target.value;
  // };

  console.log(question);

  const validate = input => {
    console.log(jepData);
    console.log(input);
    console.log(jepData.questionList);

    let condenser = input
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, "")
      .split(" ")
      .join("");

    console.log(condenser);
    return condenser;
  };

  const handleClick = _ => {
    let input = document.querySelector("#submission").value;
    document.querySelector("#submitButton").disabled = true;
    let value = question.value;
    console.log(value);

    document.querySelector("#userAnswer").textContent = input;
    document.querySelector("#actualAnswer").textContent = question.answer;
    document.querySelector("#submission").value = "";

    validate(input);
    console.log(question);
    const isCorrect = validate(input) === validate(question.answer);
    isCorrect
      ? dispatch({ type: SCORE, payload: value })
      : dispatch({ type: SCORE, payload: -value });
  };

  return (
    <React.Fragment>
      <br />
      <input
        type="text"
        id="submission"
        autoFocus
        placeholder="type answer here"
      />
      <input
        type="button"
        id="submitButton"
        value="submit"
        onClick={handleClick}
      />
      <br />
      <div>Your Answer</div>
      <br />
      <div id="userAnswer"></div>
      <br />
      <div>Actual Answer</div>
      <br />
      <div id="actualAnswer" />
    </React.Fragment>
  );
};

export default AnswerChecker;
