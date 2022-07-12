import { useState, useEffect } from "react";
import TextBox from "./Components/TextBox";
import Arrows from "./Components/Arrows";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import axios from "axios";
import Loader from "./Components/Loader";

function App() {
  //Hooks
  const [showModal, setShowModal] = useState();
  const [inputLanguage, setInputLanguage] = useState("French");
  const [outputLanguage, setOutputLanguage] = useState("English");
  const [languages, setLanguages] = useState();
  const [textToTranslate, setTextToTranslate] = useState();
  const [translatedText, setTranslatedText] = useState();
  const [loader, setLoader] = useState(false);


  //Api
  // const getLanguages = () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://google-translate20.p.rapidapi.com/languages",
  //     headers: {
  //       "X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
  //       "X-RapidAPI-Key": "dff427a5b5mshdc656cb0e3fd1fap1a6b02jsn260cef193e33",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       const arrayOfData = Object.keys(response.data.data).map(
  //         (key) => response.data.data[key]
  //       );
  //       console.log("arrayOfData", arrayOfData);
  //       setLanguages(arrayOfData);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  // Backend call

  const getLanguages = async () => {
    const response = await axios("http://localhost:8000/languages");
    setLanguages(response.data);
  };

  useEffect(() => {
    getLanguages();
  }, []);

  // const translate = () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://google-translate20.p.rapidapi.com/translate",
  //     params: {
  //       text: textToTranslate,
  //       tl: outputLanguage,
  //       sl: inputLanguage,
  //     },
  //     headers: {
  //       "X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
  //       "X-RapidAPI-Key": "dff427a5b5mshdc656cb0e3fd1fap1a6b02jsn260cef193e33",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setTranslatedText(response.data.data.translation);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
  // console.log("translate", translatedText);

  // Backend call

  const translate = async () => {
    console.log("translate");
    setLoader(true);
    const data = {
      textToTranslate,
      outputLanguage,
      inputLanguage,
    };
    const response = await axios.get("http://localhost:8000/translation", {
      params: data,
    });
    console.log("response", response);
    setTranslatedText(response.data);
    setLoader(false);
  };

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
            setTextToTranslate={setTextToTranslate}
            textToTranslate={textToTranslate}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            style="output"
            selectedLanguage={outputLanguage}
            setShowModal={setShowModal}
            translatedText={translatedText}
            setTranslatedText={setTranslatedText}
          />{" "}
          {loader ? (
            <Loader />
          ) : (
            <div className="button-container" onClick={translate}>
              <Button />
            </div>
          )}
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
