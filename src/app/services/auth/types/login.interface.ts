export interface LoginReq {
  username: string;
  password: string;

}

export interface LoginRes {
  access_token: string;
  refresh_token: string;
}
