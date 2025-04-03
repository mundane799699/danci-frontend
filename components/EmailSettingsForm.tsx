"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  createEmailSettings,
  getEmailSettings,
  updateEmailSettings,
} from "@/services/mail";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loader from "./Loader";

const EmailSettingsForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isInitLoading, setIsInitLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    word_count: 0,
    send_time: "",
  });
  const previousData = useRef(null);

  useEffect(() => {
    const fetchEmailSettings = async () => {
      try {
        setIsInitLoading(true);
        const response = (await getEmailSettings()) as any;
        setFormData(response);
        previousData.current = response;
      } catch (error) {
        console.log("获取邮件设置失败:", error);
      } finally {
        setIsInitLoading(false);
      }
    };
    fetchEmailSettings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (previousData.current) {
        await updateEmailSettings(formData);
        toast("邮件设置更新成功！");
      } else {
        await createEmailSettings(formData);
        toast("邮件设置新增成功！");
      }

      router.refresh();
    } catch (error) {
      console.error("保存设置失败:", error);
      toast.error("保存设置失败，请重试");
    } finally {
      setIsLoading(false);
    }
  };

  if (isInitLoading) {
    return <Loader className="h-64" />;
  }

  return (
    // 我要把这个封装到一个Modal里，form里原本显示的数据放到一个普通的span或者div中
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="请输入您的邮箱地址"
          required
        />
      </div>

      <div>
        <label
          htmlFor="wordCount"
          className="block text-sm font-medium text-gray-700 mb-1"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="3-10个单词"
          required
        />
      </div>

      <div>
        <label
          htmlFor="sendTime"
          className="block text-sm font-medium text-gray-700 mb-1"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "保存中..." : "保存设置"}
        </button>
      </div>
    </form>
  );
};

export default EmailSettingsForm;
