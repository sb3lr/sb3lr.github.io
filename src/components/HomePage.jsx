import React from 'react';
import WelcomeSection from './WelcomeSection';
import WhyMadarSection from './WhyMadarSection';

function HomePage({ welcomeData, whyMadarData }) {
  return (
    <>
      <WelcomeSection data={welcomeData} />
      <WhyMadarSection data={whyMadarData} />
    </>
  );
}

export default HomePage;