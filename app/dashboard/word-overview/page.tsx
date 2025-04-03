import React from "react";

const WordOverviewPage = () => {
  // 模拟单词数据，实际应用中应该从API获取
  const words = [
    {
      id: 1,
      word: "apple",
      meaning: "苹果",
      example: "I eat an apple every day.",
    },
    {
      id: 2,
      word: "banana",
      meaning: "香蕉",
      example: "The monkey likes bananas.",
    },
    {
      id: 3,
      word: "orange",
      meaning: "橙子",
      example: "Would you like an orange juice?",
    },
    {
      id: 4,
      word: "grape",
      meaning: "葡萄",
      example: "These grapes are very sweet.",
    },
    {
      id: 5,
      word: "strawberry",
      meaning: "草莓",
      example: "I love strawberry ice cream.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">单词总览</h1>

      <div className="bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                单词
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                释义
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                例句
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {words.map((word) => (
              <tr key={word.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {word.word}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {word.meaning}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {word.example}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    编辑
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    删除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-500">共 {words.length} 个单词</div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          添加新单词
        </button>
      </div>
    </div>
  );
};

export default WordOverviewPage;
