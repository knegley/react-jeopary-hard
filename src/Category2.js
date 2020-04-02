import React from "react";
import { JepContext } from "./Jeopardy";
import { Link, useRouteMatch } from "react-router-dom";

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

  const inputBox = (
    <>
      <input type="text" />
      <input type="button" value="Submit" />
    </>
  );

  return (
    <React.Fragment>
      <h5>Category 2</h5>
      <h6>{jepData.categories[1]}</h6>
      {questionValues}
      {question0Match && (
        <div>
          {jepData.questionList[1][0].question}
          <p>{inputBox}</p>
        </div>
      )}
      {question1Match && (
        <div>
          {jepData.questionList[1][1].question}
          <p>{inputBox}</p>
        </div>
      )}
      {question2Match && (
        <div>
          {jepData.questionList[1][2].question}
          {inputBox}
        </div>
      )}
      {question3Match && (
        <div>
          {jepData.questionList[1][3].question}
          {inputBox}
        </div>
      )}
      {question4Match && (
        <div>
          {jepData.questionList[1][4].question}
          {inputBox}
        </div>
      )}
    </React.Fragment>
  );
};

export default Category2;
