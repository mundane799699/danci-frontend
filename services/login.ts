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
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("no token");
    return null;
  }
  const response = await apiClient.get("/users/me");
  return response;
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await apiClient.post("/register", {
    username,
    email,
    password,
  });
  return response;
};
