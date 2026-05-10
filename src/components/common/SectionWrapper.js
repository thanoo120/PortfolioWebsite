import React from 'react';

const SectionWrapper = ({ id, children, className = '' }) => (
  <section id={id} className={`px-4 py-20 sm:px-8 lg:px-16 ${className}`}>
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

export default SectionWrapper;
