require("normalize.css/normalize.css");
require("../assets/scss/_global.scss");

import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "@reducers";
import sagas from "@sagas";

// import { HashRouter, Route, Switch } from "react-router-dom";
import createHistory from "history/createHashHistory";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";
import Routes from "@utils/routes";

const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);

export const store = createStore(
  combineReducers({ 
    ...reducers, 
    router: routerReducer 
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    routeMiddleware,
    sagaMiddleware
  ),
);

sagaMiddleware.run(sagas);


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Routes />
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById("root")
)