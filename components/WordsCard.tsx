import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { Separator } from "@/components/ui/separator";

interface Word {
  id: number;
  word: string;
  content: string;
}

interface WordsCardProps {
  word: Word;
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

export const WordsCard: React.FC<WordsCardProps> = ({ word }) => {
  // 使用 useMemo 确保每次渲染时使用相同的背景颜色
  const backgroundColor = useMemo(() => {
    // 使用单词 ID 作为种子来生成一致的随机颜色
    const colorIndex = word.id % backgroundColors.length;
    return backgroundColors[colorIndex];
  }, [word.id]);

  // 处理content中的###标记，将其替换为**
  const processedContent = useMemo(() => {
    // 按行分割内容
    const lines = word.content.split("\n");

    // 处理每一行
    const processedLines = lines.map((line) => {
      // 检查是否包含"###"
      if (line.trim().includes("###") || line.trim().includes("##")) {
        // 提取"###"以外的内容
        const content = line.replace("#", "").trim();
        // 返回加粗格式的内容
        return `**${content}**`;
      }
      // 其他行保持不变
      return line;
    });

    // 重新组合行
    const content = processedLines.join("\n");
    return content;
  }, [word.content]);

  return (
    <div
      key={word.id}
      className={`p-4 rounded-md shadow-sm ${backgroundColor}`}
    >
      <div className="font-bold text-2xl text-center mb-2">{word.word}</div>
      <Separator className="my-4 bg-gray-400" />
      <div className="text-gray-600 mt-1 whitespace-pre-wrap">
        <ReactMarkdown>{processedContent}</ReactMarkdown>
      </div>
    </div>
  );
};
