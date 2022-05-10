import SelectDropDown from "./SelectDropDown";

function TextBox({ style, selectedLanguage, setShowModal }) {
  return (
    <div className={style}>
      <SelectDropDown
        selectedLanguage={selectedLanguage}
        setShowModal={setShowModal}
        style={style}
      />
      <textarea
        placeholder={style === "input" ? "Entrez du texte" : "Traduction"}
        disabled={style === "output"}
      />
    </div>
  );
}

export default TextBox;
