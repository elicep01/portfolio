import React from 'react';

const ProfileImage = () => {
  return (
    <div className="relative mx-auto md:mx-0 max-w-[256px]">
      <div className="w-48 md:w-64 h-60 md:h-80 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src="/profile.jpeg" 
          alt="Elice Priyadarshini"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ProfileImage