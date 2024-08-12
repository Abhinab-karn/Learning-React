import "bootstrap/dist/css/bootstrap.min.css";
import viteLogo from "/vite.svg";
import "./App.css";
import FoodIteams from "./components/FoodIteams";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  let foodIteams = [];
  // let foodIteams = [
  //   "Rice",
  //   "Dal",
  //   "Green Vegetabel",
  //   "Roti",
  //   "Salad",
  //   "Milk",
  //   "Sabzi",
  // ];

  return (
    <>
      <h1>Healthy Foods</h1>

      <ErrorMessage foodItm={foodIteams}></ErrorMessage>
      <FoodIteams foodItm={foodIteams}></FoodIteams>
    </>
  );
}

export default App;
