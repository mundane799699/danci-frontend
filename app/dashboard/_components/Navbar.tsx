import React from "react";
import { Menu } from "lucide-react";
import Logo from "@/components/Logo";
interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center h-full px-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
        <Logo className="ml-4" />
      </div>
    </nav>
  );
};

export default Navbar;
