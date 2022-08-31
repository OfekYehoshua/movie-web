import { useState } from "react"


function Remove({rows , index , setRows}) {
   

   function deleteRow(index) {
    let copy = [...rows]
    copy.splice(index , 1)
    setRows(copy)
   }

    return(
     <button onClick={()=>deleteRow(index)}>❌</button>
    )
    
}

export default Remove