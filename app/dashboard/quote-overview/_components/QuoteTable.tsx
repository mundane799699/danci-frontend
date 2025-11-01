"use client";

import { getQuotes } from "@/services/quote";
import { QuotePaginationResponse } from "@/services/quote";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { QuoteCard } from "@/components/QuoteCard";

export const QuoteTable = () => {
  const [quoteResponse, setQuoteResponse] = useState<QuotePaginationResponse>({
    quotes: [],
    total_count: 0,
    has_more: false,
    current_page: 1,
    page_size: 10,
  });
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const fetchQuotes = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const response = await getQuotes(page, 10);
      setQuoteResponse((prev) => ({
        ...response,
        quotes:
          page === 1 ? response.quotes : [...prev.quotes, ...response.quotes],
      }));
    } catch (error) {
      console.error("加载金句失败:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes(1);
  }, [fetchQuotes]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && quoteResponse.has_more && !loading) {
        fetchQuotes(quoteResponse.current_page + 1);
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
    fetchQuotes,
    quoteResponse.has_more,
    quoteResponse.current_page,
    loading,
  ]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {quoteResponse.quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>

      <div
        ref={loadMoreRef}
        className="mt-6 flex justify-center items-center py-4"
      >
        <div className="text-sm text-gray-500">
          {loading
            ? "加载中..."
            : quoteResponse.has_more
            ? "加载更多"
            : "没有更多了"}
        </div>
      </div>
    </div>
  );
};
