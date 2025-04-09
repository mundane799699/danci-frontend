import React from "react";
import Sidebar from "@/components/Sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* 左侧侧边栏 - 固定位置 */}
      <div className="fixed h-screen">
        <Sidebar />
      </div>

      {/* 右侧内容区域 - 添加左边距以避免被侧边栏遮挡 */}
      <div className="flex-1 p-6 ml-64">{children}</div>
    </div>
  );
};

export default RootLayout;
