import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Keyboard from "./components/Keyboard/Keyboard";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="app">
      <Header />
      <Table />
      <Keyboard />
    </div>
  );
}

export default App;
