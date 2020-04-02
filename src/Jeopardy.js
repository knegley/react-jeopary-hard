import React from "react";
import JeopardyDisplay from "./JeopardyDisplay";

export const JepContext = React.createContext();

const Jeopary = props => {
  const QUESTIONS = "QUESTIONS";
  const CATEGORIES = "CATEGORIES";

  const initialState = {
    categories: [],
    score: 0,
    questionList: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case CATEGORIES:
        return { ...state, categories: action.payload };
      case QUESTIONS:
        return { ...state, questionList: action.payload };

      default:
        return state;
    }
  };

  const [jepData, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    (async () => {
      const catURL = `https://jservice.kenzie.academy/api/categories?count=3`;
      const response = await fetch(catURL);
      const data = await response.json();

      const randomNumber = () => {
        return Math.floor(Math.random() * 40950);
      };

      let array = [];
      for (let i = 0; i < 3; i++) {
        array = [...array, data.categories[randomNumber()]];
      }

      dispatch(receiveList(array, CATEGORIES));

      // console.log(array);
      // let cat1 = array[0];
      // console.log(cat1.id);

      const cluesURL = `https://jservice.kenzie.academy/api/clues?category=`;

      const catQuestions = await Promise.all(
        array.map(async value => {
          // console.log(value.id);
          const response = await fetch(cluesURL + value.id);
          const data = await response.json();
          // console.log(data.clues);
          return data.clues;
        })
      );
      // console.log(catQuestions);
      dispatch(receiveList(catQuestions, QUESTIONS));
    })();
  }, []);

  const receiveList = (list, type) => {
    return {
      type: type,
      payload: list.map(value => {
        // console.log(value);
        return value?.title ?? value;
      })
    };
  };

  return (
    <JepContext.Provider value={{ jepData, dispatch }}>
      <JeopardyDisplay />
    </JepContext.Provider>
  );
};

export default Jeopary;
