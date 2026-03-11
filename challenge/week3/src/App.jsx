import "./App.css";

import CurrencyInput from "./components/CurrencyInput";

import { useState } from "react";

const currency = 1300;

const App = () => {
  const [krw, setKrw] = useState(0);
  const [usd, setUsd] = useState(0);

  const handleKrwChange = (value) => {
    setKrw(value);
    setUsd(value / currency);
  };

  const handleUsdChange = (value) => {
    setUsd(value);
    setKrw(value * currency);
  };

  return (
    <div>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrencyInput label="krw" value={krw} onChange={handleKrwChange} />
      <CurrencyInput label="usd" value={usd} onChange={handleUsdChange} />
    </div>
  );
};

export default App;
