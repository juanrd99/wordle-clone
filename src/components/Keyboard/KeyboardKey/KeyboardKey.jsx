import React from "react";
import "./KeyboardKey.css";
import PropTypes from "prop-types";
import { checkWord } from "../../../functions";

function KeyboardKey({ value, word, setWord }) {
  const handleKeyClick = (keyValue) => {
    let tempWord = "";
    if (keyValue === "<-") {
      tempWord = word.slice(0, -1);
      setWord(tempWord);
    } else if (keyValue === "=>") {
      if (word.length <= 4) {
        alert("Completa la palabra");
      } else {
        checkWord(word);
      }
    } else {
      tempWord = word + keyValue;
      if (tempWord.length <= 5) {
        setWord(tempWord);
      }
    }
  };
  return (
    <button
      className="keyboard-key"
      style={{
        backgroundColor:
          value === "=>" ? "#87B8F7" : value === "<-" ? "#D08989" : ""
      }}
      onClick={(e) => handleKeyClick(value)}
    >
      {value}
    </button>
  );
}

KeyboardKey.propTypes = {
  value: PropTypes.string.isRequired
};

export default KeyboardKey;
