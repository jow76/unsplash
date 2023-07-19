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

function handleModal(beast){
  setModal(!modal)
  setModalContent(beast)
}

  return (
    <div className="App">
      <Header />
      <Main data={data} handleModal={handleModal} modalContent={modalContent} />
      <SelectedBeast modalContent={modalContent}/>
      <Footer />
    </div>
  );
}

export default App;