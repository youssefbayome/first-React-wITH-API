import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import nasaPhoto from "./components/NasaPhoto";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={nasaPhoto} path="/nasaPhoto" />
      </div>
    </BrowserRouter>
  );
}

export default App;
