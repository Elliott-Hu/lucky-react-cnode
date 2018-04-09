import React from "react";
import Topics from "./topics";
import Tabs from "./tabs";

import { channel } from "@config/description";

const tabs = Object.keys(channel.name).map(item => ({
  name: channel.name[item],
  value: item
}))


export default class ComponentMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleToggleTab = this.handleToggleTab.bind(this);
  }
  handleToggleTab(value) {
    const { getTopics, clearTopics } = this.props;
    clearTopics();
    getTopics(value);
  }
  render() {
    const { topics, tab, getTopics, page } = this.props;
    return (
      <div>
        <Tabs tabs={ tabs } current={ tab } toggleTab={ this.handleToggleTab } />
        <Topics topics={ topics } loadMore={ getTopics.bind(null, tab) } currentPage={ page } />
      </div>
    )
  }
}