import React from "react";
import { JepContext } from "./Jeopardy";
import { Link, useRouteMatch } from "react-router-dom";
import AnswerChecker from "./AnswerChecker";

const Category3 = ({ routes }) => {
  const { jepData } = React.useContext(JepContext);
  //   console.log(routes[2]);

  const question0Match = useRouteMatch({ path: `/${routes[2]}/0` });
  const question1Match = useRouteMatch({ path: `/${routes[2]}/1` });
  const question2Match = useRouteMatch({ path: `/${routes[2]}/2` });
  const question3Match = useRouteMatch({ path: `/${routes[2]}/3` });
  const question4Match = useRouteMatch({ path: `/${routes[2]}/4` });

  const questionValues = jepData.questionList[2]
    .slice(0, 5)
    .map((value, index) => {
      return (
        <div key={value.id}>
          <Link to={`/${routes[2]}/${index}`}>{value.value}</Link>
        </div>
      );
    });

  return (
    <React.Fragment>
      <h5>Category 3</h5>
      <h6>{jepData.categories[2]}</h6>
      {questionValues}

      {question0Match && (
        <div>
          {jepData.questionList[2][0].question}
          {<AnswerChecker question={jepData.questionList[2][0]} />}
        </div>
      )}
      {question1Match && (
        <div>
          {jepData.questionList[2][1].question}
          {<AnswerChecker question={jepData.questionList[2][1]} />}
        </div>
      )}
      {question2Match && (
        <div>
          {jepData.questionList[2][2].question}
          {<AnswerChecker question={jepData.questionList[2][2]} />}
        </div>
      )}
      {question3Match && (
        <div>
          {jepData.questionList[2][3].question}
          {<AnswerChecker question={jepData.questionList[2][3]} />}
        </div>
      )}
      {question4Match && (
        <div>
          {jepData.questionList[2][4].question}
          {<AnswerChecker question={jepData.questionList[2][4]} />}
        </div>
      )}
    </React.Fragment>
  );
};

export default Category3;
