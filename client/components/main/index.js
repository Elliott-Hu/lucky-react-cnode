import React from "react";
import Topics from "./topics";

export default class ComponentMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { topics } = this.props;
    return (
      <div>
        <Topics topics={ topics } />
      </div>
    )
  }
}