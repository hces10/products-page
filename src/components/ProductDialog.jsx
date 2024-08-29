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

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProductDialog({ children, action }) {

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data) {
    console.log('data', data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || <Button variant="outline">Share</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{action == 'update' ? 'Atualizar' : 'Criar'} Produto</DialogTitle>
        </DialogHeader>



        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="sm:justify-between">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>

              <Button type="submit">
                Salvar
              </Button>

            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
