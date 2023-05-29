import { useRef,useState } from "react";

function Todolist (){
const [taskname,setTaskName] = useState([]);
const [text,setText] = useState("");
const inputField = useRef();
// onchange fucntion 
const changevalue = (event) =>{
  setText(event.target.value);
}

// add item function 
const addnewitem = () =>{
 if(text==""){
   alert("Input field is Empty")
 }
 else{
    const newArr = [...taskname,text]
setTaskName(newArr)
setText("")
inputField.current.focus();
 }
}

//enter key pressed function 
const Enterkeypressed = (event) =>{
        if(event.key=="Enter"){
            addnewitem();
        }
}

// delete function 
const deleteitem = (index) =>{
    if (window.confirm('Are you sure you wish to delete this item?')){
        const res = taskname.toSpliced(index,1)
        setTaskName(res);
    }

   
}
    return (
        <div>
              <div className="container" style={{borderRadius:"15px"}}>
            <h2 className=" text-white " style={{textAlign:"center"}}>TO DO List</h2>
        <div className="box">
            <input onKeyUp={Enterkeypressed} onChange={changevalue} type="text" value={text} id="inputField"  ref={inputField}/>
            <button className="addNew  border border-secondary " style={{backgroundColor: "#29377c", color: "white",fontSize: "20px",fontWeight: "bold"}} onClick={addnewitem}>AddTask</button>
        </div>
        <div className="list_box">
            <ul id="list">
                {
                    taskname.map((item,index)=>{
                        return <li key={index}>{item} <button id="btn1" className="btn1  btn btn-lg bg-danger text-white" onClick={()=>{deleteitem(index)}}>Delete</button></li>
                    })
                }
            </ul>
        </div>
    </div>
        </div>
    );
}
export default Todolist;