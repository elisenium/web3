import { useState } from 'react';

const Statistics = (props) => {
    if (props.all === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        );
    }
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text="good" value={props.good} />
                    <StatisticLine text="neutral" value={props.neutral} />
                    <StatisticLine text="bad" value={props.bad} />
                    <StatisticLine text="all" value={props.all} />
                    <StatisticLine text="average" value={props.average} />
                    <StatisticLine text="positive" value={props.positive*100 + " %"} />
                </tbody>
            </table>
            
        </div>
    );    
}

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    );
}

const App = () => {

    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        setAll(bad + good + neutral + 1)
        setAverage((good - bad + 1) / (all+1))
        setPositive((good + 1) / (all+1))
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setAll(bad + good + neutral + 1)
        setPositive((good) / (all+1))

    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setAll(bad + good + neutral + 1)
        setAverage((good - bad - 1) /(all+1))
        setPositive((good) / (all+1))
    }

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGoodClick}>good</button>
            <button onClick={handleNeutralClick}>neutral</button>
            <button onClick={handleBadClick}>bad</button>

            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
        </div>
    );
};

export default App;