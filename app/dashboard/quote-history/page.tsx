import React from "react";
import { QuoteHistoryTable } from "./_components/QuoteHistoryTable";

const QuoteHistoryPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">历史金句邮件</h1>
        <p className="text-sm text-gray-600">查看你接收到的所有金句邮件</p>
      </div>
      <QuoteHistoryTable />
    </div>
  );
};

export default QuoteHistoryPage;
