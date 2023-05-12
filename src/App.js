import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="main">
        <Main />
      </div>
      <nav>
        <Nav />
      </nav>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
