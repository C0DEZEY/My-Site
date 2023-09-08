import React from 'react';

const Section = ({ title, gradientColor }) => {
  const sectionStyle = `bg-gradient-to-r ${gradientColor} py-20`;

  return (
    <section className={sectionStyle}>
      <h2 className="text-4xl font-bold text-white mb-8">{title}</h2>
      {}
    </section>
  );
};

export default Section;
