import React from "react";

function Navbar() {
  return (
    <nav className="sticky flex bg-red-500 w-screen text-white justify-between p-2 items-center top-0 left-0">
      <div className="logo">Rasonix</div>
      <div className="">
        <button className="bg-blue-600 border-2 border-black p-2 rounded-s-md">
          Login
        </button>
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;
