import React from 'react';
import LandingPage from './pages/LandingPage';
import LandingPageCool from './pages/LandingPageCool';
import PageWrapper from './wrappers/PageWrapper';
import Cow from './pages/assets/cow.png';
import Grass from './pages/assets/grass.png';
import Header from './stories/header';

const App: React.FC = () => {
  return (
    <PageWrapper>
      <LandingPage />
      <LandingPageCool 
        style={{
          orientation: 'LEFT',
          image: Cow,
          backgroundColor: 'white'
        }}
        buttons={{
          text: 'Mooove', 
          color: 'brown', 
          action: () => console.log('hello')
        }}
        subheader='Where components come to thrive'
        header={'hello'}
        HeaderOverride={LandingPageHeader}
      />
    </PageWrapper>
  );
}

const LandingPageHeader: React.FC = _ => (
  <React.Fragment>
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
  </React.Fragment>
)

export default App;
