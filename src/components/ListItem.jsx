import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  console.log('data', data);
  console.log('image', data && data[0] && data[0].images && data[0].images[0]);

  return (
    <div className="flex flex-wrap gap-2">
      {data.map(item => (
        <Card className="w-40 p-0 m-0" key={item.id}>
          <CardContent className="p-0">
            <Image width={200} height="200" alt='product image' src={item.images[0]} />
          </CardContent>
          <CardContent className="p-2 card-title">
            <p>{item.title}</p>
          </CardContent>
          <CardFooter>
            <p>{`R$ ${item.price.toFixed(2)}`}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default DataDisplay;
