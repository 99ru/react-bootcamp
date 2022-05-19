import React, { useState } from "react";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.gif";

const DevsComp = () => {
  const [imageClicked, setImageClicked] = useState({});
  const onClickHandler = (order) => {
    setImageClicked({ [order]: true });
  };
  return (
    <div>
      <div className="images">
        {imageClicked.frontend && <img src={frontend} />}
        {imageClicked.backend && <img src={backend} />}
      </div>
      <div>
        <button onClick={() => onClickHandler("frontend")}> frontend</button>
        <button onClick={() => onClickHandler("backend")}> backend</button>
      </div>
    </div>
  );
};

export default DevsComp;
