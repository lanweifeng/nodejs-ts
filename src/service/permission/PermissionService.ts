
export interface LoginUser {
  userId: string;
  passWord: string;
}

export interface PermissionService {
  login(user: LoginUser): Promise<any>;
  logout(userId: string): Promise<any>;
}
