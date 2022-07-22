import SelectDropDown from "./SelectDropDown";

function TextBox({
  style,
  selectedLanguage,
  setShowModal,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
}) {
  const handleClick = () => {
    setTextToTranslate("");
    setTranslatedText("");
  };

  return (
    <div className={style}>
      <SelectDropDown
        selectedLanguage={selectedLanguage}
        setShowModal={setShowModal}
        style={style}
      />
      <div>
        <textarea
          className={style}
          placeholder={style === "input" ? "Entrez du texte" : "Traduction"}
          disabled={style === "output"}
          onChange={(e) => setTextToTranslate(e.target.value)}
          value={style === "input" ? textToTranslate : translatedText}
        />
        {style === "input" && (
          <span className="delete" onClick={handleClick}>
            ˟
          </span>
        )}
      </div>
    </div>
  );
}

export default TextBox;
