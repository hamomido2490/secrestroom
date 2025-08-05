import React from 'react';

const Input = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  className = '',
  ...props 
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-2 text-right">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
