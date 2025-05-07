import React from "react";
import { useState } from "react";

const HomePage = () => {
  let [counter, setCount] = useState(1)
  const handleClick = () => {
    setCount(counter + 1);
    console.log('click ' + counter);
  }
  return (
    <div>
        <h1>This Home page</h1>
        {counter}
        <button onClick={handleClick}>+1</button>
    </div>
  );
}

export default HomePage;