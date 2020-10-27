import React, { useEffect, useState } from "react";
import "./SideBar.css";
import SidebarChannel from "./SidebarChannel";
import {
  Call,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import db, { auth } from "../firebase";

const SideBar = () => {
  const user = useSelector((state) => state.user.user);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h1>{user.displayName}</h1>
        <ExpandMore />
      </div>

      <div className="sidebar__channelsHeader">
        <div className="sidebar__header">
          <ExpandMore />
          <h4>Text Channel</h4>
        </div>

        <Add className="sidebar__addChannel" onClick={handleAddChannel} />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAlt className="sidebar__voiceIcons" fontSize="large" />
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
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
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
