export interface Subscribe {
  id: number;
  email: string;
  mail_type?: string; // "word" or "quote"
  word_count: number;
  send_time: string;
}
