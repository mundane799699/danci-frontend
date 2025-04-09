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
          <h2 className="text-xl font-semibold mb-3">历史邮件</h2>
          <p className="text-gray-600 mb-4">查看您的历史邮件</p>
          <Link
            href="/dashboard/history-email"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            查看历史邮件 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
