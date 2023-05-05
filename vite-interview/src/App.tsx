import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

type CurrentPriceApi = {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org";
  chartName: "Bitcoin";
  bpi: Record<
    "USD" | "EUR",
    {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    }
  >;
};

function App() {
  const [count, setCount] = useState(0);

  const [curPrice, setCurPrice] = useState<null | CurrentPriceApi>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await res.json();
      console.log(data);

      setCurPrice(data);
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <h2>The Bitcoin is worth</h2>
        <p>{"$" + curPrice?.bpi.USD.rate_float.toLocaleString("en-US", {})}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
