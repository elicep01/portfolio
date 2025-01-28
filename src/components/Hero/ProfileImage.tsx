import React from 'react';

const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src="/profile.jpeg" 
          alt="Elice Priyadarshini"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ProfileImage;