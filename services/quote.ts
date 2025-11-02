import apiClient from "@/services/apiClient";

// 定义金句类型
export interface Quote {
  id: number;
  content: string;
}

// 定义分页响应类型
export interface QuotePaginationResponse {
  quotes: Quote[];
  total_count: number;
  has_more: boolean;
  current_page: number;
  page_size: number;
}

// 定义金句邮件历史记录类型
export interface QuoteEmailHistory {
  id: number;
  user_id: number;
  sent_at: string; // 日期时间字符串
  send_date: string;
  created_at: string;
  updated_at: string;
  quote_content: string; // 金句内容
}

// 定义邮件历史分页响应类型
export interface QuoteEmailHistoryPaginationResponse {
  histories: QuoteEmailHistory[];
  total_count: number;
  has_more: boolean;
  current_page: number;
  page_size: number;
}

export const getQuotes = async (
  page: number,
  pageSize: number
): Promise<QuotePaginationResponse> => {
  return await apiClient.get("/quotes", {
    params: {
      page,
      page_size: pageSize,
    },
  });
};

// 获取金句邮件历史记录的方法
export const getQuoteEmailHistory = async (
  page: number,
  pageSize: number
): Promise<QuoteEmailHistoryPaginationResponse> => {
  return await apiClient.get("/quote-history", {
    params: {
      page,
      page_size: pageSize,
    },
  });
};
