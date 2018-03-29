require("normalize.css/normalize.css");
require("../assets/scss/_global.scss");

import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "@reducers";
import sagas from "@sagas";
import PageMain from "@pages/main";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas);

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="app-wrapper">
          <PageMain />
        </div>
      </Provider>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById("root")
)