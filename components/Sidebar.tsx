"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

interface SidebarProps {
  onMenuClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onMenuClick }) => {
  const pathname = usePathname();

  const tabs = [
    { name: "首页", path: "/dashboard" },
    { name: "邮件设置", path: "/dashboard/email-settings" },
    { name: "金句总览", path: "/dashboard/quote-overview" },
    { name: "单词总览", path: "/dashboard/word-overview" },
    { name: "历史单词邮件", path: "/dashboard/history-email" },
  ];

  const handleLinkClick = () => {
    if (onMenuClick) {
      onMenuClick();
    }
  };

  return (
    <div className="h-full w-64 bg-gray-100 p-4 border-r border-gray-200">
      <nav>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.path}>
              <Link
                href={tab.path}
                className={`block p-3 rounded-lg ${
                  pathname === tab.path
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={handleLinkClick}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
