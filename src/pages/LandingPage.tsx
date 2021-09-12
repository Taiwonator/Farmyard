import React from 'react'
import './LandingPage.scss'
import Grass from './assets/grass.png';
import Cow from './assets/cow.png';
import Arrow from '../stories/arrow';
import Header from '../stories/header';
import FlexWrapper from '../wrappers/FlexWrapper';
import Button from '../stories/button';

const LandingPage: React.FC = _ => {
    return (
        <FlexWrapper 
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
            
        </FlexWrapper>
    )
}

export default LandingPage

