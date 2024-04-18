import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import About from './MyComponents/About';
import AddTodo from './MyComponents/AddTodo';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, description) => {
    console.log("Todo is added", title, description);
    let sn;
    if (todos.length === 0) {
      sn = 0;
    } else {
      sn = todos[todos.length - 1].sn + 1;
    }
    const myTodo = {
      sn: sn,
      title: title,
      description: description,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title='Kishor Todos list' searchbar={true} />
        <Routes>
          <Route path="/" element={<>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

























// // Importing necessary functions and components from React and other files
// import React, { useState, useEffect } from 'react'; // Importing React and necessary hooks
// import './App.css'; // Importing CSS file for styling
// import Header from './MyComponents/Header'; // Importing Header component
// import Todos from './MyComponents/Todos'; // Importing Todos component
// import Footer from './MyComponents/Footer'; // Importing Footer component
// import About from './MyComponents/About'; // Importing About component
// import AddTodo from './MyComponents/AddTodo'; // Importing AddTodo component
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing necessary routing components

// // Main function component for the entire application
// function App() {
//   // Initializing state variable for todos
//   let initTodo;
//   // Checking if todos exist in local storage
//   if (localStorage.getItem("todos") === null) {
//     // If not, initializing todos as an empty array
//     initTodo = [];
//   } else {
//     // If yes, retrieving todos from local storage and parsing into JavaScript object
//     initTodo = JSON.parse(localStorage.getItem("todos"));
//   }

//   // Function to handle deletion of todos
//   const onDelete = (todo) => {
//     // Logging the deletion action
//     console.log("I am on delete of todo", todo);
//     // Filtering out the todo to be deleted from todos array
//     setTodos(todos.filter((e) => e !== todo));
//     // Updating local storage to reflect the changes
//     localStorage.setItem("todos", JSON.stringify(todos));
//   };

//   // Function to add a new todo
//   const addTodo = (title, description) => {
//     // Logging the addition action
//     console.log("Todo is added", title, description);
//     let sn;
//     // Generating a serial number (sn) for the new todo
//     if (todos.length === 0) {
//       sn = 0;
//     } else {
//       sn = todos[todos.length - 1].sn + 1;
//     }
//     // Creating a new todo object
//     const myTodo = {
//       sn: sn,
//       title: title,
//       description: description,
//     };
//     // Updating todos state by adding the new todo
//     setTodos([...todos, myTodo]);
//     // Logging the new todo
//     console.log(myTodo);
//   };

//   // State management for todos using useState hook
//   const [todos, setTodos] = useState(initTodo);

//   // useEffect hook to synchronize todos state with local storage
//   useEffect(() => {
//     // Updating local storage whenever todos state changes
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   // JSX markup for rendering components
//   return (
//     <>
//       {/* Router component for handling client-side routing */}
//       <Router>
//         {/* Header component with title and searchbar props */}
//         <Header title='Kishor Todos list' searchbar={true} />

//         {/* Routes component to define different paths */}
//         <Routes>
//           {/* Route for home page */}
//           <Route path="/" element={<>
//             {/* AddTodo component with addTodo prop */}
//             <AddTodo addTodo={addTodo} />
//             {/* Todos component with todos and onDelete props */}
//             <Todos todos={todos} onDelete={onDelete} />
//           </>} />
//           {/* Route for about page */}
//           <Route path="/about" element={<About />} />
//         </Routes>

//         {/* Footer component */}
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;
