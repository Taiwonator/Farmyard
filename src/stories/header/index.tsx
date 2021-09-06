import React from 'react'

type HeaderProps = {
    text: string, 
    Tag?: keyof JSX.IntrinsicElements
}

const Header: React.FC<HeaderProps> = props => {
    const { text, Tag } = props

    let TagName = Tag ? Tag : 'h1'

    return <TagName>{ text }</TagName>
}

export default Header