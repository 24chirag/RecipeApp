import React from "react";
import { NavLink } from "react-router-dom";

function MealCard({ detail }) {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={detail.strMealThumb} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{detail.strMeal}</h5>
          <p class="card-text">cousine type : {detail.strArea}</p>
          <NavLink to={`/${detail.idMeal}`}>
            <button class="btn btn-primary">Get Recipe</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MealCard;
