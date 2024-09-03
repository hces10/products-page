"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { DialogFooter } from "./ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
import { MinusIcon, PlusIcon } from "lucide-react"
import { useEffect, useState } from "react"

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z.optional(z.string()), //number
  categoryId: z.optional(z.string()),
  img: z.optional(z.string()),
  img0: z.optional(z.string()),
  img1: z.optional(z.string()),
  img2: z.optional(z.string()),
  img3: z.optional(z.string()),
})

export function ProductForm({ action, product }) {
  const [categories, setCategories] = useState([]);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => response.json())
      .then(categories => setCategories(categories))
      .catch(error => console.error('Erro ao buscar dados:', error));

    if (action == 'update') {
      let arrayInputs = product.images.map(img => img);

      setInputs(arrayInputs)
    }
  }, []);


  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: action == 'update' ? product.title : "",
      price: action == 'update' ? product.price.toString() : "",
      img: action == 'update' ? product.images[0] : "",
      img0: action == 'update' ? product.images[1] : "",
      img1: action == 'update' ? product.images[2] : "",
      img2: action == 'update' ? product.images[3] : "",
      img3: action == 'update' ? product.images[4] : "",
      categoryId: action == 'update' ? product.category.name : "",
    },
  })

  const onSubmit = async (data) => {
    console.log('submit');
    console.log('data', data);
    console.log('inputs', inputs);

    let images = [data.img];
    for (let i = 0; i < inputs.length; i++) {
      if (data[`img${i}`]) images = [...images, data[`img${i}`]]
    }

    const categoryId = categories.find(category => category.name == data.categoryId)?.id

    console.log('categoryId', categoryId);

    const request = new Request(`https://api.escuelajs.co/api/v1/products/${action == 'update' ? product.id : ""}`, {
      method: action == 'update' ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: data.title,
        price: parseInt(data.price),
        images,
        categoryId,
        description: action == 'update' ? product.description : 'Standard description'
      }),
    });

    const response = await fetch(request);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  console.log('categories', categories);
  console.log('product', product);
  console.log('inputs', inputs);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Produto</FormLabel>
              <FormControl>
                <Input placeholder="Nome do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Preço do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              {console.log('field', field)}
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem value={category.name}>{category.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="img"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel>URL da Imagem</FormLabel>
                <Button
                  type="button"
                  variant="secondary"
                  className="h-6 w-6 p-0 ml-2"
                  onClick={() => {
                    if (inputs.length <= 3) return setInputs([...inputs, ""])
                  }}
                >
                  <PlusIcon className="h-2 w-2" />
                </Button>
                <Button type="button" variant="secondary" className="h-6 w-6 p-0 ml-2" onClick={() => setInputs(inputs.filter((item, i) => i !== inputs.length - 1))}>
                  <MinusIcon className="h-2 w-2" />
                </Button>
              </div>

              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        {inputs.map((item, i) => {
          return (
            <FormField
              control={form.control}
              key={i}
              name={`img${i}`}
              render={({ field }) => (
                <FormItem style={{ marginTop: '12px' }}>
                  <FormControl  >
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )
        })}

        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit">
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  )
}