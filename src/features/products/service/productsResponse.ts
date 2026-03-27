import type { Product } from "../models/product";

const products: Product[] = [
  { 
    id: 1, 
    urlImage: 'https://cdn.awsli.com.br/2500x2500/1374/1374172/produto/147570780/gloria-rc-mockup-kocjmnfqqk.png',
    sizes: ['GG', 'G', 'M', 'PP'],
    name: 'Camiseta Gloria Metalcore', 
    description: 'Camiseta em algodão premium com estampa exclusiva em tons de azul. Ideal para fãs de post-hardcore que buscam durabilidade e um visual de peso.',
    price: 89.90, 
    type: 'clothing',
    colors: ['Preta', 'Branco', 'Cinza', 'Amarelo'],
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 2, 
    urlImage: 'https://www.lojafeth.com.br/produto/system-of-a-down-banda-de-rock-camisa-camiseta.html?srsltid=AfmBOorigAHxHfFfRch-3Gt7KVo5CfNk3RLc0A-tbeuoYch-tGVdV5Ex',
    sizes: ['GG', 'G', 'P', 'PP'],
    name: 'Camiseta System of a Down', 
    description: 'Peça essencial de Nu Metal com modelagem confortável e alta resistência. Perfeita para shows ou para o dia a dia com atitude e estilo.',
    price: 189.90, 
    type: 'clothing',
    colors: ['Preta', 'Branco', 'Cinza', 'Amarelo'],
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 3, 
    urlImage: 'https://www.lojafeth.com.br/produto/camiseta-him-banda-rock-camisa.html?srsltid=AfmBOooCuhwjXVLquY5wMVCGOsOIQ-PBoWE-DWHi6Rsj3PjRFCsbnghf',
    sizes: ['GG', 'G'],
    name: 'Camiseta HIM', 
    description: 'Básica, versátil e com caimento moderno. O item indispensável para compor qualquer look casual com conforto e minimalismo urbano.',
    price: 55.00,
    type: 'clothing',
    colors: ['Preta', 'Branco', 'Cinza', 'Amarelo'], 
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 4, 
    urlImage: 'https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/024675-cam-misfits-311-bomber.jpg',
    sizes: ['GG', 'G', 'M', 'P', 'PP'],
    name: 'Camiseta Misfits', 
    description: 'Ícone do Horror Punk com estampa clássica do Crimson Ghost. Tecido macio que garante durabilidade e o visual autêntico que todo fã exige.',
    price: 92.50, 
    type: 'clothing',
    colors: ['Preta', 'Branco', 'Cinza', 'Amarelo'],
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 5, 
    urlImage: 'https://cdn.awsli.com.br/2500x2500/1374/1374172/produto/147570780/gloria-rc-mockup-kocjmnfqqk.png',
  sizes: ['GG', 'G', 'M', 'P', 'PP'],
    name: 'Vinil Bad Omens - The Death of Peace of Mind', 
    price: 249.00, 
    category: { id: 4, name: 'COLECIONÁVEIS' } 
  },
  { 
    id: 6, 
    urlImage: 'https://cdn.awsli.com.br/2500x2500/1374/1374172/produto/147570780/gloria-rc-mockup-kocjmnfqqk.png',
  sizes: ['GG', 'G', 'M', 'P', 'PP'],
    name: 'Jaqueta Bomber Architects', 
    price: 210.00, 
    category: { id: 2, name: 'CASACOS' } 
  },
    { 
    id: 4, 
    urlImage: 'https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/024675-cam-misfits-311-bomber.jpg',
    sizes: ['GG', 'G', 'M', 'P', 'PP'],
    name: 'Camiseta Misfits', 
    price: 92.50, 
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 5, 
    urlImage: 'https://cdn.awsli.com.br/2500x2500/1374/1374172/produto/147570780/gloria-rc-mockup-kocjmnfqqk.png',
  sizes: ['GG', 'G', 'M', 'P', 'PP'],
    name: 'Vinil Bad Omens - The Death of Peace of Mind', 
    price: 249.00, 
    category: { id: 4, name: 'COLECIONÁVEIS' } 
  },
];

export default products