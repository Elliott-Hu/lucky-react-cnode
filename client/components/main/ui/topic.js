require("./topic.scss");

import React from "react";

const tagMap = {
  "share": "分享",
  "ask": "问答",
}

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
        <div class="author-title">{ author.loginname }</div>
      </div>
      <div className="topic-tags">
        { top ? <span className="tag-top">置顶</span> : null }
        <span>{ tagMap[tab] || tab }</span>
      </div>
      <h4 className="topic-title">{ title }</h4>
      <p className="topic-content">{ content.slice(0, 100) }</p>
    </div>
  )
}