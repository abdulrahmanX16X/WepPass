import { useState } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [Num_letters, SetNum_letters] = useState(0);
  const [Num_numbers, SetNum_numbers] = useState(0);
  const [Num_symbols, SetNum_symbols] = useState(0);
  const [Pass, SetPass] = useState("");

  const GeneratePass = async () => {
    const Res = await axios.post("https://passwordgenertor5.onrender.com/Gen", {
      Num_letters,
      Num_numbers,
      Num_symbols,
    });

    if (Res.data.succeed) {
      SetPass(Res.data.Password);
    } else {
      alert("Generator is falied ");
    }
  };

  return (
    <div className="app">
      <h1>Password Generator</h1>

      <input
        type="number"
        placeholder="Number of letters"
        min={0}
        max={100}
        onChange={(e) => SetNum_letters(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Number of numbers"
        min={0}
        max={100}
        onChange={(e) => SetNum_numbers(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Number of symbols"
        min={0}
        max={100}
        onChange={(e) => SetNum_symbols(Number(e.target.value))}
      />

      <button onClick={GeneratePass}>Generate</button>

      <div className="result">
        The password is:
        <span>{Pass}</span>
      </div>
    </div>
  );
}

export default App;
