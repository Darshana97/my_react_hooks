import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./components/ComponentC";

export const UserContex = React.createContext();
export const ChannelContex = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContex.Provider value={"Darshana"}>
        <ChannelContex.Provider value={"Senevirathna"}>
          <ComponentC />
        </ChannelContex.Provider>
      </UserContex.Provider>
    </div>
  );
}

export default App;
