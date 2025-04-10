import React from "react";
import HistoryTable from "./_components/HistoryTable";
const HistoryEmailPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">历史邮件</h1>
      <HistoryTable />
    </div>
  );
};

export default HistoryEmailPage;
