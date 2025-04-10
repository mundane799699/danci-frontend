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

// 定义单词邮件历史记录类型
export interface WordEmailHistory {
  id: number;
  user_id: number;
  sent_at: string; // 日期时间字符串
  send_date: string;
  created_at: string;
  updated_at: string;
  words: Word[]; // 关联的单词列表，使用上面已定义的Word接口
}

// 定义邮件历史分页响应类型
export interface WordEmailHistoryPaginationResponse {
  histories: WordEmailHistory[];
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

// 获取邮件历史记录的方法
export const getEmailHistory = async (
  page: number,
  pageSize: number
): Promise<WordEmailHistoryPaginationResponse> => {
  return await apiClient.get("/email-history", {
    params: {
      page,
      page_size: pageSize,
    },
  });
};
