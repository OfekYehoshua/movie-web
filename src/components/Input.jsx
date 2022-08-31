import { useState } from "react"
import "./input.css"


const Input =(props) =>{
    const [hidden , setHidden]= useState("hidden")
    const [name1 , setName]= useState("")
    const [title , setTitle]= useState("")
    const [image, setImage]= useState("")
    const [link , setLink] = useState("")
   
    
    return(
    <div>
        <button className='button-54' onClick={()=>hidden =="hidden"? setHidden("") : setHidden("hidden")}>Add New movie</button>
        <div hidden ={`${hidden}`}>
            {/* <input placeholder='Insert image URL' onChange={(e)=>setName(e.target.value)}></input> 
            <input placeholder='Movie name' onChange={(e)=>setTitle(e.target.value)}></input>
            <input placeholder='Description' onChange={(e)=>setImage(e.target.value)}></input>
            <input placeholder='Trailer URL' onChange={(e)=>setTrailer(e.target.value)}></input>
            <button className="button-51" onClick={()=>{props.fillList(name1, title , image, trailer)}}>Save</button> */}

    <input onChange={(e)=>setName(e.target.value)} type="text" name="name" class="question" id="nme" required autocomplete="off" />
  <label for="nme"><span className="hspan">Movie name</span></label>
 
 
  <input  onChange={(e)=>setImage(e.target.value)} type="text" name="name" class="question" id="nme" required autocomplete="off" />
  <label for="nme"><span className="hspan">Description</span></label>
  
  
  <input onChange={(e)=>setTitle(e.target.value)} type="text" name="name" class="question" id="nme" required autocomplete="off" />
  <label for="nme"><span className="hspan">Insert image URL</span></label>
  
 

  <input onChange={(e)=>setLink(e.target.value)} type="text" name="name" class="question" id="nme" required autocomplete="off" />
  <label for="nme"><span className="hspan">Trailer URL</span></label>

<button className="button-51" onClick={()=>{props.fillList(name1, title , image, link)}}>Submit</button> 
  
  



        </div>
    </div>
    )
}


export default Input
