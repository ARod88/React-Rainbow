import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // eliminate form behavior
        e.preventDefault()
        // add color
        props.addColor(input)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input}
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}


export default ColorForm