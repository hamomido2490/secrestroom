import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = variant === 'primary' 
    ? 'btn-primary' 
    : 'btn-secondary';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

