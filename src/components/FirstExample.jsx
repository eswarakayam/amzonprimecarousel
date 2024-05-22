import React, { useState } from 'react'


function FirstExample({amazon_imgs}) {
    const [count, setCount] = useState(0);
    
  return (
    <div>
        <h1>First Example</h1>
        <div style={{
             display :"flex"
        }} >
        <button onClick={()=> setCount(count-1)}>
            previous
        </button>
        <img width = "1200px" src = {amazon_imgs[count]} alt="movImg" />
        <button onClick={()=> setCount(count+1)}>
            next
        </button>
        </div>
      
    </div>
  )
}

export default FirstExample
