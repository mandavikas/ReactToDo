import  './App.css'
import {useState} from 'react';
let nextid=2;

function App()
{

  const[value,setValue]=useState('Add todo here!');
  const[data,setData]=useState([
    {
      id:1,
      task:"todo1"
    },
   
  ]);

  function addTodo()
  {



    
   
    if(value==="")
    {
      alert('please enter text')
    }
    
    else{
     let newTodos=[
        ...data,
        {
          id:nextid++,
          task:value
        }
      ]
      setData(newTodos);
    }

  }

  function deletTodo(id)
  {
   let updatedTodos= data.filter(
      (data)=>
      {
        return data.id!==id;
      }
    )
    setData(updatedTodos);
  }

  return (
    <>
    <div className="searchBar">
        <h2>To do app using React</h2>
        <div class="main" >
        <input type='text' className="textfield" name="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <input type='submit'className="bt" value='Add Todo' onClick={addTodo} />
        </div>
        <ul>
          {
            data.map((ele)=>{
              return (
              <li>
              <span>{ele.task}</span>
              <button className="bt" style={{backgroundColor:"red"}} onClick={()=>{deletTodo(ele.id);}}>Delete</button>
            </li>
              )
            }
            
            
            )
          }
         
          

        </ul>
    </div>
        </>
  )
}

export default App;