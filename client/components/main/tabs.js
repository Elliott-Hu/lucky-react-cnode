require("./tabs.scss");
import React from "react";

export default (props) => (
  <div className="main-tabs">{ 
    props.tabs.map((tab, index) => (
      <a 
        className={ props.current === tab.value ? "current" : "" }
        onTouchEnd={ props.toggleTab.bind(null, tab.value) }
        key={ index }
      >{ tab.name }</a>
    )) 
  }</div>
)