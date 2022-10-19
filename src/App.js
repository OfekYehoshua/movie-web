import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Trailer from "./components/Trailer";
import CustomizedTables from "./components/TableMaterial";

function App() {
  //   // const [movie, setMovie] = useState()
  //   // const [movie, setMovie] = useState()
  //   const [name, setName] = useState("")
  const [save, setSave] = useState([]);
  const [rows, setRows] = useState([]);
  const [trailerSrc, setTrailerSrc] = useState("");

  function fillList(name1, title, image, trailer) {
    if (name1 !== "" && title !== "" && image !== "" && trailer !== "") {
      setSave([name1, title, image, trailer]);
      rows.push(save);
    }
  }
  console.log(rows);
  return (
    <div className="App">

      <h1 className="header">My favorite movie</h1>
      <Input save={save} setSave={setSave} fillList={fillList}></Input>
    <CustomizedTables rows={rows}
        save={save}
        setRows={setRows}
        setTrailerSrc={setTrailerSrc}
      >
        {" "}></CustomizedTables>

      {/* <Table
        rows={rows}
        save={save}
        setRows={setRows}
        setTrailerSrc={setTrailerSrc}
      >
        {" "}
      </Table> */}

      <Trailer trailerSrc={trailerSrc}></Trailer>
    </div>
  );
}

export default App;
