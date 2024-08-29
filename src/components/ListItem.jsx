import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { TrashIcon, UpdateIcon } from '@radix-ui/react-icons';
import { ProductDialog } from './ProductDialog';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=18')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  console.log('data', data);
  console.log('image', data && data[0] && data[0].images && data[0].images[0]);

  return (
    <div className="flex flex-wrap gap-4 justify-between mx-12">
      {data.map(item => (
        <Card className="w-44 p-0 m-0 flex flex-col justify-between" key={item.id}>
          <CardContent className="p-0">
            <Image width="300" height="300" alt='product image' src={item.images[0]} />
          </CardContent>
          <CardContent className="p-2 card-title">
            <p>{item.title}</p>
          </CardContent>
          <CardFooter className="p-2 flex justify-between">
            <p>{`R$ ${item.price.toFixed(2)}`}</p>
            <div>
              <ProductDialog action="update">
                <Button variant="outline" size="icon">
                  <UpdateIcon className="h-4 w-4" />
                </Button>
              </ProductDialog>

              <Button variant="outline" size="icon">
                <TrashIcon className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default DataDisplay;
