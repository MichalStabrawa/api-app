import { useState, useEffect } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import InputComponent from "./components/InputComponent";

function App() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  //fetch API
  const fetchPhotos = async () => {
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.error(`Could not get ${error}`);
    }
  };

  const onHandleChange = (e) => {
    const value = e.target.value;

    const filtered = data.filter((el) => el.title.includes(value));
    setData(filtered);
  };

  const onHandleClear = () => {
    setFlag(true);
    fetchPhotos();
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <InputComponent event={onHandleClear} onchange={onHandleChange} />
      <ListComponent data={data} />
    </div>
  );
}

export default App;
