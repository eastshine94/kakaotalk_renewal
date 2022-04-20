/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import React from 'react';
import { useQuery } from 'react-query';
import { request, gql, ClientError } from 'graphql-request';

const Graph: NextPage = () => {
  const tag = gql`
    query {
      user(user_id: "test1@test.com") {
        user_id
        name
      }
    }
  `;
  const fetchData = async () => {
    try {
      const res = await request<{
        user: Partial<{ user_id: string; password: string; name: string }>;
      }>('http://localhost:3001/graphql', tag);

      return res;
    } catch (err) {
      const error = err as ClientError;
      console.dir(error.response.errors?.[0].message);
    }
  };

  const { data } = useQuery(['user'], fetchData);

  return (
    <div>
      {data && (
        <div>
          <div>{data.user?.name}</div>
          <div>{data.user?.user_id}</div>
          <div>{data.user?.password}</div>
        </div>
      )}
    </div>
  );
};

export default Graph;
