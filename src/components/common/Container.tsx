import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {children}
    </div>
  );
};

export default Container;