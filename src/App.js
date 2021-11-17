import React, { useState, useEffect } from "react";
import TaskCard from "./components/taskCard";
import NewTask from "./components/NewTask";


function App() {

  const [items, setitems] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);
  
  // const[changeTask, setChangeTask] = useState()

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((json) => setitems(json),
                    setDataisLoaded(true),
                    console.log(items)
                    )
  },[])

  return (
    <div className="App">
      <NewTask/>
      <h2 className="heading">All Tasks</h2>
      {
          items.map((item) => ( 
            <TaskCard 
              key={item.id}
              title={item.title} 
              completed = {item.completed}
              id={item.id}
            />
          
          ))
        }
      
    </div>
  );
}

export default App;

