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
    console.log(this.props);
    const { demo: { description }, main: { topics } } = this.props.$store;
    return (
      <div className="container-main">
        <ComponentMain 
          topics={ topics }
          getTopics={ this.props.$actions.main.getTopics } 
        />
      </div>
    )
  }
}

export default createConnect("demo", "main")(ContainerMain);