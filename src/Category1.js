import React from "react";
import { JepContext } from "./Jeopardy";
import { Link, useRouteMatch } from "react-router-dom";

const Category1 = ({ routes }) => {
  const { jepData } = React.useContext(JepContext);
  //   console.log(routes[0]);

  const question0Match = useRouteMatch({ path: `/${routes[0]}/0` });
  const question1Match = useRouteMatch({ path: `/${routes[0]}/1` });
  const question2Match = useRouteMatch({ path: `/${routes[0]}/2` });
  const question3Match = useRouteMatch({ path: `/${routes[0]}/3` });
  const question4Match = useRouteMatch({ path: `/${routes[0]}/4` });

  const questionValues = jepData.questionList[0]
    .slice(0, 5)
    .map((value, index) => {
      return (
        <div key={value.id}>
          <Link to={`/${routes[0]}/${index}`}>{value.value}</Link>
        </div>
      );
    });

  const inputBox = (
    <>
      <input type="text" />
      <input type="button" value="Submit" />
    </>
  );

  return (
    <React.Fragment>
      <h5>Category 1</h5>
      <h6>{jepData.categories[0]}</h6>
      {questionValues}
      {question0Match && (
        <div>
          {jepData.questionList[0][0].question}
          <p>{inputBox}</p>
        </div>
      )}
      {question1Match && (
        <div>
          {jepData.questionList[0][1].question}
          <p>{inputBox}</p>
        </div>
      )}
      {question2Match && (
        <div>
          {jepData.questionList[0][2].question}
          <p>{inputBox}</p>
        </div>
      )}
      {question3Match && (
        <div>
          {jepData.questionList[0][3].question}
          <p>{inputBox}</p>
        </div>
      )}
      {question4Match && (
        <div>
          {jepData.questionList[0][4].question}
          <p>{inputBox}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Category1;
