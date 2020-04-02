import React from "react";
import { JepContext } from "./Jeopardy";
import { Link, useRouteMatch } from "react-router-dom";
import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";

const JeopardyDisplay = props => {
  const { jepData } = React.useContext(JepContext);

  const routes = jepData.categories.map(value =>
    value
      .split(" ")
      .join("")
      .replace("?", "")
  );
  // console.log(routes);

  const category1Match = useRouteMatch({ path: `/${routes[0]}` });
  const category2Match = useRouteMatch({ path: `/${routes[1]}` });
  const catggory3Match = useRouteMatch({ path: `/${routes[2]}` });

  const categories = jepData.categories.map((value, index) => {
    return (
      <h5 key={index}>
        <Link to={`/${value}`.split(" ").join("")}>{value}</Link>
      </h5>
    );
  });
  return (
    <React.Fragment>
      {/* {console.log(jepData)} */}
      <h1>Jeopardy</h1>
      <h3>Score: {jepData.score}</h3>
      <h3>Categories</h3>
      {categories}
      {category1Match && <Category1 routes={routes} />}
      {category2Match && <Category2 routes={routes} />}
      {catggory3Match && <Category3 routes={routes} />}
    </React.Fragment>
  );
};

export default JeopardyDisplay;
