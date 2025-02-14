import { useState } from "react";
import "./App.css";
import BaseCard from "./components/BaseCard";
import HeaderFruits from "./components/HeaderFruits";
import data from "./assets/data.json";

function App() {
  const [myData, setMyData] = useState(data.fruites);

  return (
    <div className="container">
      <HeaderFruits />

      <BaseCard data={myData} />
    </div>
  );
}

export default App;
