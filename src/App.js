import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IndexContent from "./pages/IndexContent";
import Content from "./pages/Content";
import Column_kao from "./pages/Column_kao";
import Current_feature from "./pages/Current_feature";
import Interview from "./pages/Interview";
import International from "./pages/International";
import Column_chien from "./pages/Column_chien";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={IndexContent} />
        <Route exact path="/contents" component={Content} />
        <Route exact path="/column_kao_chien_hui" component={Column_kao} />
        <Route exact path="/current_feature" component={Current_feature} />
        <Route exact path="/interview" component={Interview} />
        <Route exact path="/international" component={International} />
        <Route exact path="/column_chien_hsiu_chih" component={Column_chien} />
      </Switch>
    </Router>
  );
}

export default App
