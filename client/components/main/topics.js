require("./topics.scss");

import React from "react";
import Topic from "./ui/topic";
import Waterfall from "@components/common/waterfall/";


const Topics = props => (
  <Waterfall 
    className="main-topics"
    container=".container-main"
    loadMore={ props.loadMore }
    currentPage={ props.currentPage }
  >
    { 
      props.topics.map(topic => <Topic 
        key={ topic.id }
        id={ topic.id }
        author={ topic.author }
        top={ topic.top }
        tab={ topic.tab }
        title={ topic.title }
        content={ topic.content }
      />) 
    }
  </Waterfall>
);

export default Topics;