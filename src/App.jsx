import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoIteams from "./components/TodoIteams";

function App() {
  const todoIteams = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Milk",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <>
      <AppName></AppName>

      <AppTodo></AppTodo>
      <TodoIteams newTodo={todoIteams}></TodoIteams>
    </>
  );
}

export default App;
