import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import { useRouteMatch } from "react-router";
import Show from "./routes/Show";

const Nav = () => {
  const { path } = useRouteMatch();

  return (
    <nav>
      <Link className={path === "/" ? "selected" : ""} to="/">
        Home
      </Link>
      <Link className={path === "/show" ? "selected" : ""} to="/show/1234">
        Show
      </Link>
    </nav>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/show/:id">
          <Nav />
          <Show />
        </Route>
        <Route path="/">
          <Nav />
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  );
}
