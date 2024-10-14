import { useContext } from 'react';
import { Context as CounterContext } from '../../contexts/counterContext';

const BadButton = () => {
    const { increaseBad, badCount } = useContext(CounterContext);
    return (
        <div>
            Bad : {badCount}  
            <button onClick={increaseBad}>increase bad</button>
        </div>        
);
};

export default BadButton;