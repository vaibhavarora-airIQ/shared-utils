import React from 'react';

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
  className = '',
  variant = 'default'
}) => {
  const baseStyles = 'rounded-lg p-6 transition-all duration-200';
  
  const variantStyles = {
    default: 'bg-white shadow-md',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border-2 border-gray-200'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          {title}
        </h3>
      )}
      <div className="text-gray-600">
        {children}
      </div>
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};
