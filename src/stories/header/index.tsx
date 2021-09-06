import React from 'react'

type HeaderProps = {
<<<<<<< HEAD
    text: string, 
    Tag?: keyof JSX.IntrinsicElements
}

const Header: React.FC<HeaderProps> = props => {
    const { text, Tag } = props

    let TagName = Tag ? Tag : 'h1'

    return <TagName>{ text }</TagName>
=======
    Tag: keyof JSX.IntrinsicElements, 
    text: string
}

const Header: React.FC<HeaderProps> = props => {
    const { Tag, text } = props

    return <Tag>{ text }</Tag>
>>>>>>> c11ced9a2ec750fc773c5b67ab5d91ea94c73b38
}

export default Header