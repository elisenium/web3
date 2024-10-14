import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = ({ children }) => {
    const [goodCount, setGoodCount] = useState(0);
    const [okCount, setOkCount] = useState(0);
    const [badCount, setBadCount] = useState(0);

    const increaseGood = () => setGoodCount(goodCount + 1);
    const increaseOk = () => setOkCount(okCount + 1);
    const increaseBad = () => setBadCount(badCount + 1);
    const resetAll = () => {
        setGoodCount(0);   
        setOkCount(0);   
        setBadCount(0);   
    }
    
    const exposedValue = {
        goodCount,
        okCount,
        badCount,
        increaseGood,
        increaseOk,
        increaseBad,
        resetAll
    }
    return <Context.Provider value={exposedValue}>{children}</Context.Provider>    
}
    
export { Context, ProviderWrapper }