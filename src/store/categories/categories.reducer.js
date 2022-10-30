import { CATEGOREIS_ACTION_TYPES } from "./categories.types";

const CATEGORIES_INTITAL_STATE = {
  categories: []
};

export const categoriesReducer = (state = CATEGORIES_INTITAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGOREIS_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload
      };

    default:
      return state;
  }
};
