import { useState } from 'react'
import './App.css'

export function Questions2({question,answer}) {
    const [isViewing,setIsViewing]=useState(false)

    const text = isViewing ? '-' : '+'

    const handleClick = () => {
        setIsViewing(!isViewing)
    }

    return (
        <div className='questionAndAnswer' onClick={handleClick}>
            <div className='qAndA'>
                <h2 className='qAndA-info'>{question}</h2>
            </div>
            <div className='qAndA'>
                {isViewing ? <p className='qAndA-info'>{answer}</p> : null}
            </div>
        </div>
    )
}
