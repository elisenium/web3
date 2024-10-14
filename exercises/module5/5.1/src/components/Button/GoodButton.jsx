import { useContext } from 'react';
import { Context as CounterContext } from '../../contexts/counterContext';

const GoodButton = () => {
    const { increaseGood, goodCount } = useContext(CounterContext);
    return (
        <div>
            Good : {goodCount}  
            <button onClick={increaseGood}>increase good</button>
        </div>        
);
};

export default GoodButton;