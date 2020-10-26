import React from "react";
import "./SideBar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import { Call, Headset, InfoOutlined, Mic, Settings } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import avatar from "../image/avatar.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h1>Luke Hoang</h1>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channel</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sider__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcons"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlined />
          <Call />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src={avatar} />
        <div className="sidebar__profileInfo">
          <h3>@sss</h3>
          <p>#this</p>
        </div>

        <div className="sidebar__profileIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
