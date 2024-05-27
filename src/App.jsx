import { useState } from "react";
import styles from "./App.module.css";
import { recipes } from "./components/data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/CookBook/Cookbook";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  const { name, ingredients, description, img } = selectedRecipe;

  return (
    <>
      <div className={styles.box}>
        <List
          recipes={recipes}
          onSelectRecipe={(id) => setSelectedRecipeId(id)}
        />
        <Cookbook
          name={name}
          ingredients={ingredients}
          description={description}
          img={img}
        />
      </div>
    </>
  );
}

export default App;
