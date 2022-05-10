import SelectDropDown from "./SelectDropDown";

function TextBox({ style }) {
  return (
    <div className={style}>
      <SelectDropDown />
      <textarea
        placeholder={style === "input" ? "Entrez du texte" : "Traduction"}
        disabled={style === "output"}
      />
    </div>
  );
}

export default TextBox;
