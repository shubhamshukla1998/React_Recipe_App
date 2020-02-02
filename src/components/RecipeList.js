import React from "react";

import Recipe from "./RecipeComp";

export default function RecipeList(props) {
  const { recipes } = props;
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center mb-3 ">
            <h1 className="text-slanted">RECIPE LIST</h1>
          </div>
        </div>
        <div className="row">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}
