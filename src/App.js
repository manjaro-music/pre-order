import logo from "./assets/Manjaro_logo_2_2.png";
import "./App.css";
import ModalFahren from "./modals/modal_1";
import henry from "./assets/ich_kann_noch_fahren.jpg";
import zaehne from "./assets/zaehne.jpg";
import tinder from "./assets/tinder.JPG";
import jake from "./assets/jake.jpg";
import ny from "./assets/new_york_oder_delbrueck.jpg";
import brille from "./assets/disco_bass.jpg";
import { ReactComponent as Spinner } from "./assets/spinner.svg";
import { useEffect, useState } from "react";

const modals = [
  [
    henry,
    "sweete boys in deiner nähe?",
    "ja bitte",
    `${Math.floor(Math.random() * 60)}%`,
    `${Math.floor(Math.random() * 25)}%`,
  ],
  [
    zaehne,
    "die große wdr4 ü40 party in recklinghausen",
    "zur resterampe",
    `${Math.floor(Math.random() * 60)}%`,
    `${Math.floor(Math.random() * 25)}%`,
  ],
  [
    tinder,
    "florian, 23, single",
    "jetzt mit ihm kuschelrock hören",
    `${Math.floor(Math.random() * 60)}%`,
    `${Math.floor(Math.random() * 25)}%`,
  ],
  [
    jake,
    "wir suchen DICH, comrade",
    "jetzt einschreiben",
    `${Math.floor(Math.random() * 60)}%`,
    `${Math.floor(Math.random() * 25)}%`,
  ],
  [
    ny,
    "alkoholprobleme? dieser arzt verrät neuen trick",
    "jetzt seminar buchen",
    `${Math.floor(Math.random() * 60)}%`,
    `${Math.floor(Math.random() * 25)}%`,
  ],
  [
    brille,
    "neue brille?",
    "-> mr-spex.de <-",
    `${Math.floor(Math.random() * 60)}%`,
    `${Math.floor(Math.random() * 25)}%`,
  ],
];

function App() {
  const [array, setArray] = useState(
    new Array(3).fill().map((e) => {
      return Math.random() * modals.length;
    })
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-row justify-center">
      {loading && (
        <>
          <div className="absolute z-8 top-0 left-0 w-screen h-screen bg-black opacity-30"></div>
          <div className="z-10 absolute top-1/2 right-1/2 transform translate-x-1/2">
            <Spinner className="animate-[spin_3s_linear_infinite]" />
          </div>
        </>
      )}
      {!loading &&
        array.map((i, ix) => {
          const j = Math.floor(i);
          return (
            <ModalFahren
              key={i}
              z={(ix + 1) * 2}
              h={modals[j][3]}
              v={modals[j][4]}
              img={modals[j][0]}
              header={modals[j][1]}
              action={modals[j][2]}
              onClick={() => {
                setArray((curr) => {
                  return [
                    Math.random() * modals.length,
                    ...curr.filter((e) => i !== e),
                  ];
                });
              }}
            />
          );
        })}
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
