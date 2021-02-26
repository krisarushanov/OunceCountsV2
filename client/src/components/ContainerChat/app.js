import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ChatRoom from "./room";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:roomId" component={ChatRoom} />
      </Switch>
    </Router>
  );
}

export default App;