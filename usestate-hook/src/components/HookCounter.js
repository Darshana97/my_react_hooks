import React, { useState } from "react";

function HookCounter() {
  const [count, countState] = useState(0);

  return (
    <div>
      <button onClick={() => countState(count + 1)}>Count {count} </button>
    </div>
  );
}

export default HookCounter;
