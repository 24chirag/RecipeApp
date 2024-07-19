import React, { useRef, useState } from "react";
import MealCard from "./MealCard";

function MainPage() {
  let [data, setData] = useState([]);
  let search = useRef();
  //   let [search, setSearch] = useState();
  const myfun = async (da) => {
    console.log(da);
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${da}`
    );

    const jsonData = await get.json();
    setData(jsonData.meals);
  };
  //   const handleInput = (e) => {
  //     if (e.key === " ") {
  //       setSearch(e.target.value);
  //     }
  //   };

  console.log(data);
  return (
    <>
      <div className="container-fluid">
        <div>
          <h1 className="text-center my-4 text-primary">Recipe App</h1>
          <form
            className="searchbar d-flex "
            style={{ width: "50%", marginTop: "50px", marginLeft: "350px" }}
          >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Enter your Dishes"
              aria-label="Search"
              ref={search}
            />
            <button
              onClick={(e) => {
                e.preventDefault();

                myfun(search.current.value);
                search.current.value = "";
              }}
              class="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "21px",
          justifyContent: "center",
          width: "90%",
          /* background-color: blueviolet; */
          margin: "auto",
          marginTop: "44px",
        }}
      >
        {data.length == 0 ? (
          <h2 class="featurette-heading fw-normal lh-1">
            Welcome to the <span class="text-primary">world of Cooking</span>
          </h2>
        ) : (
          data.map((item) => {
            return <MealCard detail={item} />;
          })
        )}
      </div>
    </>
  );
}

export default MainPage;
