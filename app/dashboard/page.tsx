import React from "react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">欢迎使用邮件单词</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">邮件设置</h2>
          <p className="text-gray-600 mb-4">
            设置您的邮箱地址、单词数量和发送时间
          </p>
          <Link
            href="/dashboard/email-settings"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            去设置 →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">单词总览</h2>
          <p className="text-gray-600 mb-4">查看和管理您的单词库</p>
          <Link
            href="/dashboard/word-overview"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            查看单词 →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">偏好设置</h2>
          <p className="text-gray-600 mb-4">自定义您的学习体验</p>
          <Link
            href="/dashboard/preferences"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            设置偏好 →
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">学习进度</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">本月学习</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <span className="text-sm font-medium">65%</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">已学习 65 个单词</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">连续学习</h3>
            <div className="flex items-center">
              <div className="text-3xl font-bold text-blue-500 mr-2">7</div>
              <div>
                <p className="text-sm font-medium">天</p>
                <p className="text-xs text-gray-500">继续保持！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
