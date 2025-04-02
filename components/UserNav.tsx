"use client";

import { useUserStore } from "@/store/useUserStore";
import Link from "next/link";
import { useEffect } from "react";

export default function UserNav() {
  const { user, fetchUser, logout } = useUserStore();
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <nav className="absolute top-0 right-0 p-6">
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {user.username}
            </span>
            <button
              onClick={logout}
              className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            >
              退出
            </button>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            >
              登录
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            >
              注册
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
