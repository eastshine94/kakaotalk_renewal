import React, { useEffect } from 'react';

export default function ErrorTest() {
  useEffect(() => {
    throw new Error('에러 발생!');
  }, []);

  return <div>에러 발생</div>;
}
