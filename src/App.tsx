import React from 'react';
import LandingPage from './pages/LandingPage';
import PageWrapper from './wrappers/PageWrapper';

const App: React.FC = () => {
  return (
    <PageWrapper>
      <LandingPage />
    </PageWrapper>
  );
}

export default App;
