import {useState} from "react";
function MyForm(){
     {/*create state for storing the value in that field box and set initial that state is empty*/}
       {/* example 1 : multiple values , multiple state
        const [name,setName]=useState("");
        const [age,setAge]=useState("");
        const [email,setEmail]=useState(""); */}
        // reference  in console -- >  console.log('currentState',name);

        // example 2 : single state but multiple values and set state as an objects {}
        const[input,setInputs]=useState({ph_num:"+91",email:"@gmail.com",about:"i am stud"});
        //callback func
        function handleSubmit(e)
        {   e.preventDefault();
            console.log('Form Submitted!')
           // console.log('CurrentState',name,age,email);
           console.log('currentstate',input);
        }
        // this func for reducing the onChange Handler code onChange={(e)=>{setInputs((previousState)=>{ return {...previousState,name:e.target.value}}) 
        function handleChange(e)
        {   //e.target.name --> name="name" name="age"
            //ex name , age , email
            const name=e.target.name;
            //e.target.value --> ans "filled by user"
            //ex bhava 
            const value=e.target.value;
             //callback func for prev state
             //[name] becos useState({empty/already exists so we ca use []})
             setInputs((previousState)=>{ return {...previousState,[name]:value}})
        }
       return <form onSubmit={handleSubmit}>
        {/* self closing tag input  and e is refered as a name of that box inside value */}
       
       {/* becos it is example 1 continuous state name differ 
       <label>Enter your name : <input type="text" onChange={(e)=>{setName(e.target.value)}}/> </label>
       <br/>
       <label>Enter your age : <input type="text" onChange={(e)=>{setAge(e.target.value)}}/> </label>
       <br/>
       <label>Enter your email : <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/> </label>*/}

       {/*example 2 continuous , passing name as objects {}*/}
       <label>Enter your name : <input type="text" name="name" onChange={handleChange}/> </label>
       <br/>
       <label>Enter your age : <input type="text" name="age" onChange={handleChange}/> </label>
       <br/>
       <label>Enter your email : <input type="text" name="email" onChange={handleChange} value={input.email}/> </label>
       <br/>
       <label>Enter your phone_no : <input type="text" name="ph_num" onChange={handleChange} value={input.ph_num}/> </label>
       {/* for select type dont use self closing tag becos it have options to select */}
        <br/>
       <label>Enter your Country : 
        <select  name="country" onChange={handleChange} value={input.country}>
        <option  value="">Select</option>
        <option  value="Australia">Australia</option>
        <option  value="India">India</option>
        <option  value="Us">Us</option>
        
        </select> </label>
<br/><br/>
        <label>Enter about you: <textarea name="about" value={input.about} onChange={handleChange} >  </textarea></label>
       <br/>
       <input type="submit" value="Submit form"/>  
        </form>
}
export default MyForm;