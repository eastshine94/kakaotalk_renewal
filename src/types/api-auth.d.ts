export interface AuthSignUpInput {
  userId: string;
  password: string;
  name: string;
}

export interface AuthSignUpPayload {
  status: string;
  message: string;
  user_id: string;
}

export interface AuthSignUpResponse<TKey = keyof AuthSignUpPayload> {
  signUp: Pick<AuthSignUpPayload, TKey>;
}
