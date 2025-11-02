import React, { useMemo } from "react";

interface Quote {
  id: number;
  content: string;
}

interface QuoteCardProps {
  quote: Quote;
}

// 定义一组柔和的背景颜色
const backgroundColors = [
  "bg-amber-50", // 米黄色
  "bg-pink-50", // 浅粉色
  "bg-green-50", // 浅绿色
  "bg-blue-50", // 浅蓝色
  "bg-purple-50", // 浅紫色
  "bg-teal-50", // 浅青色
  "bg-indigo-50", // 浅靛蓝色
  "bg-rose-50", // 浅玫瑰色
];

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  // 使用 useMemo 确保每次渲染时使用相同的背景颜色
  const backgroundColor = useMemo(() => {
    // 使用金句 ID 作为种子来生成一致的随机颜色
    const colorIndex = quote.id % backgroundColors.length;
    return backgroundColors[colorIndex];
  }, [quote.id]);

  return (
    <div
      key={quote.id}
      className={`p-6 rounded-md shadow-sm ${backgroundColor} relative`}
    >
      <div className="flex gap-2">
        <div className="text-lg text-gray-400">#{quote.id}</div>
        <p className="text-lg font-medium text-gray-800">{quote.content}</p>
      </div>
    </div>
  );
};
