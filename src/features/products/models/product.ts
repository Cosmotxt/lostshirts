import type { Category } from "./category";

export interface Product {
    id: number,
    urlImage: string,
    sizes: string[],
    name: string,
    price: number,
    category: Category
}