import { useState } from "react";
import TextBox from "./Components/TextBox";
import Arrows from "./Components/Arrows";

function App() {
  const [inputLanguage, setInputLanguage] = useState("French");
  const [outputLanguage, setOutputLanguage] = useState("English");

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };
  return (
    <div className="app">
      <TextBox style="input" selectedLanguage={inputLanguage} />
      <div className="arrow-container" onClick={handleClick}>
        <Arrows />
      </div>
      <TextBox style="output" selectedLanguage={outputLanguage} />
    </div>
  );
}

export default App;
