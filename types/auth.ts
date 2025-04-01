export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}
