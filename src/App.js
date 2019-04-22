import React from "react";
import SingleCitySearch from "./containers/SingleCitySearch";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import DetailedCitySearch from "./containers/DetailedCitySearch";
import Favourites from "./containers/Favourites";
import styled from "styled-components";

const Background = styled.div`
    display: flex;
    background: #edeef0;
    background-repeat: repeat;
    height: 947px;
    width: auto;
  `;

const App = () => {
  return (
    <Background imgSrc={"../images/background.jpg"}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={SingleCitySearch} />
        <Route path="/favourites/" exact component={Favourites} />
        <Route
          path="/detailed_search/:cityId"
          exact
          component={DetailedCitySearch}
        />
      </Switch>
    </Background>
  );
};

export default App;
