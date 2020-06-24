export interface LogInPayload {
  username: string;
  password: string;
  remember: boolean;
}

export const login = (payload: LogInPayload) => ({
  type: 'authentication/login',
  payload,
});

export const logout = () => ({ type: 'authentication/logout' });
