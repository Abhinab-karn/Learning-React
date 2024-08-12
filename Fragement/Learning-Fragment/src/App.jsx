import "bootstrap/dist/css/bootstrap.min.css";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //let foodIteams = [];
  let foodIteams = ["Rice", "Dal", "Green Vegetabel", "Roti", "Salad", "Milk"];
  let emptyMessage =
    foodIteams.length === 0 ? <h3>I am still hungry</h3> : null;

  return (
    <>
      <h1>Healthy Foods</h1>
      {emptyMessage}
      <ul className="list-group">
        {foodIteams.map((iteam) => (
          <li className="list-group-item">{iteam}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
