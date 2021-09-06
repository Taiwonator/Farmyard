import React from 'react'
import './LandingPage.css'
import Grass from './assets/grass.png';
import Cow from './assets/cow.png';
import Arrow from '../stories/arrow';
import Header from '../stories/header';

const LandingPage: React.FC = () => {
    return (
        <section className='landing-page'>
            <div className='landing-page__left'>
                <div className='landing-page__header'>
                    <div className='landing-page__header-row landing-page__header-row--top'>
                        <Header Tag='h3' text='The'/>
                        <img className='landing-page__grass' src={Grass} alt='grass-drawing' />
                    </div>
                    <div className='landing-page__header-row landing-page__header-row--bottom'>
                        <h1 className='landing-page__header'><span>Farm</span>yard</h1>
                    </div>
                </div>
                <p className='landing-page__text'>Where components come to thrive.</p>
                <button className='landing-page__button'>Moove<Arrow /></button>
            </div>
            <div className='landing-page__right'>
                <img className='landing-page__cow' src={Cow} alt='cow' />  
            </div>
        </section>
    )
}

export default LandingPage

