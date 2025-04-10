import React from "react";
import { WordsTable } from "./_components/WordsTable";
import Link from "next/link";

const WordOverviewPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">单词总览</h1>
        <p className="text-sm text-gray-600">
          单词数据来自于{" "}
          <Link
            href="https://github.com/Ceelog/DictionaryByGPT4"
            className=" text-blue-500 hover:text-blue-700 font-medium underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            DictionaryByGPT4
          </Link>
        </p>
      </div>
      <WordsTable />
    </div>
  );
};

export default WordOverviewPage;
