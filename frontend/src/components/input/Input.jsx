
import React from 'react';

const Input = ({ placeholder, name, value, onChange,className }) => {
  return (
    <input type="text" placeholder={placeholder} name={name} value={value} onChange={onChange} className={className} />
  );
};

export default Input;
