import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import IndexContent from "./pages/IndexContent";
import Content from "./pages/Content";
import Column_kao from "./pages/Column_kao";
import Current_feature from "./pages/Current_feature";
import Interview from "./pages/Interview";
import International from "./pages/International";
import Column_chien from "./pages/Column_chien";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNavbar: false
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        showNavbar: !prevState.showNavbar
      };
    });
  };

  render() {
    return (
      <main id="top">
        <Router>
        {/* <Router basename={process.env.PUBLIC_URL}> */}
          <Switch>
            <Route exact path="/" component={IndexContent} />
            <Route path="/contents" component={Content} />
            <Route path="/column_kao_chien_hui" component={Column_kao} />
            <Route path="/current_feature" component={Current_feature} />
            <Route path="/interview" component={Interview} />
            <Route path="/international" component={International} />
            <Route path="/column_chien_hsiu_chih" component={Column_chien} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App
