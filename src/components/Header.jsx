"use client"

import * as React from "react"
import { Button } from "./ui/button"
import { PlusIcon, ShoppingBag } from "lucide-react"
import { ProductDialog } from "./ProductDialog"

export function Header({ selectCategory }) {

  return (
    <div className="w-full flex flex-row justify-between p-6 bg-gray-800">
      <div className="flex justify-center items-center">
        <ShoppingBag className="w-10 text-white" />
      </div>
      <div className="">
        <Button onClick={() => selectCategory(19)} className="border-none bg-transparent" size="lg">
          <p className="text-lg">Bolas</p>
        </Button>
        <Button onClick={() => selectCategory(2)} className="border-none bg-transparent" size="lg">
          <p className="text-lg">Roupas</p>
        </Button>
        <Button onClick={() => selectCategory(4)} className="border-none bg-transparent" size="lg">
          <p className="text-lg">Sapatos</p>
        </Button>
      </div>
      <div className="flex justify-center items-center">
      <ProductDialog action="create">
        <Button className="gap-2 bg-transparent">
          <PlusIcon />
          Novo Produto
        </Button>
      </ProductDialog>
      </div>
    </div>
  )
}
