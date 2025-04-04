"use client";

import React, { useEffect, useState } from "react";
import { getEmailSettings } from "@/services/mail";
import Loader from "./Loader";
import SubscribeCard from "./SubscribeCard";
import { Plus } from "lucide-react";
import { useSubscribeMailStore } from "@/store/subscribeMailStore";
import MailSubscribeModal from "./MailSubscribeModal";

const EmailSettingsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { subscribe, setSubscribe } = useSubscribeMailStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEmailSettings = async () => {
      try {
        setIsLoading(true);
        const data = (await getEmailSettings()) as any;
        setSubscribe(data);
      } catch (error) {
        console.log("获取邮件设置失败:", error);
        setSubscribe(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEmailSettings();
  }, []);

  if (isLoading) {
    return <Loader className="h-64" />;
  }

  return (
    <div className="flex flex-col gap-y-2">
      {subscribe ? (
        <SubscribeCard />
      ) : (
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex flex-col gap-y-2 items-center justify-center p-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer w-40 h-40 mx-auto"
        >
          <Plus className="h-10 w-10" />
          新建
        </div>
      )}

      <MailSubscribeModal
        initData={null}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default EmailSettingsForm;
