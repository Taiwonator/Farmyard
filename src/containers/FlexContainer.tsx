import React from 'react'
import './FlexContainer.css'

type FlexContainerProps = {
    children: React.ReactNode, 
    name: string, 
    Tag?: keyof JSX.IntrinsicElements
}

const FlexContainer: React.FC<FlexContainerProps> = props => {
    const { children, name, Tag } = props

    let TagName = Tag ? Tag : 'div'
 
    return (
        <TagName className={`flex-container flex-container--center ${name}`}>
            {children}
        </TagName>
    )
}

export default FlexContainer