import React from "react";
import Topics from "./topics";
import Tabs from "./tabs";

import { channel } from "@config/description";
import PropTypes from "prop-types";

const tabs = Object.keys(channel.name).map(item => ({
  name: channel.name[item],
  value: item
}))


export default class ComponentMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleToggleTab = this.handleToggleTab.bind(this);
  }
  componentDidMount() {
    console.log(this.context.router);
  }
  handleToggleTab(value) {
    const { getTopics, clearTopics, history } = this.props;
    this.context.router.history.push(`/?category=${ value }`);
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

ComponentMain.contextTypes = {
  router: PropTypes.object
}