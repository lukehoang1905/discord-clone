import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          name
          <span className="message__timestamp">this is a timestamp</span>
        </h4>
        <p className="content">this is content</p>
      </div>
    </div>
  );
};

export default Message;
