import { allRecipesData } from "../../../data";

// action creator
export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};

const initialAllRecipes = [];
export const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch (action.type) {
    case "allRecipes/loadData":
      return action.payload;
    case "favoriteRecipes/addRecipe":
      return allRecipes.filter((recipe) => recipe.id !== action.payload.id); // the reducer is filtering out(removing) the recipe that has the same id as the one provided by the action.payload
    case "favoriteRecipes/removeRecipe":
      return [...allRecipes, action.payload];
    default:
      return allRecipes;
  }
};
