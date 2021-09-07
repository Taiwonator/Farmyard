import React from 'react'
import './PageWrapper.scss'

interface PageWrapper {
    children: React.ReactNode
}
 
const PageWrapper: React.FC = props => {
const { children } = props

    return (
        <div className='page-wrapper'>
            {children}
        </div>
    )
}

export default PageWrapper
