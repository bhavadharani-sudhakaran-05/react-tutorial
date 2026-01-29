import {useState} from 'react';
function Scooter(){
    //const [color,setColor]=useState("red");
    //const [brand,setBrand]=useState("Honda");
    //const [model,setModel]=useState("Activa 6G");
    //const [year,setYear]=useState(2020);

    // objects in useState
    const[scooter,setScooter]=useState({
        color:"red",
        brand:"Honda",
        model:"Activa 6G",
        year:2020
    })
    //updating the object in current state
    /*function updateColor(){
        setScooter({color:"blue"})
        }*/

        function updateColor(){
            setScooter(prevState=> {
                return {...prevState,color:"blue"}
            })
        }

        //  for our reference 
       // console.log('Current state',scooter);
    return <>
    <h1>My scooter</h1>
    <p>Color:{scooter.color}</p>
    <p>Brand:{scooter.brand}</p>
    <p>Model:{scooter.model}</p>
    <p>Year:{scooter.year}</p>
    <button onClick={updateColor}>Chnage color</button>
    </>
}
export default Scooter;