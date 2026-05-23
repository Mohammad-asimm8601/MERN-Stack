// import { useState } from 'react'
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#4B5694");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div style={{ backgroundColor: "#111844" }}>
        <div className="text-6xl tracking-widest flex justify-center">
          <span style={{ color: "violet" }}>V</span>
          <span style={{ color: "indigo" }}>I</span>
          <span style={{ color: "blue" }}>B</span>
          <span style={{ color: "green" }}>G</span>
          <span style={{ color: "yellow" }}>Y</span>
          <span style={{ color: "orange" }}>O</span>
          <span style={{ color: "red" }}>R</span>
        </div>
        <div
          className="text-3xl font-bold flex justify-center p-2
          bg-[linear-gradient(to_bottom,violet,indigo,blue,green,yellow,orange,red)]
          bg-clip-text text-transparent"
        >
          Background Changer
        </div>
      </div>
      <hr className="text-white" />
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 border-2 border-white rounded-3xl"
          style={{ backgroundColor: "#111844" }}
        >
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>

          <button
            onClick={() => setColor("indigo")}
            className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("Red")}
            className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>

          <span className="scale-y-270 text-lg text-white">|</span>

          <button
            onClick={() => setColor("#4B5694")}
            className="outline-none px-4 px-4 py-1 rounded-full text-white  shadow-lg"
            style={{ backgroundColor: "#4B5694" }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
