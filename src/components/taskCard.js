import React, { useState} from "react";
const TaskCard=(props)=>{

    const[edit, setEdit] = useState(false)
    const[changeTask, setChangeTask] = useState('')
    // const[complete, setComplete] = useState(false)

    const HandleDelete =(e) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`, {
          method: "DELETE",
        });
        e.target.parentElement.parentElement.remove()
        // console.log(`${e.target.value}`);
      };

    const HandleEdit = (e) => {
        if(!edit){
            setEdit(true)
        } else if(changeTask !== ''){
            fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: `${e.target.value}`,
                title:  `${changeTask}`,
                userId: 1,
                // completed: `${complete}`
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {console.log(json)
                alert(`updated to task: ${json.title} `)});
            setEdit(false)
            setChangeTask('')
        } else{
            alert("No task changed")
            setEdit(false)
            setChangeTask('')
        }
    }

    const changeTodo =(e) =>{
        setChangeTask(e.target.value)
        // console.log(changeTask)
    }

    // const HandleComplete =(e) => {
    //     setComplete(!e.target.value)
    // }
    return(
        <div className="card">
            <div className={props.completed ? "completed" : "pending"}/>
            {edit ? <div className="taskInput">
                <input type="text" placeholder={props.title} onChange={changeTodo} className="taskText"/>
                {/* <button className="buttonInput" value={props.completed} onClick={HandleComplete}>Change Complete Status</button> */}
            </div>  : <div className="task"><span> {props.title}</span></div>}
            
            {/* <span>{props.completed ? "YESSSSSSSS" : "NOOOOOOOOOO"}</span> */}
            <div className="action">   
            <button value={props.id} onClick={HandleEdit} className="buttonImage">
                Update
            </button> 
            <button value={props.id}  onClick={HandleDelete} className="buttonImage">
                Delete 
            </button>
            </div>
        </div>
        
    )
}

export default TaskCard