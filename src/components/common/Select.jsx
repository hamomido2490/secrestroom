import React from 'react';

const Select = ({ 
  label, 
  value, 
  onChange, 
  options = [],
  className = '',
  ...props 
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-2 text-right">{label}</label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white ${className}`}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

