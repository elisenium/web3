import { useState } from 'react'

const ClickCounter = ({ title = '‎', message = 'Please click on me now !' }) => {

    const storedCount = JSON.parse(localStorage.getItem("count"));
    const [count, setCount] = useState(storedCount);
    const [onButton, setButton] = useState(false);


    return (
        <div className="card">
        <p>{onButton ? title : message}</p>   
        <button onMouseEnter={() => setButton((true))} 
          onMouseLeave={() => setButton(false)} 
          onClick={() => {
            const newCount = count + 1;
            setCount(newCount);
            localStorage.setItem("count", JSON.stringify(newCount));
          }}>
          count is {storedCount}
        </button>
        <p>
          {count >= 10 ? `You are a master in the art of clicking !` : title}
        </p>
      </div>
    )
}

export default ClickCounter;