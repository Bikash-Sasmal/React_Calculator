import { useState } from "react";
import style from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal); // eval()  : we pass a string and what ever the mathmatical expression are available it can calculate that
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <center>
    <div className={style.calculator}>
      <Display dispVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
    </center>
  );
}

export default App;
