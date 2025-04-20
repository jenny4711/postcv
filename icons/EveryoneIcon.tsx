import React from 'react';

interface EveryoneIconProps {
  className?: string;
  fill?: string;
}

const EveryoneIcon: React.FC<EveryoneIconProps> = ({ 
  className = '', 
  fill = '#999' 
}) => {
  return (
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 28 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M8.81 8.702a7.418 7.418 0 0112.516 4.131h-1.493a.583.583 0 00-.466.934l2.333 3.11c.233.312.7.312.933 0l2.334-3.11a.583.583 0 00-.467-.934h-1.659A8.918 8.918 0 007.76 7.631a.75.75 0 101.05 1.071zM5.159 15.167H3.5a.583.583 0 01-.467-.934l2.334-3.11a.583.583 0 01.933 0l2.333 3.11a.583.583 0 01-.466.934H6.675a7.419 7.419 0 0012.516 4.13.75.75 0 111.05 1.072A8.918 8.918 0 015.16 15.167z" 
        fill={fill}
      />
    </svg>
  );
};

export default EveryoneIcon; 