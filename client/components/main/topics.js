require("./topics.scss");

import React from "react";
import Topic from "./ui/topic";

export default props => (
  <div class="main-topics">
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
  </div>
);