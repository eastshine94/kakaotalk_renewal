/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import React from 'react';
import { useQuery } from 'react-query';
import { request, gql } from 'graphql-request';

const Graph: NextPage = () => {
  const fetchData = async () => {
    const res = await request<{
      user: Partial<{ user_id: string; password: string; name: string }>;
    }>(
      'http://localhost:3001/graphql',
      gql`
        query {
          user(id: 71) {
            user_id
            name
          }
        }
      `
    );
    console.log(res);
    return res;
  };

  const { data } = useQuery(['user'], fetchData);

  if (data) {
    console.log(data.user.user_id);
  }

  return (
    <div>
      {data && (
        <div>
          <div>{data.user.name}</div>
          <div>{data.user.user_id}</div>
        </div>
      )}
    </div>
  );
};

export default Graph;
