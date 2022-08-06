import React from "react";
import { Dropdown } from "./components/Dashboard/Dropdown";
import { Security } from "./components/SecurityController/Security";
import { Trade } from "./components/TradeController/Trade";

const App = () => {
  return <>
       <Dropdown/>
       <Security />
       <Trade/>
        </>;
};

export default App;
