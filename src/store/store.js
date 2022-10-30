import { compose, applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
// import logger from "redux-logger";

const loggerMiddleware = store => next => action => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state:", store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhances = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhances);
