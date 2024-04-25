import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Button from "./components/button";
// import Navbar from "./components/navbar";
// import BasicExample from "./components/mainBanner";
// import Firstbanner from "./components/Firstbanner";
// import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header"> </header>

      <Routes>
        <Route path="/" element={<Home/>} />
        

      </Routes>

      
      
    </div>
    </Router>
  );
}

export default App;
