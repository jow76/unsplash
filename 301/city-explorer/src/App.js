import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState({})
  const [map, setMap] = useState("")

  function handleExplore(event){
    setSearchQuery(event.target.value)
  }

  async function handleSubmit(event){
    try{
      event.preventDefault()
      event.target.input.value=""
      const API = `https://eu1.locationiq.com/v1/search?key=${process.env.API_KEY}&q=${searchQuery}&format=json`
      const res = await axios.get(API)
      setLocation(res.data[0])
      handleMap(res.data[0])
    }
    catch(error){
      console.log(error)
    }
  }

  function handleMap(data){
    const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.API_KEY}&center=${data.lat},${data.lon}&zoom=18`
    setMap(API)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a location" name="input" onChange={handleExplore}/>
            <button type="submit">Explore!</button>
          </form>
          <p>{location.display_name}</p>
          <p>{location.lat}</p>
          <p>{location.lon}</p>
          {map && <img src={map} alt="map"/>}
        </div>
      </header>
    </div>
  );
}

export default App;
