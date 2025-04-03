import React from "react";
import Sidebar from "@/components/Sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* 左侧侧边栏 */}
      <Sidebar />

      {/* 右侧内容区域 */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

export default RootLayout;
