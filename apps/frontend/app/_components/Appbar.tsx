import React from "react";
import SignoutButton from "./SignoutButton";

const Appbar = () => {
  return (
    <header className="flex justify-end gap-4 p-4 shadow">
      <h1 className="text-2xl font-bold leading-7 text-gray-900 mr-auto">
        Pokémon App
      </h1>
      <SignoutButton />
    </header>
  );
};

export default Appbar;
