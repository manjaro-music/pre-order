import logo from "./assets/Manjaro_logo_2_2.png";
import "./App.css";
import ModalFahren from "./modals/modal_1";
import henry from "./assets/ich_kann_noch_fahren.jpg";
import zaehne from "./assets/zaehne.jpg";
import tinder from "./assets/tinder.JPG";
import { useState } from "react";

const modals = [
  [henry, "sweete boys in deiner nähe?", "ja bitte"],
  [zaehne, "die große wdr4 ü40 party in recklinghausen", "tickets"],
  [tinder, "florian, 23, single", "jetzt mit ihm kuschelrock hören"],
];

function App() {
  const [index, setIndex] = useState(Math.floor(Math.random() * modals.length));

  return (
    <div className="w-screen h-screen flex flex-row justify-center">
      <ModalFahren
        h={`${Math.floor() > 0.5 ? "right" : "right"}-${Math.floor(
          Math.random() * 2 + 1
        )}/4`}
        v={`${Math.floor() > 0.5 ? "top" : "top"}-${
          Math.floor(Math.random() * 2) + 1
        }/4`}
        img={modals[index][0]}
        header={modals[index][1]}
        action={modals[index][2]}
        onClick={() => {
          setIndex((curr) => {
            let n = Math.floor(Math.random() * modals.length);
            while (curr === n) {
              n = Math.floor(Math.random() * modals.length);
            }

            return n;
          });
        }}
      />
      <main className="flex flex-col w-1/2 self-center pb-48">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn btn-secondary w-1/2 self-center">
          Order the new Album here!
        </button>
      </main>
    </div>
  );
}

export default App;
