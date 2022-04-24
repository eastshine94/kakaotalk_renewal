import { gql } from 'graphql-request';
import { request } from 'src/lib/api';
import { UserInput, UserResponse } from 'src/types/api-user';

const userCheckRequest = ({ userId }: UserInput) =>
  request<UserInput, UserResponse<'user_id' | 'name'>>(
    gql`
      query ($userId: String!) {
        user(user_id: $userId) {
          user_id
          name
        }
      }
    `,
    { userId }
  );

export { userCheckRequest };
