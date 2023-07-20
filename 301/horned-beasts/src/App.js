import { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast"
import data from "../src/data.json"


function App() {
const [modal, setModal] = useState(false)
const [modalContent, setModalContent] = useState({})
const [beastData, setBeastData] = useState(data)

function handleModal(beast){
  setModal(!modal)
  setModalContent(beast)
}

function handleBeasts(event){
  let beastNum = parseInt(event.target.value);
  const filteredBeasts = data.filter(beast => beast.horns === beastNum)
  event.target.value === "" ? setBeastData(data) : setBeastData(filteredBeasts)
}

  return (
    <div className="App">
      <Header handleBeasts={handleBeasts} />
      <Main beastData={beastData} handleModal={handleModal} modalContent={modalContent} />
      <SelectedBeast modalContent={modalContent}/>
      <Footer />
    </div>
  );
}

export default App;