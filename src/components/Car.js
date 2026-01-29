import React from 'react';
class Car extends React.Component {
    constructor()
    {
        super();
       // this.state={color:'red'};

       //updating objs in state
         this.state={color:'red',model:'ford'};
    }
    render()
    {
        return<>
        <h1>My Car color is {this.state.color} and model is {this.state.model}</h1>
        <button onClick={() => this.setState((prevState)=>{return {...prevState,color:"blue"}})}>Change color</button>
        </>
    }
}
export default Car;