import React from 'react';

interface SectionHeaderProps {
  className?: string;
  content: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ className = '', content }) => {
  return (
    <div className={`${className} text-3xl font-bold text-blak`}>
      {content}
    </div>
  );
};

export default SectionHeader;
