import "./App.css";
import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./Nav";
import AboutMePage from "./pages/AboutMePage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutMePage} />
          <Route exact path="/experience" component={ExperiencePage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
