"use client";

import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import MailSubscribeModal from "./MailSubscribeModal";
import { useSubscribeMailStore } from "@/store/subscribeMailStore";
import Modal from "./Modal";
import { deleteEmailSettings } from "@/services/mail";
import { toast } from "sonner";

const SubscribeCard = () => {
  const { subscribe, setSubscribe } = useSubscribeMailStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  if (!subscribe) return null;

  const deleteSubscribe = async () => {
    try {
      await deleteEmailSettings(subscribe.id);
      setSubscribe(null);
      setIsDeleteModalOpen(false);
      toast.success("邮件订阅删除成功！");
    } catch (error) {
      console.log("邮件订阅删除失败", error);
      toast.error("邮件订阅删除失败");
    }
  };

  return (
    <>
      <div className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-40">
              邮箱地址:
            </span>
            <span className="text-sm text-gray-900 dark:text-white">
              {subscribe.email}
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-40">
              每日发送时间:
            </span>
            <span className="text-sm text-gray-900 dark:text-white">
              {subscribe.send_time}
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-40">
              每封邮件的单词数量:
            </span>
            <span className="text-sm text-gray-900 dark:text-white">
              {subscribe.word_count}
            </span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
            aria-label="编辑"
            onClick={() => setIsEditModalOpen(true)}
          >
            <Pencil className="h-5 w-5" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
            aria-label="删除"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MailSubscribeModal
        initData={subscribe}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <Modal
        isOpen={isDeleteModalOpen}
        onConfirm={deleteSubscribe}
        onCancel={() => {
          setIsDeleteModalOpen(false);
        }}
        content="确定删除该邮件订阅吗？"
      />
    </>
  );
};

export default SubscribeCard;
