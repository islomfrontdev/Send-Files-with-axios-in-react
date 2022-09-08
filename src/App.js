import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", file);

    const url = "";
    axios.post(url, formData).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <h1>Form</h1>
      <form>
        <div>
          <label>Select Files</label>
          <input type="file" name="file" onChange={(e) => handleChange(e)} />
        </div>
        <button onClick={(e) => handleUpload(e)}>Upload</button>
      </form>
    </div>
  );
}

export default App;
