import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContex, ChannelContex } from "../App";

function ComponentE() {
  const user = useContext(UserContex);
  const channel = useContext(ChannelContex);

  return (
    <div>
      {user} - {channel}
      {/* <ComponentF /> */}
    </div>
  );
}

export default ComponentE;
