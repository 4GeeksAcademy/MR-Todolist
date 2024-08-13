import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";


const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState('');
  
	const handleChange = (event) => {
	  setInputValue(event.target.value);
	};
  
	const handleKeyPress = (event) => {
	  if (event.key === 'Enter') {
		validateInput();
	  }
	};
  
	const validateInput = () => {
	  if (inputValue.trim() === "") {
		alert("La tarea no puede estar vacía");
	  } else {
		setTasks([...tasks, inputValue.trim()]);
		setInputValue('');
	  }
	};
  
	const handleDelete = (index) => {
	  setTasks(tasks.filter((_, i) => i !== index));
	};
  
	return (
	  <div className="text-center">
		<h1 class="display-1">TODOlist</h1>
		<div className="card mt-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
		  <div className="card-body">
			<input
			  type="text"
			  value={inputValue}
			  onChange={handleChange}
			  onKeyDown={handleKeyPress}
			  placeholder="Añadir tarea..."
			  className="form-control mb-3"
			/>
		
			<ul className="list-group list-group-flush">
			  {tasks.length === 0 ? (
				<li className="list-group-item">No hay tareas, añadir tareas</li>
			  ) : (
				tasks.map((task, index) => (
				  <li
					key={index}
					className="list-group-item d-flex justify-content-between align-items-center task-item"
				  >
					{task}
					<button
					  className="delete-button btn btn-danger btn-sm"
					  onClick={() => handleDelete(index)}
					>
					<i class="fa-solid fa-trash"></i>
					</button>
				  </li>
				))
			  )}
			</ul>
		  </div>
		</div>
	  </div>
	);
  };
  
  
export default Home;
