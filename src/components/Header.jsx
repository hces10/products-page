import { Button } from "./ui/button"
import { PlusIcon, ShoppingBag } from "lucide-react"
import { ProductDialog } from "./ProductDialog"
import { useEffect, useState } from "react";

export function Header({ selectCategory, active }) {

  return (
    <div className="w-full flex flex-row justify-between p-6 bg-gray-800">
      <div className="flex justify-center items-center">
        <ShoppingBag className="w-10 text-white" />
      </div>
      <div className="flex flex-wrap justify-center">
        <Button onClick={() => selectCategory(2)} className={`border-none ${active == 2 ? 'bg-slate-400' : 'bg-transparent'}`} size="lg">
          <p className="text-lg">Eletrônicos</p>
        </Button>
        <Button onClick={() => selectCategory(1)} className={`border-none ${active == 1 ? 'bg-slate-400' : 'bg-transparent'}`} size="lg">
          <p className="text-lg">Roupas</p>
        </Button>
        <Button onClick={() => selectCategory(4)} className={`border-none ${active == 4 ? 'bg-slate-400' : 'bg-transparent'}`} size="lg">
          <p className="text-lg">Sapatos</p>
        </Button>
      </div>
      <div className="flex flex-wrap justify-center items-center">
      <ProductDialog action="create">
        <Button className="gap-2 bg-transparent">
          <PlusIcon />
          {window.innerWidth > 430 && <p>Novo Produto</p>}
        </Button>
      </ProductDialog>
      </div>
    </div>
  )
}
