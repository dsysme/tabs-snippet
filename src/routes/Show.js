import React from "react";
import { Route, HashRouter, Switch, Link, Redirect } from "react-router-dom";
import TabNav from "../components/tab-nav/TabNav";
import { useParams } from "react-router";

const Cast = ({ id }) => {
  return <div>Cast content for {id}</div>;
};

const Home = () => {
  const { id } = useParams();

  return (
    <HashRouter basename={`/show/${id}`}>
      This is the home information....
      <div>
        <TabNav />
        <Switch>
          <Route path={`/cast`}>
            <Cast id={id} />
          </Route>
          <Route path="/reviews">Reviews content {id}</Route>
          <Redirect to="/cast" />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Home;
