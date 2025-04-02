
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CpmButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const CpmButton = ({ children, to, onClick, type = "button", className }: CpmButtonProps) => {
  const baseClasses = "bg-cpmYellow hover:bg-yellow-500 text-cpmBlack font-bold py-3 px-8 rounded-md shadow-md transition-all duration-300 text-lg";
  
  if (to) {
    return (
      <Link to={to} className={cn(baseClasses, className)}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={cn(baseClasses, className)}
    >
      {children}
    </button>
  );
};

export default CpmButton;
