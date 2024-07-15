import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const getTodo = ()=>{
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos):[]
  }
  const [todo, setTodo] = useState(getTodo)
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleAddTodo = () => {
    
    setTodo((prev) => [...prev, value]);
    setValue("");
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodo(updatedTodos);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-2 w-[300px] border-2 bg-gray-300"
          placeholder="Write your todo"
        />
        <button
          onClick={handleAddTodo}
          className="p-2 bg-green-500 font-serif hover:bg-green-300"
        >
          Todo
        </button>
        <div>
          {todo.map((todo, index) => (
            <div key={index} className="mt-3 flex items-center justify-between">
              <h1 className="text-2xl mt-3 text-gray-600">{todo}</h1>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="text-white p-2 bg-red-500 hover:bg-red-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
