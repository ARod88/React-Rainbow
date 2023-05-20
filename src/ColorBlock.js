import React from 'react'

function ColorBlock(props) {
    const handleRemoveColor = () => {
        props.removeColor();
    }
return (
    <div className='colorBlock'
    style= {{'backgroundColor': props.color}}>
        <p>{props.color}</p>
        <button onClick={handleRemoveColor}>Remove</button>
    </div>
)

}

export default ColorBlock