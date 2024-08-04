import React from 'react';
import { Div } from './HeroBgAnimationStyle';
import Lottie from 'lottie-react';
import animacion from './Animation - 1722664543984.json';

const HeroBgAnimation = () => (
  <Div>
    <Lottie animationData={animacion} loop={true} />
  </Div>
);

export default HeroBgAnimation;