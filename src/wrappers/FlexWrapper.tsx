import React from 'react'
import './FlexWrapper.scss'

interface FlexWrapperProps {
    children: React.ReactNode, 
    name: string, 
    Tag?: keyof JSX.IntrinsicElements
}

const FlexWrapper: React.FC<FlexWrapperProps> = props => {
    const { children, name, Tag } = props

    let TagName = Tag ? Tag : 'div'
 
    return (
        <TagName className={`flex-wrapper flex-wrapper--center ${name}`}>
            {children}
        </TagName>
    )
}

export default FlexWrapper