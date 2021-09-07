import React from 'react'
import './button.scss'

interface ButtonProps {
    children: React.ReactNode,
    text: string, 
}

const Button: React.FC<ButtonProps> = props => {
    const { children, text } = props
        
    return (
        <button className='button'>
            <p>{text}</p> 
            {children}
        </button>
    )
}

export default Button;