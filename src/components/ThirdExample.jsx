import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import '../App.css';

function ThirdExample({amazon_imgs}) {
    const [count, setCount] = useState(0);

    return (
    <div>
         <h1>Third Example</h1>
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
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "10px 0px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((ele, index) => (
            <div className= {count === index ? "common active" : "common"}></div>
        ))}
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
      <p>Here you can also track the carousel image index with below dotted
        circles</p>
    </div>
  )
}

export default ThirdExample
