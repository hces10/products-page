import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ProductForm } from "./ProductForm";

export function ProductDialog({ children, action, product }) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || <Button variant="outline">Share</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{action == 'update' ? 'Atualizar' : 'Criar'} Produto</DialogTitle>
        </DialogHeader>


        <ProductForm product={product} action={action} />

      </DialogContent>
    </Dialog>
  )
}
