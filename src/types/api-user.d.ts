export interface UserInput {
  userId: string;
}

export interface UserPayload {
  id: number;
  user_id: string;
  name: string;
  status_msg: string;
  profile_img_url: string;
  background_img_url: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserResponse<TKey = keyof UserPayload> {
  user: Pick<UserPayload, TKey>;
}
