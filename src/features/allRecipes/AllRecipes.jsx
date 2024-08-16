import React, { useEffect } from "react";

import { addRecipe } from "../favoriteRecipes/favoriteRecipeSlice.js";
import { loadData } from "./allRecipesSlice.js";

import { FavoriteButton } from "../../components/FavoriteButton.jsx";
import { Recipe } from "../../components/Recipe.jsx";

const favoriteIconURL =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg";

export const AllRecipes = (props) => {
  const { allRecipes, dispatch } = props;

  const onFirstRender = () => {
    dispatch(loadData());
  };
  useEffect(onFirstRender, []);

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
