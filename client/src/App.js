import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Singup from "./components/Singup/Singup";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/singup" exact Component={Singup}/>
        <Route path="/login" exact Component={Login}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;