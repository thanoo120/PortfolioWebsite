import React from 'react';
import { Cursor, Typewriter } from 'react-simple-typewriter';

const TypingEffect = ({ words }) => {
  return (
    <span>
      <Typewriter words={words} loop={0} typeSpeed={80} deleteSpeed={40} delaySpeed={1500} />
      <Cursor cursorStyle="|" />
    </span>
  );
};

export default TypingEffect;
