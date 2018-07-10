require("./main.scss");

import React from "react";
import createConnect from "@utils/create-connect";
import * as helpers from "@utils/helpers";

import { withRouter } from "react-router-dom";

import ComponentMain from "@components/main";

class ContainerMain extends React.Component {
  componentWillMount() {
    const queryObject = helpers.queryString(this.props.location.search);
    this.props.$actions.main.getTopics(queryObject.category);
  }
  componentWillUnmount() {
    this.props.$actions.main.clearTopics();
  }
  render() {
    const { demo: { description }, main: { topics, page, tab } } = this.props.$store;
    return (
      <div className="container-main">
        <ComponentMain
          page={ page }
          tab={ tab }
          topics={ topics }
          getTopics={ this.props.$actions.main.getTopics }
          clearTopics={ this.props.$actions.main.clearTopics }
          history={ this.props.history }
        />
      </div>
    )
  }
}

const ConnectedComponent = createConnect("demo", "main")(ContainerMain);
export default withRouter(ConnectedComponent);