import type { Category } from "./category";

export type ProductType = 'clothing'| 'mug' | 'button' | 'collectible'
type ColorNames = 'Preta' | 'Branco' | 'Cinza' | 'Amarelo' | 'Roxo';

const colorOptionsMap: Record<ColorNames, string> = {
  'Preta': '#1a1a1a',
  'Branco': '#f5f5f5',
  'Cinza': '#888888',
  'Amarelo': '#f5c518',
  'Roxo': '#9D00FF'
} as const;

export default colorOptionsMap

export interface Product {
    id: number,
    urlImage: string,
    name: string,
    price: number,
    category: Category,
    type?: ProductType,
    description?: string,
    sizes: string[],
    colors?: ColorNames[]

}