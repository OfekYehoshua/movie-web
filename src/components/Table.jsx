import { Table , TableCell, TableContainer, TableRow , StyledTableCell, TableHead, TableBody} from "@mui/material"
import Counter from "./Counter"
import Remove from "./Remove"
import "./table.css"
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function CustomizedTables(props) {
    return (
    
    <TableContainer component={Paper}>
       
        {props.rows.map((row, index) => {
            if(row.length===4){
            return(
            // <tr>
            //     <td className="td">{index}</td>
            //     <td className="td">{row[0]}</td>
            //     <td className="image" onClick={()=>{props.setTrailerSrc(row[3])}}>{<img src={row[1]}/>}</td>
            //     <td className="td">{row[2]}</td>
            //     {console.log(props.trailerSrc)}
            //     <td className="td"><Counter></Counter></td>

            // </tr>     
          
          <Table sx={{ minWidth: 700 }} aria-label="customized table">

            <TableHead>
              <TableRow>
                <StyledTableCell>Movie Name</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Rating</StyledTableCell>
                <StyledTableCell align="right">Image</StyledTableCell>
                <StyledTableCell align="right">Number</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="right">{row[0]}</TableCell>
              <TableCell align="right">{<img src={row[1]}/>}</TableCell>
              <TableCell align="right">{row[2]}</TableCell>
              <TableCell align="right"><Counter></Counter></TableCell>
            </TableRow>
            </TableBody>
            </Table>
            )}})}
    </TableContainer> )}
             
            
           
   


