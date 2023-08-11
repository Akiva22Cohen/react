import React, { useState } from "react";
import Child from "./child";

function AppParent() {

  let [show, setShow] = useState(true);
  const closeMessage = () => {
    setShow(false);
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <header style={{ height: '10vh' }}>header</header>
        <div style={{ minHeight: '20vh' }} className="shadow rounded border col-md-6 mx-auto bg-primary-subtle p-2 p-md-3">
          <h1 className=''>Parent component:</h1>
          {show && <Child functionTransfer={closeMessage} txt='Message Parent component to child component!' />}
        </div>
      </div>
    </div>
  );
}

export default AppParent;
