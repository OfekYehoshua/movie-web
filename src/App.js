import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Table from "./components/Table";
import Trailer from "./components/Trailer";

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

      {/* /* table start https://react-bootstrap.github.io/components/table/ */}
      <thead className="container">
        <tr class="container-table">
          <th class="containerTable-lblTitle">#</th>
          <th class="containerTable-lblTitle">Movie Name</th>
          <th class="containerTable-lblTitle">Image</th>
          <th class="containerTable-lblTitle">Description</th>
          <th class="containerTable-lblTitle">Rating</th>
          <th class="containerTable-lblTitle">Remove</th>
        </tr>
      </thead>

      <Table
        rows={rows}
        save={save}
        setRows={setRows}
        setTrailerSrc={setTrailerSrc}
      >
        {" "}
      </Table>

      <Trailer trailerSrc={trailerSrc}></Trailer>
    </div>
  );
}

export default App;
