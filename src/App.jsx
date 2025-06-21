import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
import AppName from "./components/AppName";

function App() {
  let [calVal, setCalVal] = new useState("");

  let onButtonClick = (item) => {
    if (item === "C") {
      setCalVal("");
    } else if (item === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let str = calVal + item;
      setCalVal(str);
    }
    console.log(`${item} Button Clicked`);
  };

  return (
    <>
      <AppName></AppName>
      <div className={styles.calculator}>
        <Display calVal={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
