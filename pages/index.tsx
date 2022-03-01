import type { NextPage } from 'next';
import axios from 'axios';
import { useQuery } from 'react-query';

interface ProductItem {
  id: number;
  name: string;
  price: string;
}

const Home: NextPage = () => {
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
          <div className="text-red-600">Hello world!</div>
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
