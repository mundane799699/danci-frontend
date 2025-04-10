import React from "react";
import HistoryTable from "./_components/HistoryTable";
const HistoryEmailPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">历史邮件</h1>
      <HistoryTable />
    </div>
  );
};

export default HistoryEmailPage;
