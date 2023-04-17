import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
