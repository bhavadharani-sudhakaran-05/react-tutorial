//arays and lists in react
import {useState} from 'react';
function List()
{
    const [list,setList]= useState([]);
    const [count,setCount]=useState(1);
    //button that call back this below function to add item to list
    function addItem()
    {
         const itemName='Item'+count;
         setList((prevState)=>{ return [...prevState,itemName];   })
         setCount((prevCount)=>prevCount+1);
    }
   console.log('current state',list);//for our reference to test in console
   return <>
    <h1>List</h1>
    <button onClick={(addItem)}> Add Item</button>
    <ul>
        {
            list.map((el,index)=><li key={index}>{el}</li>)
        }
    </ul>
    </>
}
export default List;