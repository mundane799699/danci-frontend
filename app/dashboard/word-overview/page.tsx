import React from "react";
import { WordsTable } from "./_components/WordsTable";
const WordOverviewPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">单词总览</h1>
      <WordsTable />
    </div>
  );
};

export default WordOverviewPage;
