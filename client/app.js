import React from "react";
import ReactDom from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "@reducers";

import PageMain from "@pages/main";

const store = createStore(reducers);

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