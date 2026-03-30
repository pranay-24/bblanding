import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
    <a href="/" className="flex items-center">
    <div className="relative w-52">
      <img 
        src="/images/New-Logo_w6yqqg.svg" 
        alt="BlueBest Plumbing Heating Air Generators" 
        className="w-full h-auto"
      />
    </div>
  </a>
</div>
  );
};

export default Logo;