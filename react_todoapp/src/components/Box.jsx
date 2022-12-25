import React from 'react'

function Box({ box }) {
  return (
    <>
    <div style={{ position: "absolute", margin: "20px 0"}}>
      {box.map((item) => {
        return <div style={{ border: "2px solid red", width: `${item.width}px`, height: `${item.height}px`, margin:"20px"}}></div>
      })}
    </div>
        </>
  )
}

export default Box