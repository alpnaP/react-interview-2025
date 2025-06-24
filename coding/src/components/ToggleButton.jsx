// implement toggle button component with label and icon
import React, { useState } from "react";

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);    
    return (
        <button 
            onClick={() => setIsOn(!isOn)} 
            style={{ 
                backgroundColor: isOn ? 'green' : 'red', 
                color: 'white', 
                padding: '10px 20px', 
                border: 'none', 
                borderRadius: '5px' 
            }}
        >
            {isOn ? 'ON' : 'OFF'}
        </button>       
    )
}
export default ToggleButton;