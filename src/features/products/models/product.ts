import type { Category } from "./category";

export type ProductType = 'clothing'| 'mug' | 'button'

export interface Product {
    id: number,
    urlImage: string,
    sizes: string[],
    name: string,
    price: number,
    category: Category,
    type: ProductType,
    description: string,
    sizes?: string[],
    colors?: string[]

}