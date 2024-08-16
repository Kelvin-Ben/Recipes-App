import { AllRecipes } from "./features/allRecipes/AllRecipes.jsx";
import { SearchTerm } from "./features/searchTerm/SearchTerm.jsx";
import FavoriteRecipes from "./features/favoriteRecipes/FavoriteRecipes.jsx";

function App(props) {
  const { state, dispatch } = props; // props from the store

  const visibleAllRecipes = getFilteredRecipes(
    state.allRecipes,
    state.searchTerm
  );
  const visibleFavoriteRecipes = getFilteredRecipes(
    state.favoriteRecipes,
    state.searchTerm
  );

  return (
    <main>
      <section>
        <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes
          favoriteRecipes={visibleFavoriteRecipes}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes allRecipes={visibleAllRecipes} dispatch={dispatch} />
      </section>
    </main>
  );
}

function getFilteredRecipes(recipes, searchTerm) {
  searchTerm = typeof searchTerm === "string" ? searchTerm : "";
  return recipes.filter((recipe) => {
    const recipeName = typeof recipe.name === "string" ? recipe.name : "";
    return recipeName.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

export default App;
