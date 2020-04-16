import React, { useState } from "react";

function HookCounter() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />

        <h1>My first name is: {name.firstName}</h1>
        <h1>My last name is: {name.lastName} </h1>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounter;
