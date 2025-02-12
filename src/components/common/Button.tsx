import React from 'react';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const Button = ({ href, variant = 'primary', children, onClick }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-lg transition-colors";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "border border-gray-300 hover:border-primary hover:text-primary"
  };

  return (
    <a 
      href={href} 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Button;