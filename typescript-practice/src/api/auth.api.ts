import { AxiosInstance } from "axios";

class Auth {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  //   {
  //     "id": "유저 아이디",
  // 		"password": "유저 비밀번호",
  // 		"nickname": "유저 닉네임"
  // }
  async signUp(data: { username: string; password: string; nickname: string }) {
    const path = "/register";
    const response = await this.axios.post<{
      success: boolean;
      message: string;
    }>(path, data);
    const result = response.data;

    return result;
  }
  // {
  //   "id":"유저 아이디",
  //   "password": "유저 비밀번호"
  // }
  // <{  accessToken: string;
  //     userId: string;
  //     success: boolean;
  //     avatar: string;
  //     nickname: string;}>
  async signIn(data: { id: string; password: string }) {
    const path = "/login";
    const response = await this.axios.post<{
      accessToken: string;
      userId: string;
      success: boolean;
      avatar: string;
      nickname: string;
    }>(path, data);
    const result = response.data;
    return result;
  }

  async getUserInfo() {
    const path = "/user";

    const response = await this.axios.get<{
      id: string;
      nickname: string;
      avatar: null | string;
      success: boolean;
    }>(path);
    const result = response.data;
    return result;
  }

  // {
  //   "avatar": [이미지파일],
  //   "nickname": "변경할 닉네임"
  // }
  async updateProfile(data: { avatar: File; nickname: string }) {
    const path = "/profile";
    const response = await this.axios.patch<{
      avatar: string;
      nickname: string;
      message: string;
      success: boolean;
    }>(path, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = response.data;
    return result;
  }

  async setAccessToken(token: string): Promise<void> {
    this.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}

export default Auth;
