require("./topic.scss");

import React from "react";
import { channel } from "@config/description";

export default props => {
  const { author, tab, top, title, content } = props;
  return (
    <div className="main-topic">
      <div className="topic-author">
        <div 
          className="author-avatar"
          style={{
            backgroundImage    : `url(${ author.avatar_url })`,
            backgroundRepeat   : "no-repeat",
            backgroundPosition : "left center",
            backgroundSize     : "100% auto"
          }}
        ></div>
        <div className="author-title">{ author.loginname }</div>
      </div>
      <div className="topic-tags">
        { top && <span className="tag-top">置顶</span> }
        <span>{ channel.name[tab] || tab }</span>
      </div>
      <h4 className="topic-title">{ title }</h4>
      <p className="topic-content">{ content.slice(0, 100) }</p>
    </div>
  )
}