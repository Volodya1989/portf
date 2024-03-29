import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "../NavTabs/NavTabs";
import Footer from "../Footer/Footer";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";
import "./mainContainer.style.css";

function MainContainer() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="mainContainer">
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={Portfolio} />
        <Route path="/about" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default MainContainer;
