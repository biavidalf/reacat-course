/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const Input = forwardRef(
  ({ label, type }, ref) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-lg">{label}</label>
            <input type={type} ref={ref} className="py-1 bg-gray-600 rounded shadow-sm"/>
        </div>
    );
  }
);

export default Input;