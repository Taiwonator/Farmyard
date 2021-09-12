import React from 'react'
import FlexWrapper from '../wrappers/FlexWrapper'
import { LandingPageButtonProps } from './LandingPageCool'
import Button from '../stories/button';
import Arrow from '../stories/arrow';
import './LandingPage.scss'

interface LeftLandingPageProps {
    header: string,
    HeaderOverride: React.ComponentType, 
    subheader: string | React.ReactNode, 
    image: string, 
    backgroundColor: string
    text?: string, 
    buttons?: LandingPageButtonProps | 
              LandingPageButtonProps[],
}

const LeftLandingPage: React.FC<LeftLandingPageProps> = props => {

    const {
        header, 
        HeaderOverride,
        subheader, 
        image, 
        backgroundColor, 
        text, 
        buttons
    } = props

    return(
       <FlexWrapper
        Tag="section" 
        name='landing-page' 
        page>

            <div className='landing-page__left'>
                <HeaderOverride />
                <p className='landing-page__text'>{subheader}</p>

                <Button text='Mooove'><Arrow /></Button>
                
            </div>

            <div className='landing-page__right'>
                <img src={image} alt="" />
            </div>

       </FlexWrapper>
    )
}

export default LeftLandingPage;

{/* <FlexWrapper 
Tag="section" 
name='landing-page' 
page
>
    
<div className='landing-page__left'>
    <div className='landing-page__header-row landing-page__header-row--top'>

        <Header 
            Tag='h3' 
            text='The' 
            uppercase 
        />

        <img className='landing-page__grass' src={Grass} alt='grass-drawing' />
    </div>
    <div className='landing-page__header-row landing-page__header-row--bottom'>
        <h1 className='landing-page__header'><span>Farm</span>yard</h1>
    </div>
    <p className='landing-page__text'>Where components come to thrive.</p>

    <Button text='Mooove'><Arrow /></Button>
    
</div>

<div className='landing-page__right'>
    <img className='landing-page__cow' src={Cow} alt='cow' />  
</div>

</FlexWrapper> */}