import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Posts from "./organisms/Topstories"

function App() {
  return (
    <> <Router>
      <Route path="/" strict exact component={Posts} />
    </Router>
    </>
  );
}
export default App;
