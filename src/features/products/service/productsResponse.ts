import type { Product } from "../models/product";

const products: Product[] = [
  { 
    id: 1, 
    urlImage: 'https://i.pinimg.com/1200x/16/3e/6d/163e6d9228b8ec2adc0cf64d5f1a0895.jpg',
    sizes: ['GG', 'G', 'M', 'P'],
    name: 'Camiseta Nirvana - In Utero', 
    description: 'O clássico anjo da era grunge. Algodão estonado com toque macio e estampa vintage que resiste a lavagens intensas.',
    price: 98.90, 
    type: 'clothing',
    colors: ['Amarelo', 'Preta'],
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 2, 
    urlImage: 'https://i.pinimg.com/736x/e2/71/f3/e271f37566b907a3275aa10ae30b1740.jpg',
    sizes: ['GG', 'G', 'M', 'P', 'PP'],
    name: 'Camiseta Barsek', 
    description: 'Sinta o poder do lado sombrio. Estampa minimalista do Lorde Sith em silk-screen de alta densidade.',
    price: 85.00, 
    type: 'clothing',
    colors: ['Preta'],
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 3, 
    urlImage: 'https://i.pinimg.com/1200x/14/9b/53/149b53dffae13daf7deccf68b1148b7d.jpg',
    sizes: ['G', 'M', 'P'],
    name: 'Camiseta Pink Floyd - Dark Side', 
    description: 'O prisma mais icônico da história do rock. Modelagem unissex com costura reforçada de ombro a ombro.',
    price: 110.00,
    type: 'clothing',
    colors: ['Preta', 'Cinza'], 
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 4, 
    urlImage: 'https://i.pinimg.com/1200x/36/3a/82/363a821f15407ec86071a7bf8c5d7968.jpg',
    sizes: ['GG', 'G', 'M', 'P'],
    name: 'Camiseta Joy Division - Unknown Pleasures', 
    description: 'Ondas de rádio que definiram o pós-punk. Estampa frontal clássica em tecido premium 30.1 penteado.',
    price: 89.90, 
    type: 'clothing',
    colors: ['Preta', 'Branco'],
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 5, 
    urlImage: 'https://i.pinimg.com/736x/f6/08/15/f608159508941c27ef141f83b0db92a6.jpg',
    sizes: ['G', 'M', 'P', 'PP'],
    name: 'Camiseta Pokémon - Gengar Neon', 
    description: 'Estilo urbano encontra Kanto. Arte exclusiva em estilo neon do fantasma mais querido da franquia.',
    price: 95.00, 
    type: 'clothing',
    colors: ['Roxo', 'Preta'],
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 6, 
    urlImage: 'https://i.pinimg.com/1200x/3c/27/a1/3c27a168e1eceb64f646671333aec42c.jpg',
    sizes: ['GG', 'G', 'M'],
    name: 'Camiseta Metallica - Master of Puppets', 
    description: 'Puro Thrash Metal. Arte detalhada da capa do álbum que mudou o metal para sempre.',
    price: 125.00, 
    type: 'clothing',
    colors: ['Preta'],
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 7, 
    urlImage: 'https://i.pinimg.com/1200x/bb/7a/c4/bb7ac46d4f4f5961a4848c6f4d5c36cf.jpg',
    sizes: ['GG', 'G', 'M', 'P'],
    name: 'Camiseta Spider-Man - Miles Morales', 
    description: 'Direto do Aranhaverso. Estampa em cores vibrantes celebrando o estilo grafite do Miles.',
    price: 105.00, 
    type: 'clothing',
    colors: ['Preta', 'Roxo'],
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 8, 
    urlImage: 'https://i.pinimg.com/736x/a7/7f/83/a77f83ed0cde29e1db8744a120f19d44.jpg',
    sizes: ['GG', 'G', 'M', 'P'],
    name: 'Camiseta Deftones - White Pony', 
    description: 'Elegância e peso sonoro. O icônico pônei branco em estampa minimalista, ideal para fãs de metal alternativo que buscam um visual clean e sofisticado.',
    price: 88.50, 
    type: 'clothing',
    colors: ['Preta', 'Branco'],
    category: { id: 1, name: 'CAMISETAS' } 
  }
];

export default products