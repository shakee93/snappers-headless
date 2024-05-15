import React from 'react';

interface SectionHeadingProps {
  className?: string;
  content: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ className = '', content }) => {
  return (
    <div className={`${className} text-3xl font-bold text-blak`}>
      {content}
    </div>
  );
};

export default SectionHeading;
