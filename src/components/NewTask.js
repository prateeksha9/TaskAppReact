import React, { useState} from "react";
const NewTask=(props)=>{

    const[newTask, setNewTask] = useState('')

    const AddNewTask = () => {
        if(newTask !== ''){
            fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: `${newTask}`,
                completed: false,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {console.log(json)
            alert(`Task ${json.title} Added`)});
        } else{
            alert("Add a task")
        }
        

        setNewTask('');

    }

    const handleNewTaskChange = (e) => {
        setNewTask(e.target.value);
        // console.log(newTask)
    }
    return(

        <div className="newTask">
            <div className="newCard">
                {/* <div className="newTaskHead">
                <span> <strong>Add New Task</strong></span>
                </div> */}
                
                <input type="text" className="newInput" placeholder="Add New Task" onChange={handleNewTaskChange}/>
                {/* className="taskText" */}
                <button className="buttonInput" onClick={AddNewTask}>Add  </button>
            </div>
            
        </div>
        
    )
}

export default NewTask