import apiClient from "@/services/apiClient";

export const login = async (email: string, password: string) => {
  const formData = new URLSearchParams();
  formData.append("username", email); // 后端接口使用 username 作为参数名
  formData.append("password", password);

  const response = await apiClient.post("/login", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response;
};

export const getCurrentUser = async () => {
  const response = await apiClient.get("/users/me");
  return response;
};
