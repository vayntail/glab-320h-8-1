import "./App.css";

import { Route, Routes } from "react-router";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
