import { gql } from 'graphql-request';
import { request } from 'src/lib/api';
import { AuthSignUpInput, AuthSignUpResponse } from 'src/types/api-auth';

const signUpRequest = (input: AuthSignUpInput) =>
  request<AuthSignUpInput, AuthSignUpResponse>(
    gql`
      mutation ($userId: String!, $password: String!, $name: String!) {
        signUp(
          signUpInput: { user_id: $userId, password: $password, name: $name }
        ) {
          status
          message
          user_id
        }
      }
    `,
    input
  );

export { signUpRequest };
