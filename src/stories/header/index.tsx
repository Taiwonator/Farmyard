import React from 'react'
import './header.scss'
import classNames from 'classnames'

interface HeaderProps {
    text: string, 
    uppercase?: boolean,
    Tag?: keyof JSX.IntrinsicElements
}

const Header: React.FC<HeaderProps> = props => {
    const { text, uppercase, Tag } = props

    let TagName = Tag ? Tag : 'h1'


    return (
        <TagName 
            className={classNames({'header--uppercase': uppercase})}>
            { text }
        </TagName>
    )
}

export default Header