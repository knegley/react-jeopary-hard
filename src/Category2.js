import React from "react";
import { JepContext } from "./Jeopardy";
import { Link, useRouteMatch } from "react-router-dom";
import AnswerChecker from "./AnswerChecker";

const Category2 = ({ routes }) => {
  const { jepData } = React.useContext(JepContext);
  //   console.log(routes[1]);

  const question0Match = useRouteMatch({ path: `/${routes[1]}/0` });
  const question1Match = useRouteMatch({ path: `/${routes[1]}/1` });
  const question2Match = useRouteMatch({ path: `/${routes[1]}/2` });
  const question3Match = useRouteMatch({ path: `/${routes[1]}/3` });
  const question4Match = useRouteMatch({ path: `/${routes[1]}/4` });

  const questionValues = jepData.questionList[1]
    .slice(0, 5)
    .map((value, index) => {
      return (
        <div key={value.id}>
          <Link to={`/${routes[1]}/${index}`}>{value.value}</Link>
        </div>
      );
    });

  return (
    <React.Fragment>
      <h5>Category 2</h5>
      <h6>{jepData.categories[1]}</h6>
      {questionValues}
      {question0Match && (
        <div>
          <br />
          <div>Question</div>
          <br />
          {jepData.questionList[1][0].question}
          <br />
          {<AnswerChecker question={jepData.questionList[1][0]} />}
        </div>
      )}
      {question1Match && (
        <div>
          <br />
          <div>Question</div>
          <br />
          {jepData.questionList[1][1].question}
          <br />
          {<AnswerChecker question={jepData.questionList[1][1]} />}
        </div>
      )}
      {question2Match && (
        <div>
          <br />
          <div>Question</div>
          <br />
          {jepData.questionList[1][2].question}
          <br />
          {<AnswerChecker question={jepData.questionList[1][2]} />}
        </div>
      )}
      {question3Match && (
        <div>
          <br />
          <div>Question</div>
          <br />
          {jepData.questionList[1][3].question}
          <br />
          {<AnswerChecker question={jepData.questionList[1][3]} />}
        </div>
      )}
      {question4Match && (
        <div>
          <br />
          <div>Question</div>
          <br />
          {jepData.questionList[1][4].question}
          <br />
          {<AnswerChecker question={jepData.questionList[1][4]} />}
        </div>
      )}
    </React.Fragment>
  );
};

export default Category2;
