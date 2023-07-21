import React from 'react';

const Button = ({ 
    title,
    className,
    onClick,
    label
}) => {
  return (
    <div>
      <button
        type="button"
        title={title}
        className={className}
        onClick={onClick}
        aria-label={label}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
