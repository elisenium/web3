import { useState } from 'react'

const ClickCounter = ({ title }) => {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {count >= 10 ? `You are a master in the art of clicking !` : title}
        </p>
      </div>
    )
}

export default ClickCounter;