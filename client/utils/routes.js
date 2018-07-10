import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import PageMain from "@pages/main";
const DemoC = () => (<div>DEMO</div>)


export const routes = [{
  "path": "/",
  "exact": true,
  "component": PageMain,
}, {
  "path": "/a",
  "component": DemoC
}]

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        { routes.map((route, idx) => <Route key={ idx } { ...route } />) }
      </Switch>
    )
  }
}