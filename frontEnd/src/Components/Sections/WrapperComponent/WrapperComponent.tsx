import React from 'react';

interface WrapperComponentProps {
  children: React.ReactElement;
}

export const WrapperComponent = ({ children }: WrapperComponentProps) => {
  return(
    <div className="h-[100vh] flex flex-col justify-between bg-slate-800">
        <Header />
        {children}
        <Footer />
    </div>
  );
};


const Header = () => {
    return (
        <div className='h-[8%] bg-[#b2f1e8] p-2 text-[16px]'>Header Component</div>
    )
}

const Footer = () => {
  return (
    <div className="h-[6%] bg-[#b7dcfa] p-2 text-[16px]">Footer Component</div>
  );
};