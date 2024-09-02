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
import { toast } from "./ui/use-toast";

export function DeleteDialog({ children, productId }) {

  const deleteProduct = async () => {
    const request = new Request(`https://api.escuelajs.co/api/v1/products/${productId}`, {
      method: 'DELETE',
    });

    const response = await fetch(request);

    toast({ title: "Produto excluido" })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirmar exclusão de produto</DialogTitle>
        </DialogHeader>
        <p>Tem certeza que deseja excluir o produto?</p>

        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fechar
            </Button>
          </DialogClose>
          <DialogClose>
            <Button onClick={deleteProduct} variant="destructive">
              Confirmar
            </Button>
          </DialogClose>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}
