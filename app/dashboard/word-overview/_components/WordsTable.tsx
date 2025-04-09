"use client";

import { getWords } from "@/services/words";
import { WordPaginationResponse } from "@/services/words";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { WordsCard } from "../../../../components/WordsCard";

export const WordsTable = () => {
  const [wordsResponse, setWordsResponse] = useState<WordPaginationResponse>({
    words: [],
    total_count: 0,
    has_more: false,
    current_page: 1,
    page_size: 10,
  });
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const fetchWords = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const response = await getWords(page, 10);
      setWordsResponse((prev) => ({
        ...response,
        words: page === 1 ? response.words : [...prev.words, ...response.words],
      }));
    } catch (error) {
      console.error("加载单词失败:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWords(1);
  }, [fetchWords]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && wordsResponse.has_more && !loading) {
        fetchWords(wordsResponse.current_page + 1);
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
  }, [fetchWords, wordsResponse.has_more, wordsResponse.current_page, loading]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {wordsResponse.words.map((word) => (
          <WordsCard key={word.id} word={word} />
        ))}
      </div>

      <div
        ref={loadMoreRef}
        className="mt-6 flex justify-center items-center py-4"
      >
        <div className="text-sm text-gray-500">
          {loading
            ? "加载中..."
            : wordsResponse.has_more
            ? "加载更多"
            : "没有更多了"}
        </div>
      </div>
    </div>
  );
};
