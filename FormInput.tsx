
import React from 'react';

interface FormInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const FormInput = ({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  placeholder,
  required = true 
}: FormInputProps) => {
  return (
    <div className="mb-6">
      <label className="block text-white text-lg font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cpmYellow"
      />
    </div>
  );
};

export default FormInput;
