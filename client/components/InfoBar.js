import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <FiberManualRecordIcon className="onlineIcon" />

        <h3>{room}</h3>
      </div>

      <div className="rightInnerContainer">
        <CloseIcon className="closeIcon" />
      </div>
    </div>
  );
};

export default InfoBar;
