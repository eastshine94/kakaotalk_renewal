import type { NextPage } from 'next';
import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { atom, useRecoilState } from 'recoil';

interface ProductItem {
  id: number;
  name: string;
  price: string;
}

const productListState = atom<string[]>({
  key: 'productListState',
  default: []
});

const Home: NextPage = () => {
  const [productList, setProductList] = useRecoilState(productListState);
  const [text, setText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleProductSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProductList(prev => [...prev, text]);
    setText('');
  };

  const fetchData = async () => {
    const res = await axios.get<ProductItem[]>(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    );
    return res.data;
  };

  const { data: list } = useQuery(['products'], () => fetchData());
  if (!list) {
    return <div>loading...</div>;
  }

  return (
    <>
      {!list ? (
        <div>loading...</div>
      ) : (
        <div>
          <form onSubmit={handleProductSubmit}>
            <input type="text" value={text} onChange={handleTextChange} />
            <button type="submit">추가</button>
          </form>

          {productList.map((val, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={idx}>{val}</div>
          ))}
          {list.map(product => (
            <div key={product.id} className="border-b border-red-600">
              <div>id: {product.id}</div>
              <div>name: {product.name}</div>
              <div>price: {product.price}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
