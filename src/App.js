import { useState } from "react";
import TextBox from "./Components/TextBox";
import Arrows from "./Components/Arrows";
import Modal from "./Components/Modal";

function App() {
  const [showModal, setShowModal] = useState();
  const [inputLanguage, setInputLanguage] = useState("French");
  const [outputLanguage, setOutputLanguage] = useState("English");

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
      {showModal && <Modal />}
    </div>
  );
}

export default App;
