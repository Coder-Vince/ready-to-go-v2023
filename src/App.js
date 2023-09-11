import "./App.css";
import { useState } from "react";
import Headers from "./components/Headers";
import Switch from "./components/Switch";
import Depart from "./components/Depart";
import Footer from "./components/Footer";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  let takeOff;
  if (switch1 && switch2 && switch3 === true) {
    takeOff = true;
  } else {
    takeOff = false;
  }
  // test
  // console.log(takeOff);
  return (
    <div>
      <Headers />
      <div className="controlBoard">
        <div>
          <Switch className="button" switchB={switch1} setSwitch={setSwitch1} />
          <Switch className="button" switchB={switch2} setSwitch={setSwitch2} />
          <Switch className="button" switchB={switch3} setSwitch={setSwitch3} />
        </div>
        <div className={takeOff ? "go" : "noway"}>
          <Depart takeOff={takeOff} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
