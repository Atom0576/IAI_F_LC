import React from "react";

export function Avatar({ player }) {
  return (
    <img
      className="h-full w-full rounded-md shadow bg-white p-1"
      src={`https://avatars.dicebear.com/api/identicon/${player.id}.svg`}
      //src={"https://api.dicebear.com/7.x/adventurer/svg?seed=Cookie"}
      alt="Avatar"
    />
  );
}
 


