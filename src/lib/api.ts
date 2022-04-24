import { GraphQLClient, RequestDocument } from 'graphql-request';

const API_URL = 'http://localhost:3001/graphql';

const client = new GraphQLClient(API_URL, {
  headers: {}
});

function request<TInput, TResponse>(tag: RequestDocument, input: TInput) {
  return client.request<TResponse>(tag, input);
}

export { client, request };
