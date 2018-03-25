import React from "react";
import createConnect from "@utils/create-connect";

class ContainerMain extends React.Component {
  handleClick() {
    let description = this.props.$store.demo.description != "切换成功" ? "切换成功" : "你好，欢迎进入首页";
    this.props.demo.demoAction(description);
  }
  render() {
    console.log(this.props);
    const { demo: { description } } = this.props.$store;
    return (
      <div>
        { description }
        <button onClick={ this.handleClick.bind(this) }>点击切换描述</button>
      </div>
    )
  }
}

export default createConnect("demo")(ContainerMain);