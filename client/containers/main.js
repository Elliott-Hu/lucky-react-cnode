require("./main.scss");

import React from "react";
import createConnect from "@utils/create-connect";
import axios from "axios";

import ComponentMain from "@components/main";

class ContainerMain extends React.Component {
  componentWillMount() {
    this.props.$actions.main.getTopics();
  }
  handleClick() {
    let description = this.props.$store.demo.description != "切换成功" ? "切换成功" : "你好，欢迎进入首页";
    this.props.$actions.demo.demoAction(description);
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
        />
      </div>
    )
  }
}

export default createConnect("demo", "main")(ContainerMain);