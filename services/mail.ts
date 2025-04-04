import apiClient from "@/services/apiClient";
interface EmailSettings {
  email: string;
  word_count: number;
  send_time: string;
}

export const createEmailSettings = async (settings: EmailSettings) => {
  const response = await apiClient.post("/email-settings", settings);
  return response;
};

export const updateEmailSettings = async (settings: EmailSettings) => {
  const response = await apiClient.put("/email-settings", settings);
  return response;
};

export const getEmailSettings = async () => {
  const response = await apiClient.get("/email-settings");
  return response;
};

export const deleteEmailSettings = async (id: number) => {
  const response = await apiClient.delete(`/email-settings?id=${id}`);
  return response;
};
