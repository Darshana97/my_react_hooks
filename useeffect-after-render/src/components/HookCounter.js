import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Use Effect Clicked ${count} Times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounter;
