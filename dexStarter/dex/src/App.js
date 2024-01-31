import "./App.css";
import Header from "./components/Header.js";
import Swap from "./components/Swap.js";
import Store from "./components/Store.js";
import Profile from "./components/Profile.js"
import Footer from "./components/Footer.js"; 
import {Routes, Route} from "react-router-dom"

function App() {
  return (
  <div className="App">
    <Header />
    
    {/* define route for each function using router-dom */}
    <Routes>
      <Route path = "/" element = {<Swap/>} />
      <Route path="/store" element={<Store />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>

    <Footer />
  </div>
  );
}

export default App;
