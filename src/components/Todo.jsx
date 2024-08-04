import React,{useState} from 'react'
import "./Todo.css"
import { MdCheckCircle,MdDeleteForever } from "react-icons/md";

const Todo = () => {
    const [inputValue,setInputValue]=useState("");
    const [task,setTask]=useState([])
    const [dateTime,setDateTime]=useState("")
    const handleInputChange=(value)=>{
        setInputValue(value)
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        if(!inputValue) 
            return;
        if(task.includes(inputValue))
        {
            setInputValue("");
            return;

        }
        setTask((prevTask)=> [...prevTask,inputValue])
    }

    setInterval(()=>
    {
        const now=new Date()
        const forDate=now.toLocaleDateString();
        const forTime=now.toLocaleTimeString();
        setDateTime(`${forDate} - ${forTime}`)
    },1000)
    
  return (
    <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
            <h2 className='date-time'>{dateTime}</h2>
        </header>
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className='todo-input' autoComplete='off' value={inputValue} onChange={(event)=> handleInputChange(event.target.value)}/>
                </div>
                <div>
                    <button type='submit'> Add Task</button>
                </div>
            </form>
        </section>
        <section className='myUnOrdList'>
            <ul>
                {
                    task.map((curTask,index)=>{
                        return <li key={index} className='todo-item'>
                            <span>{curTask}</span>
                            <button className='check-btn'>
                                <MdCheckCircle />
                            </button>
                            <button className='check-btn'>
                                <MdDeleteForever />
                            </button>
                        </li>

                    }) 
                }
            </ul>
        </section>
    </section>
  )
}

export default Todo
