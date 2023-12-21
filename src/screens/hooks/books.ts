
import { getAllBooks } from '@/api/book'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import z from 'zod'



const schema = z.object({
    id: z.string({ required_error: 'Id not provided' }),
    title : z.string({ required_error: 'Title not provided' }),
    author : z.string({ required_error: 'Author not provided' }),
    description: z.string({ required_error: 'Description not provided' }),
    price: z.number({ required_error: 'Price not provided' }),  
})


type FormField = z.infer<typeof schema>

export const books = () => {
    const { control, handleSubmit, reset, setValue, watch } = useForm<FormField>({
        defaultValues: {
            id: '',
            title: '',
            author: '',
            description: '',
            price: 0,
        },
        resolver: zodResolver(schema),
    });

       
  const {data} = useQuery({
    queryKey: ['books'],
    queryFn: getAllBooks,
  })
 
    return {
        data,
    }
    
}