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
  const [activity, setActivity] = useState(0);
  let [joke, setJoke] = useState("");

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

  useEffect(() => {
    // if the count is 5, we fetch a new activity
    if (count === 5) {
      fetch("https://www.boredapi.com/api/activity")
        .then((val) => val.json())
        .then((val) => {
          setActivity(val.activity);
        });
    }
  }, [count]);

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
      {activity && (
        <div className="card">
          <h2>WOW ! You seems to be bored. Let's try a new activity :</h2>
          <p>{activity}</p>
        </div>
      )}
      {count % 2 == 0 && !activity && (
        <div style={{ padding: "18px" }}>
          <h2>Click on the button to smile</h2>
          <div
            style={{ margin: 11, color: "#e32356" }}
            onClick={() => {
              // api qui renvoie une blague aléatoirement
              fetch("https://official-joke-api.appspot.com/random_joke")
                .then((res) => res.json())
                .then((res) => {
                  setJoke(res.setup);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Smile
          </div>
          <p>{joke}</p>
        </div>
      )}
    </>
  );
}

export default App;
