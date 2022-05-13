import { useState, useEffect } from "react";
import TextBox from "./Components/TextBox";
import Arrows from "./Components/Arrows";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import axios from "axios";

function App() {
  //Hooks
  const [showModal, setShowModal] = useState();
  const [inputLanguage, setInputLanguage] = useState("French");
  const [outputLanguage, setOutputLanguage] = useState("English");
  const [languages, setLanguages] = useState();
  const [textToTranslate, setTextToTranslate] = useState();
  const [translatedText, setTranslatedText] = useState();

  console.log(process.env);

  //Api
  const getLanguages = () => {
    const options = {
      method: "GET",
      url: "https://google-translate20.p.rapidapi.com/languages",
      headers: {
        "X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
        "X-RapidAPI-Key": "dff427a5b5mshdc656cb0e3fd1fap1a6b02jsn260cef193e33",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const arrayOfData = Object.keys(response.data.data).map(
          (key) => response.data.data[key]
        );
        console.log("arrayOfData", arrayOfData);
        setLanguages(arrayOfData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getLanguages();
  }, []);

  const translate = () => {
    const options = {
      method: "GET",
      url: "https://google-translate20.p.rapidapi.com/translate",
      params: {
        text: textToTranslate,
        tl: outputLanguage,
        sl: inputLanguage,
      },
      headers: {
        "X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
        "X-RapidAPI-Key": "dff427a5b5mshdc656cb0e3fd1fap1a6b02jsn260cef193e33",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setTranslatedText(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log("translate", translatedText);

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
          <div className="button-container" onClick={translate}>
            <Button />
          </div>
        </>
      )}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          languages={languages}
          chosenLanguage={
            showModal === "input" ? inputLanguage : outputLanguage
          }
          setChosenLanguage={
            showModal === "input" ? setInputLanguage : setOutputLanguage
          }
        />
      )}
    </div>
  );
}

export default App;
