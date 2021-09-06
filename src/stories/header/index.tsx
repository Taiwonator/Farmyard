import React from 'react'

type HeaderProps = {
    Tag: keyof JSX.IntrinsicElements, 
    text: string
}

const Header: React.FC<HeaderProps> = props => {
    const { Tag, text } = props

    return <Tag>{ text }</Tag>
}

export default Header