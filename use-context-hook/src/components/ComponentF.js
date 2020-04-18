import React from "react";
import { UserContex, ChannelContex } from "../App";

function ComponentF() {
  return (
    <div>
      <UserContex.Consumer>
        {(user) => {
          return (
            <ChannelContex.Consumer>
              {(channel) => {
                return (
                  <div>
                    User Contex value {user}, Channel context value {channel}{" "}
                  </div>
                );
              }}
            </ChannelContex.Consumer>
          );
        }}
      </UserContex.Consumer>
    </div>
  );
}

export default ComponentF;
