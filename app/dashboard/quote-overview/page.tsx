import React from "react";
import { QuoteTable } from "./_components/QuoteTable";

const QuoteOverviewPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">金句总览</h1>
        <p className="text-sm text-gray-600">每日精选金句，提升你的心力</p>
      </div>
      <QuoteTable />
    </div>
  );
};

export default QuoteOverviewPage;
