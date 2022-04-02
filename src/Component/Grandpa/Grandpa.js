import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("ring");

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const ornamens = 'Sundor Ring'
  const handelBuyAhouse = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };
  return (
    <RingContext.Provider value={ornamens}>
      <div className="grandpa">
        <h1>Granpa</h1>
        <button onClick={handelBuyAhouse}>Buy House</button>
        <Father house={house}></Father>
        <Uncle house={house}></Uncle>
        <Aunty house={house}></Aunty>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
