import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGOREIS_ACTION_TYPES } from "./categories.types";

export const setCategories = categoriesArray => {
  return createAction(CATEGOREIS_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};
