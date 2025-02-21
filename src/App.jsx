import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  cursor-pointer"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  cursor-pointer"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  cursor-pointer"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("Olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  cursor-pointer"
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("Grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  cursor-pointer"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg  cursor-pointer"
            style={{ backgroundColor: "Yellow" }}
          >
            black
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  cursor-pointer"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  cursor-pointer"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("Lavender")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg  cursor-pointer"
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("White")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  cursor-pointer"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
