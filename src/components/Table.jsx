import Counter from "./Counter"
import Remove from "./Remove"
import "./table.css"


function Table(props) {

return(
    
    <tbody>
       
        {props.rows.map((row, index) => {
            if(row.length===4){
            return(
            <tr>
                <td className="td">{index}</td>
                <td className="td">{row[0]}</td>
                <td className="image" onClick={()=>{props.setTrailerSrc(row[3])}}>{<img src={row[1]}/>}</td>
                <td className="td">{row[2]}</td>
                {console.log(props.trailerSrc)}
                <td className="td"><Counter></Counter></td>

            </tr> 
             
        )}
           
        })}
    </tbody>
)
}


export default Table