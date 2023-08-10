import { useState } from "react";
import { useRef } from "react";

function AppInput() {

  let color = useRef();
  let selectColor = useRef();
  let [bg, setBg] = useState('');
  let [fontColor, setFontColor] = useState('');

  return (
    <div className="container-fluid">
      <div className="container">
        <header style={{ height: '10vh' }}>
          header
        </header>
        <div style={{ color: fontColor, background: bg }} className="border col-md-6 p-3 mx-auto my-1">
          <h2 className=''>Enter your favorite color: {bg}</h2>
          <input ref={color} type="text" className="from-control" />
          <button onClick={() => setBg(color.current.value)} className="btn btn-info m-2">Change color</button>
        </div>
        <div style={{ color: fontColor, background: bg }} className="border col-md-6 p-3 mx-auto my-1">
          <h2>Choose font color:</h2>
          <select onChange={() => setFontColor(selectColor.current.value)} ref={selectColor} className="prom-select">
            <option value='red'>red</option>
            <option value='blue'>blue</option>
            <option value='green'>green</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default AppInput;
