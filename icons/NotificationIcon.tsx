import React from 'react';

interface NotificationIconProps {
  className?: string;
  fill?: string;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ 
  className = '', 
  fill = '#555' 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M22 20l-.421-7.421C21.158 7.947 18.186 5 14 5s-7.158 2.947-7.579 7.579L6 20h4.76a3.25 3.25 0 006.48 0H22zM7.588 18.5l.33-5.81c.187-2.016.916-3.553 1.94-4.575C10.878 7.098 12.277 6.5 14 6.5c1.723 0 3.123.598 4.142 1.615 1.024 1.022 1.753 2.559 1.94 4.575l.33 5.81H7.589zm8.144 1.5h-3.464a1.75 1.75 0 003.464 0z" 
        fill={fill}
      />
    </svg>
  );
};

export default NotificationIcon; 