import React, { useEffect, useState } from "react";

const AllTasks = () => {
  let z = localStorage.getItem("key")
  let arr = []
  for (let i = 0; i < z; i++) {
    arr[i] = localStorage.getItem(`arr${i}`)
  }
  let date = localStorage.getItem(`date`)
  let month = localStorage.getItem(`month`)
  let year = localStorage.getItem(`year`)
  
  useEffect(() => {
    let alltasks = document.getElementsByClassName("alltasks")
    for (let i = 0; i < z; i++) {
      let task = localStorage.getItem(`arr${i}`)
      if (task == null) {
        alltasks[i]?.classList.add("class1")
      }
    }
  },[]);
  
  const deleteTask = (index) => {
    localStorage.removeItem(`arr${index}`)
    window.location.reload();
  }
  let num;
  const editTask = (index)=>{
    let editBox = document.getElementsByClassName("editBox")
    editBox[0].classList.toggle("class3")
    num=index
    
  }
  const submitEditedTask = (index)=>{
    // console.log(num)
    let editedtask = document.getElementById("newtextarea")?.value
    if(editedtask!==""){
      localStorage.setItem(`arr${num}`,editedtask)
      window.location.reload();
    }
  }
  let totaltask=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=null){
      totaltask+=1
    }
  }
  // console.log(arr.reverse())
  localStorage.setItem("lengthofarray",totaltask)
  // let x;
  // const click = (index)=>{
  //   x =index;
  //   localStorage.setItem(`ind${x}`,x)
  // }
  // let TrueFalse;
  // let valu
  // const handleCheckboxChange = (event)=>{
  //   valu = localStorage.getItem(`ind${x}`)
  //   console.log(event.target.checked)
  //   TrueFalse = event.target.checked;
  //   localStorage.setItem(`u${valu}`,TrueFalse)
  // }
  // let ss = localStorage.getItem(`u${valu}`)
  return (
    <div className="tasks">
      {
        arr?.map((item, index) => (
          <div>
      <div className="editBox">
      <textarea  id="newtextarea" placeholder="please write here" /> 
      <button type="button" className="btn btn-success newSubmit" onClick={()=>submitEditedTask(index)}>Add</button>
      </div>
          <div key={index} className="alltasks">
            <span key={index} className="material-symbols-outlined edit-btn" onClick={() => editTask(index)}>edit</span>
            <span key={index} className="material-symbols-outlined delete-btn" onClick={() => deleteTask(index)}>delete</span>
            <div style={{ color: "gray",display:"inline-flex", position: "relative", top: "30px",textAlign:"centr", zIndex: "1", fontSize: "12px" }} key={index}>{date}-{month}-{year}</div>
            <div className="task">{item}</div>
            {/* <input key={index} onClick={()=>click(index)} checked={ss}  onChange={handleCheckboxChange} className="checkbox" type="checkbox"  style={{position:"relative",bottom:"20px",float:"right",right:"30px"}} /> */}
          </div>
          </div>
        ))
      }
    </div>
  )
}
export default AllTasks;