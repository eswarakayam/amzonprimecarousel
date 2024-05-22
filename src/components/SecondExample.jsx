import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

function SecondExample({amazon_imgs}) {
  const [count, setCount] = useState(0)
  return (
    <div>
       <h1>Second Example</h1>
        <div style={{
             display :"flex"
        }} >
        <button onClick={()=> (count === 0) ? setCount(amazon_imgs.length-1) : setCount(count-1)}>
        <MdArrowBackIos />
        </button>
        <img width = "1200px" src = {amazon_imgs[count]} alt="movImg" />
        <button onClick={()=> (count === amazon_imgs.length-1)?setCount(0):setCount(count+1)}>
        <MdArrowForwardIos />
        </button>
        </div>
        <div>
        <button
          style={{
            width: "150px",
          }}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
      </div>
      <p>Here You can loop through the images</p>
    </div>
  )
}

export default SecondExample
