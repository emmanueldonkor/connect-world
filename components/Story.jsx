
import React from "react";

const Story = ({ image, username }) => {
  return (
    <div className="flex flex-col items-center space-y-1 cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={`${username}'s story`}
          className="rounded-full w-16 h-16 object-cover border-2 border-blue-500 p-1"
        />
        <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
          {/* You can add an icon or border here to indicate that it's a story */}
        </div>
      </div>
      <p className="text-xs">{username}</p>
    </div>
  );
};

export default Story;