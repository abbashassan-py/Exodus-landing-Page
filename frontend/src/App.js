import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExodusLanding from "./components/ExodusLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExodusLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;