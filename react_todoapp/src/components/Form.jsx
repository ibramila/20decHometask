import React, { useState } from 'react'

function Form({width, height}) {
    const [chng, setChng]=useState(200)
    function submitFunc(){
        setChng(chng);
    };
  return (
    <div>
        <h1>Form:</h1>
        <form action="">
            <input type="text" />
            <input type="text" />
            <button className='submitBtn' onClick={submitFunc}>Submit</button>
        </form>
    </div>
  )
}

export default Form