import { useState } from "react";
import AllTasks from "./AllTasks"
const AddList =()=>{
    let x;
    let g=[]
    let key;
    if(localStorage.getItem("key")){
       key = Number(localStorage.getItem("key"))+1
    }
    else{
       key=1
    }
    
    const func = ()=>{
        x = document.getElementById("textarea")?.value
        localStorage.setItem("key",key)
        g[key-1] = [x]
        localStorage.setItem(`arr${key-1}`,g[key-1])
        let date = new Date;
        localStorage.setItem("date",date.getDate())
        localStorage.setItem("month",date.getMonth())
        localStorage.setItem("year",date.getFullYear())
        let savedBtn = document.getElementsByClassName("saved-btn")
        savedBtn[0]?.classList.add("class2")
        const block = async ()=>{
            savedBtn[0]?.classList.remove("class2")
        }
        setTimeout(block,2000)
        // setTimeout(block,1000)
        key++;
        
        
    }
    // console.log(date.getDate())
    return (
        <div className="addtask">
            <div className="saved-btn">Saved</div>
            <div className="area">
              <textarea  id="textarea" placeholder="please write here" autoFocus/> 
              <button type="button" onClick={func} className="btn btn-success">Add</button>
            </div>
        </div>
    )
}

export default AddList;