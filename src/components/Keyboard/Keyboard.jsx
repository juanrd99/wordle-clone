import React from "react";
import "./Keyboard.css";
import keyboardKeys from "../../keyboardKeys";
import KeyboardKey from "./KeyboardKey/KeyboardKey";
import { v4 as uuidv4 } from "uuid";

function Keyboard(props) {
  return (
    <div className="keyboard">
      <div className="keyboard-grid">
        {keyboardKeys.map((elem) => (
          <KeyboardKey
            key={uuidv4()}
            value={elem.value}
            setWord={props.setWord}
            word={props.word}
          />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
