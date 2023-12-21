import axiosInstance from "@/utils/axiosInstance"
import { AxiosResponse } from "axios";



export type Book = {
    id: string,
    title: string,
    author: string,
    description: string,
    image?: string,
    price : number,
}



export const getAllBooks = async () => {
    try {
        const response: AxiosResponse<Book[]> = await axiosInstance.get('/books');
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
