"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const Sidebar = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "首页", path: "/dashboard" },
    { name: "邮件设置", path: "/dashboard/email-settings" },
    { name: "单词总览", path: "/dashboard/word-overview" },
    { name: "偏好设置", path: "/dashboard/preferences" },
  ];

  return (
    <div className="w-64 bg-gray-100 p-4 border-r border-gray-200">
      <Logo className="mb-6" />
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
