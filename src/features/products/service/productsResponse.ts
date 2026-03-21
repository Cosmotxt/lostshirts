import type { Product } from "../models/product";

const products: Product[] = [
  { 
    id: 1, 
    name: 'Camiseta Linkin Park - Hybrid Theory', 
    price: 89.90, 
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 2, 
    name: 'Moletom Deftones "Around the Fur"', 
    price: 189.90, 
    category: { id: 2, name: 'CASACOS' } 
  },
  { 
    id: 3, 
    name: 'Boné Bordado Logo Bring Me The Horizon', 
    price: 55.00, 
    category: { id: 3, name: 'ACESSÓRIOS' } 
  },
  { 
    id: 4, 
    name: 'Camiseta Spiritbox - Eternal Blue', 
    price: 92.50, 
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 5, 
    name: 'Vinil Bad Omens - The Death of Peace of Mind', 
    price: 249.00, 
    category: { id: 4, name: 'COLECIONÁVEIS' } 
  },
  { 
    id: 6, 
    name: 'Jaqueta Bomber Architects', 
    price: 210.00, 
    category: { id: 2, name: 'CASACOS' } 
  }
];

export default products