import "./App.css";
import Header from "./components/Header.js";
import Swap from "./components/Swap.js";
import Tokens from "./components/Tokens.js";
import Store from "./components/Store.js";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
  <div className="App">
    <Header />
    
    {/* define route for each function using router-dom */}
    <Routes>
      <Route path = "/" element = {<Swap/>} />
      <Route path="/tokens" element={<Tokens />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  </div>
  );
}

export default App;
