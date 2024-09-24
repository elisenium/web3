import { useState } from 'react';
import './ColorBox.css'

const colors = ["red", "green", "blue", "yellow", "violet"];

const ColorBox = () => {
    const [currentColorIndex, setColorIndex] = useState(0);

    return (
        <div>
            <div className='colorBox' style={{ backgroundColor: colors[currentColorIndex] }}></div>

            <button className='colorBoxButton'
            onClick={() => {
                setColorIndex((currentColorIndex + 1) % colors.length)
            }}>
                {colors[(currentColorIndex + 1) % colors.length]}
            </button>
        </div>
    );
}

export default ColorBox;