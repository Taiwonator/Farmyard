import React from 'react'
import './FlexWrapper.scss'
import classNames from 'classnames'

interface FlexWrapperProps {
    children: React.ReactNode, 
    name: string, 
    Tag?: keyof JSX.IntrinsicElements, 
    page?: boolean,
    center?: boolean,
}

const FlexWrapper: React.FC<FlexWrapperProps> = props => {
    const { children, name, Tag, page, center } = props

    let TagName = Tag ? Tag : 'div'
    let otherClassNames = classNames(
        { 'flex-wrapper--page': page },
        { 'flex-wrapper--center': center }
    )

    return (
        <TagName className={`flex-wrapper ${name} ${otherClassNames}`}>
            {children}
        </TagName>
    )
}

export default FlexWrapper