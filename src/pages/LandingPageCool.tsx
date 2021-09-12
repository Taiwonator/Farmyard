import React from 'react'
import LeftLandingPage from './LeftLandingPage'

export interface LandingPageProps {
    header: string, 
    HeaderOverride: React.ComponentType,
    subheader: string | React.ReactNode, 
    text?: string, 
    buttons?: LandingPageButtonProps | 
              LandingPageButtonProps[], 
    style: LandingPageStyle,


}

export type LandingPageStyle = {
    orientation: 'LEFT' | 'RIGHT',
    image: string,
    backgroundColor: string,
} | {
    orientation: 'CENTER',
    backgroundColor: string, 
    image?: string
}

export interface LandingPageButtonProps {
    text: string, 
    color: string, 
    action: () => void
}

const LandingPageCool: React.FC<LandingPageProps> = props => {
    
    const {
        header, 
        HeaderOverride,
        subheader, 
        text,
        style, 
        buttons, 
    } = props
    
    return (
        <LeftLandingPage
            header={header}
            HeaderOverride={HeaderOverride}
            subheader={subheader}
            text={text}
            buttons={buttons}
            image={style.image!}
            backgroundColor={style.backgroundColor}
        />
    )
}

export default LandingPageCool