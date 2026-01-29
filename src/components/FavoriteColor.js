//useState it is a function 
import {useState} from 'react';
function FavoriteColor()
{
    const [color,setColor]=useState('red');
   // let color='Blue';
    return <>
    <h1>My Favorite Color is {color}</h1>
<button onClick={()=>
    {
setColor('blue');
    }}>change color</button>

</>}
export default FavoriteColor;