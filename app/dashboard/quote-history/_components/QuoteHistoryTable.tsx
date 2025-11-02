"use client";

import { getQuoteEmailHistory } from "@/services/quote";
import { QuoteEmailHistoryPaginationResponse } from "@/services/quote";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { QuoteCard } from "@/components/QuoteCard";

export const QuoteHistoryTable = () => {
  // 定义状态：分页响应数据
  const [historyResponse, setHistoryResponse] =
    useState<QuoteEmailHistoryPaginationResponse>({
      histories: [],
      total_count: 0,
      has_more: false,
      current_page: 1,
      page_size: 10,
    });

  // 定义状态：加载状态
  const [loading, setLoading] = useState(false);

  // 定义refs：用于观察最后一个元素
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // 核心函数：获取数据
  const fetchHistory = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const response = await getQuoteEmailHistory(page, 10);
      setHistoryResponse((prev) => ({
        ...response,
        // 分页逻辑：第一页替换，后续页面追加
        histories:
          page === 1
            ? response.histories
            : [...prev.histories, ...response.histories],
      }));
    } catch (error) {
      console.error("加载历史金句邮件失败:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // 初始加载
  useEffect(() => {
    fetchHistory(1);
  }, [fetchHistory]);

  // 无限滚动观察器
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      // 当用户滚动到底部时加载下一页
      if (entry.isIntersecting && historyResponse.has_more && !loading) {
        fetchHistory(historyResponse.current_page + 1);
      }
    }, options);

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [
    fetchHistory,
    historyResponse.has_more,
    historyResponse.current_page,
    loading,
  ]);

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      {/* 列表内容 */}
      <div className="flex flex-col gap-8">
        {historyResponse.histories.map((history) => (
          <div key={history.id} className="flex flex-col gap-2 p-6 ">
            {/* 邮件发送日期标题 */}
            <span className="text-base text-gray-400">{history.send_date}</span>

            {/* 该邮件中的所有金句 */}
            <div className="flex flex-col gap-4 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <p className="text-gray-700">{history.quote_content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 空状态 */}
      {!loading && historyResponse.histories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">暂无历史金句邮件</p>
        </div>
      )}

      {/* 加载指示器 */}
      <div
        ref={loadMoreRef}
        className="mt-6 flex justify-center items-center py-4"
      >
        <div className="text-sm text-gray-500">
          {loading
            ? "加载中..."
            : historyResponse.has_more
            ? "加载更多"
            : historyResponse.histories.length > 0
            ? "没有更多了"
            : ""}
        </div>
      </div>
    </div>
  );
};
