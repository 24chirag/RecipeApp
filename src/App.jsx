import MainPage from "./components/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MealInfo from "./components/MealInfo";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealId" element={<MealInfo />} />
      </Routes>
    </>
  );
}

export default App;
