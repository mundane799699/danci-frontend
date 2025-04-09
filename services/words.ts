import apiClient from "@/services/apiClient";

// 定义单词类型
export interface Word {
  id: number;
  word: string;
  content: string;
}

// 定义分页响应类型
export interface WordPaginationResponse {
  words: Word[];
  total_count: number;
  has_more: boolean;
  current_page: number;
  page_size: number;
}

export const getWords = async (
  page: number,
  pageSize: number
): Promise<WordPaginationResponse> => {
  return await apiClient.get("/words", {
    params: {
      page,
      page_size: pageSize,
    },
  });
};
