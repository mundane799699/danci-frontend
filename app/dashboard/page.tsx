import React from "react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">欢迎使用邮件单词</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-600">
          <div>
            <h2 className="text-xl font-semibold mb-3">邮件设置</h2>
            <p className="text-gray-600 mb-4">
              设置您的邮箱地址、单词数量和发送时间
            </p>
          </div>
          <Link
            href="/dashboard/email-settings"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            去设置 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
