import { useContext } from 'react';
import { Context as CounterContext } from '../../contexts/counterContext';

const OkButton = () => {
    const { increaseOk, okCount } = useContext(CounterContext);
    return (
        <div>
            Ok : {okCount}  
            <button onClick={increaseOk}>increase ok</button>
        </div>        
);
};

export default OkButton;