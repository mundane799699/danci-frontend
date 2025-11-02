import React from "react";
import UserNav from "@/components/UserNav";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center h-full justify-end">
        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
