import { useState } from "react";

function Modal({ setShowModal, languages, chosenLanguage, setChosenLanguage }) {
  const [searchedLanguage, setSearchedLanguage] = useState("");

  const filteredLanguages = languages.filter((language) =>
    language.toLowerCase().startsWith(searchedLanguage.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchedLanguage(e.target.value);
  };

  const handleClick = (e) => {
    setChosenLanguage(e.target.textContent);
    setShowModal(null);
  };

  console.log("searchedLanguage", searchedLanguage);

  return (
    <div className="option-list">
      <div className="search-bar">
        <input onChange={handleChange} value={searchedLanguage} />
        <div className="close-button" onClick={() => setShowModal(null)}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </div>
      <div className="option-container">
        <ul>
          {filteredLanguages?.map((filteredLanguage, ix) => {
            return (
              <div className="list-item" key={ix}>
                <div className="icon">
                  {chosenLanguage === filteredLanguage && "✓"}
                </div>
                <li
                  onClick={handleClick}
                  style={{ color: chosenLanguage && "#8ab4f8" }}
                >
                  {filteredLanguage}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
