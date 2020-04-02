import React from "react";
import { JepContext } from "./Jeopardy";
import { Link, useRouteMatch } from "react-router-dom";

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
  const inputBox = (
    <>
      <input type="text" />
      <input type="button" value="Submit" />
    </>
  );

  return (
    <React.Fragment>
      <h5>Category 3</h5>
      <h6>{jepData.categories[2]}</h6>
      {questionValues}

      {question0Match && (
        <div>
          {jepData.questionList[2][0].question}
          {inputBox}
        </div>
      )}
      {question1Match && (
        <div>
          {jepData.questionList[2][1].question}
          <p>{inputBox}</p>
        </div>
      )}
      {question2Match && (
        <div>
          {jepData.questionList[2][2].question}
          {inputBox}
        </div>
      )}
      {question3Match && (
        <div>
          {jepData.questionList[2][3].question}
          {inputBox}
        </div>
      )}
      {question4Match && (
        <div>
          {jepData.questionList[2][4].question}
          {inputBox}
        </div>
      )}
    </React.Fragment>
  );
};

export default Category3;
