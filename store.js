import { configureStore } from "@reduxjs/toolkit";

import { allRecipesReducer } from "./src/features/allRecipes/allRecipesSlice";
import { searchTermReducer } from "./src/features/searchTerm/searchTermSlice";
import { favoriteRecipeReducer } from "./src/features/favoriteRecipes/favoriteRecipeSlice";

export const store = configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipeReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
  },
});
