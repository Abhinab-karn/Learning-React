import TodoItem from "./TodoIteam";
import styles from "./TodoIteams.module.css";
const TodoIteams = ({ newTodo }) => {
  return (
    <div className={styles.itemsContainer}>
      {newTodo.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};
export default TodoIteams;
