"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import { useEffect } from "react";

export default function StartButton() {
  const router = useRouter();
  const { user, fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser();
  }, []);

  const handleClick = () => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-gray-800 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-800"
    >
      开始使用
    </button>
  );
}
