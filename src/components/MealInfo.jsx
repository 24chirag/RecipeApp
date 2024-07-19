import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

function MealInfo() {
  const { mealId } = useParams();
  let [da, setDa] = useState([]);

  const getinfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const jasonData = await get.json();
    if (da.length === 0) {
      setDa(jasonData.meals[0]);
    }
  };
  getinfo();
  console.log(da);

  return (
    <>
      <div class="row featurette" style={{ marginTop: "10%", padding: "50px" }}>
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">
            {da.strMeal}{" "}
            <span class="text-body-secondary">{da.strCategory}</span>
          </h2>
          <p class="lead">{da.strInstructions}</p>
        </div>
        <div class="col-md-5">
          <img
            src={da.strMealThumb}
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
          />
        </div>
      </div>
    </>
  );
}

export default MealInfo;
