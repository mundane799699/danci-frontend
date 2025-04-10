"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  getEmailHistory,
  WordEmailHistory,
  WordEmailHistoryPaginationResponse,
} from "@/services/words";
import { WordsCard } from "@/components/WordsCard";

const HistoryTable = () => {
  const [historyResponse, setHistoryResponse] =
    useState<WordEmailHistoryPaginationResponse>({
      histories: [],
      total_count: 0,
      has_more: false,
      current_page: 1,
      page_size: 10,
    });
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const fetchHistory = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const response = await getEmailHistory(page, 10);
      setHistoryResponse((prev) => ({
        ...response,
        histories:
          page === 1
            ? response.histories
            : [...prev.histories, ...response.histories],
      }));
    } catch (error) {
      console.error("加载历史邮件失败:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistory(1);
  }, [fetchHistory]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
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

  return (
    <div>
      <div className="flex flex-col gap-4">
        {historyResponse.histories.map((history) => (
          <div key={history.id} className="flex flex-col gap-4 bg-white p-4">
            <span>{history.send_date}</span>
            {history.words.map((word) => (
              <div>
                <WordsCard key={word.id} word={word} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        ref={loadMoreRef}
        className="mt-6 flex justify-center items-center py-4"
      >
        <div className="text-sm text-gray-500">
          {loading
            ? "加载中..."
            : historyResponse.has_more
            ? "加载更多"
            : "没有更多了"}
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
