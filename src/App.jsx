import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Keyboard from "./components/Keyboard/Keyboard";
import Table from "./components/Table/Table";

function App() {
  const [word, setWord] = useState("");
  const [tableSpace, setTableSpace] = useState("1");
  const [keyPressed, setKeyPressed] = useState("");
  const [currentRow, setcurrentRow] = useState("1");

  console.log(keyPressed);
  return (
    <div className="app">
      <Header />
      <Table
        tableSpace={tableSpace}
        setTableSpace={setTableSpace}
        currentRow={currentRow}
        keyPressed={keyPressed}
        word={word}
      />
      <Keyboard
        word={word}
        setWord={setWord}
        setKeyPressed={setKeyPressed}
        currentRow={currentRow}
        setcurrentRow={setcurrentRow}
      />
    </div>
  );
}

export default App;
