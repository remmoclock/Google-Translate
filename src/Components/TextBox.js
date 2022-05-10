import SelectDropDown from "./SelectDropDown";

function TextBox({ style }) {
  return (
    <div>
      <SelectDropDown />
      <textarea
        placeholder={style === "input" ? "Entrez du texte" : "Traduction"}
        disabled={style === "output"}
      />
    </div>
  );
}

export default TextBox;
