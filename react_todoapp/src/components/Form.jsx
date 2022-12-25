import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
function Form({ box, setBox }) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  function widthChange(e) {
    e.preventDefault();
    setWidth(e.target.value);
  };

  function heightChange(e) {
    e.preventDefault();
    setHeight(e.target.value);
  };
  function submitFunc(e) {
    e.preventDefault();
    let newBox = {
      id: uuidv4(),
      width: width,
      height: height
    }
    setBox([...box, newBox]);
    setHeight(0);
    setWidth(0);
  }
  return (
    <div>
      <h1>Form:</h1>
      <form action="">
        <input onChange={(e) => widthChange(e)} value={width} type="number" min="0" max="700" placeholder='width' />
        <input onChange={(e) => heightChange(e)} value={height} type="number" min="0" max="700" placeholder='width' />
        <button className='submitBtn' onClick={submitFunc}>Submit</button>
      </form>
    </div>
  )
}

export default Form