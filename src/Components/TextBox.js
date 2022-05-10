import SelectDropDown from "./SelectDropDown";

function TextBox({ style, selectedLanguage }) {
  return (
    <div className={style}>
      <SelectDropDown selectedLanguage={selectedLanguage} />
      <textarea
        placeholder={style === "input" ? "Entrez du texte" : "Traduction"}
        disabled={style === "output"}
      />
    </div>
  );
}

export default TextBox;
