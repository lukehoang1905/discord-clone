import React from "react";
import { useDispatch } from "react-redux";
import "./SidebarChannel.css";
import { setChannelInfo } from "../redux/appSlice";
const SidebarChannel = ({ id, channelName }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelName: channelName,
            channelId: id,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
