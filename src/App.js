import { useState, useEffect } from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import InputComponent from "./components/InputComponent";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [radioValue, setName] = useState("title");

  //fetch API photos
  const fetchPhotos = async () => {
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    const urlUserId =
      "https://jsonplaceholder.typicode.com/albums/1/photos?id=";
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

  //fetch API photos id
  const fetchPhotosId = async (id) => {
    const urlUserId = `https://jsonplaceholder.typicode.com/albums/1/photos?id=${id}`;
    try {
      const response = await fetch(urlUserId);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.error(`Could not get ${error}`);
    }
  };

  const onHandleChangeSearch = (e) => {
    const value = e.target.value;

    if (radioValue === "title") {
       //filtrowanie po title po stronie przegladarki
      const filtered = data.filter((el) => el.title.includes(value));
      setSearch(value);
      setData(filtered);
    } else {
      //filtrowanie z API po ID
      setSearch(value);
      fetchPhotosId(value);
    }
   
  };

  const onHandleChangeRadio = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const onHandleClear = () => {
    fetchPhotos();
    setSearch("");
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <InputComponent
        data={data}
        event={onHandleClear}
        onchange={onHandleChangeSearch}
        value={search}
        name={radioValue}
      />
      <fieldset>
        <legend>Select a filter</legend>

        <div>
          <input
            type="radio"
            id="title"
            name="title"
            value="title"
            onChange={onHandleChangeRadio}
            checked={radioValue === "title"}
          />
          <label>title</label>
        </div>

        <div>
          <input
            type="radio"
            id="id"
            name="id"
            value="id"
            onChange={onHandleChangeRadio}
            checked={radioValue === "id"}
          />
          <label>id</label>
        </div>
      </fieldset>
      <ListComponent data={data} />
    </div>
  );
}

export default App;
