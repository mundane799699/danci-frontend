"use client";

import React, { useState, useEffect } from "react";
import { Subscribe } from "@/types/Subscribe";
import { X } from "lucide-react";
import { createEmailSettings, updateEmailSettings } from "@/services/mail";
import { useSubscribeMailStore } from "@/store/subscribeMailStore";
import { toast } from "sonner";
interface EditSubscribeModalProps {
  initData: Subscribe | null;
  isOpen: boolean;
  onClose: () => void;
}
const defaultFormData = {
  id: 0,
  email: "",
  mail_type: "word", // word or quote
  word_count: 0,
  send_time: "",
};

const MailSubscribeModal = ({
  initData,
  isOpen,
  onClose,
}: EditSubscribeModalProps) => {
  const [formData, setFormData] = useState<Subscribe>(
    initData || defaultFormData
  );

  useEffect(() => {
    if (isOpen) {
      setFormData(initData || defaultFormData);
    }
  }, [isOpen, initData]);
  const [isLoading, setIsLoading] = useState(false);
  const { setSubscribe } = useSubscribeMailStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let result;
      if (initData) {
        result = await updateEmailSettings(formData);
        toast.success("邮件订阅更新成功！");
      } else {
        result = await createEmailSettings(formData);
        toast.success("邮件订阅创建成功！");
      }
      setSubscribe(result as any);
      onClose();
    } catch (error) {
      console.log("邮件订阅更新失败:", error);
      toast.error("保存失败");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="关闭"
        >
          <X className="h-5 w-5" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              订阅邮箱地址
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="请输入您的邮箱地址"
              required
            />
          </div>

          <div>
            <label
              htmlFor="mailType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              邮件类型
            </label>
            <select
              id="mailType"
              name="mail_type"
              value={formData.mail_type || "word"}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, mail_type: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="word">单词</option>
              <option value="quote">金句</option>
            </select>
          </div>

          {formData.mail_type !== "quote" && (
            <div>
              <label
                htmlFor="wordCount"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                每封邮件的单词数量
              </label>
              <input
                type="number"
                id="wordCount"
                name="word_count"
                min="3"
                max="10"
                value={formData.word_count}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    word_count: parseInt(e.target.value),
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="3-10个单词"
                required
              />
            </div>
          )}

          <div>
            <label
              htmlFor="sendTime"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              邮件发送时间
            </label>
            <input
              type="time"
              id="sendTime"
              name="send_time"
              value={formData.send_time}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, send_time: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div className="pt-4 flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "保存中..." : "保存设置"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailSubscribeModal;
