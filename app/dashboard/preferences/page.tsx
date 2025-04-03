import React from "react";

const PreferencesPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">偏好设置</h1>

      <div className="bg-white shadow overflow-hidden rounded-lg p-6 space-y-6">
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            邮件格式设置
          </h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="includePronunciation"
                name="includePronunciation"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="includePronunciation"
                className="ml-2 block text-sm text-gray-700"
              >
                包含单词发音
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="includeExample"
                name="includeExample"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="includeExample"
                className="ml-2 block text-sm text-gray-700"
              >
                包含例句
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="includeSynonyms"
                name="includeSynonyms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="includeSynonyms"
                className="ml-2 block text-sm text-gray-700"
              >
                包含同义词
              </label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">学习设置</h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="difficulty"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                单词难度
              </label>
              <select
                id="difficulty"
                name="difficulty"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="easy">简单</option>
                <option value="medium">中等</option>
                <option value="hard">困难</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="wordType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                单词类型
              </label>
              <select
                id="wordType"
                name="wordType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">全部</option>
                <option value="noun">名词</option>
                <option value="verb">动词</option>
                <option value="adjective">形容词</option>
                <option value="adverb">副词</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">通知设置</h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="emailNotification"
                name="emailNotification"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="emailNotification"
                className="ml-2 block text-sm text-gray-700"
              >
                启用邮件通知
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="browserNotification"
                name="browserNotification"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="browserNotification"
                className="ml-2 block text-sm text-gray-700"
              >
                启用浏览器通知
              </label>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            保存设置
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPage;
