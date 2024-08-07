import React from "react";
import SignoutButton from "./SignoutButton";
import Link from "next/link";

const Appbar = () => {
  return (
    <header className="flex justify-end gap-4 p-4 shadow">
      <Link href="/card-list" className="mr-auto">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 ">
          Pokémon App
        </h1>
      </Link>

      <SignoutButton />
    </header>
  );
};

export default Appbar;
