import { useState } from 'react'

const ClickCounter = ({ title = '‎', message = 'Please click on me now !' }) => {
    const [count, setCount] = useState(0)
    const [onButton, setButton] = useState(false);

    return (
        <div className="card">
        <p>{onButton ? title : message}</p>   
        <button onMouseEnter={() => setButton((true))} onMouseLeave={() => setButton(false)} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {count >= 10 ? `You are a master in the art of clicking !` : title}
        </p>
      </div>
    )
}

export default ClickCounter;