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
import { DeleteDialog } from './DeleteDialog';
import { PaginationProduct } from './PaginationProduct';

const DataDisplay = ({ active }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0)
  }, [active]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/categories/${active}/products?offset=${currentPage * 5}&limit=5`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, [active, currentPage]);

  const previousPage = () => {
    if (currentPage <= 0) return;
    setCurrentPage(currentPage - 1);
  }

  const nextPage = () => {
    if (data && !data.length) return;
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="flex flex-wrap gap-4 justify-evenly mx-12">
      {window.innerWidth < 430 && (
        <PaginationProduct
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      )}

      {data.map(item => {
        const imgStringError = (imgURL) => {
          //const stringArray = imgURL.split('')
          if (imgURL.includes('[')) return true
          if (imgURL.includes('"')) return true
          return false
        }

        return (
          <Card className="w-44 p-0 m-0 flex flex-col justify-between" key={item.id}>
            <CardContent className="p-0">
              {imgStringError(item.images[0]) ? (
                <div style={{ height: '174px' }} className='w-full justify-center items-center flex p-5 text-center bg-slate-200 rounded-t' >
                  <p>Foto não encontrada</p>
                </div>
              ) : (
                <Image width="320" height="320" alt='product image' src={item.images[0]} />
              )}

            </CardContent>
            <CardContent className="p-2 card-title">
              <p>{item.title}</p>
            </CardContent>
            <CardFooter className="p-2 flex justify-between">
              <p className='max-w-20'>{`R$ ${item.price.toFixed(2)}`}</p>
              <div>
                <ProductDialog product={item} action="update">
                  <Button className="w-8 h-8 mr-2" variant="outline" size="icon">
                    <UpdateIcon className="h-4 w-4" />
                  </Button>
                </ProductDialog>
                <DeleteDialog productId={item.id}>
                  <Button className="w-8 h-8" variant="outline" size="icon">
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </DeleteDialog>
              </div>
            </CardFooter>
          </Card>
        )
      })}
      <PaginationProduct nextPage={nextPage} previousPage={previousPage} currentPage={currentPage}  />
    </div>
  );
};

export default DataDisplay;
