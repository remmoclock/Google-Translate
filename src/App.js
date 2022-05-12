import { useState } from "react";
import TextBox from "./Components/TextBox";
import Arrows from "./Components/Arrows";
import Modal from "./Components/Modal";

function App() {
  //Hooks
  const [showModal, setShowModal] = useState();
  const [inputLanguage, setInputLanguage] = useState("French");
  const [outputLanguage, setOutputLanguage] = useState("English");

  //Api 
  // const getLanguages = async () => {

  // }
  // Func
  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };
  return (
    <div className="app">
      {!showModal && (
        <>
          <TextBox
            style="input"
            selectedLanguage={inputLanguage}
            setShowModal={setShowModal}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            style="output"
            selectedLanguage={outputLanguage}
            setShowModal={setShowModal}
          />
        </>
      )}
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
