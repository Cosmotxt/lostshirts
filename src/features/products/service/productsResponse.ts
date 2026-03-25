import type { Product } from "../models/product";

const products: Product[] = [
  { 
    id: 1, 
    urlImage: 'https://cdn.awsli.com.br/2500x2500/1374/1374172/produto/147570780/gloria-rc-mockup-kocjmnfqqk.png',
    sizes: ['GG', 'G', 'M', 'PP'],
    name: 'Camiseta Gloria Metalcore', 
    price: 89.90, 
    category: { id: 1, name: 'CAMISETAS' } 
  },
  { 
    id: 2, 
    urlImage: 'https://www.lojafeth.com.br/produto/system-of-a-down-banda-de-rock-camisa-camiseta.html?srsltid=AfmBOorigAHxHfFfRch-3Gt7KVo5CfNk3RLc0A-tbeuoYch-tGVdV5Ex',
    sizes: ['GG', 'G', 'P', 'PP'],
    name: 'Camiseta System of a Down', 
    price: 189.90, 
    category: { id: 2, name: 'CASACOS' } 
  },
  { 
    id: 3, 
    urlImage: 'https://www.lojafeth.com.br/produto/camiseta-him-banda-rock-camisa.html?srsltid=AfmBOooCuhwjXVLquY5wMVCGOsOIQ-PBoWE-DWHi6Rsj3PjRFCsbnghf',
    sizes: ['GG', 'G'],
    name: 'Camiseta HIM', 
    price: 55.00, 
    category: { id: 3, name: 'ACESSÓRIOS' } 
  },
  { 
    id: 4, 
    urlImage: 'https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/024675-cam-misfits-311-bomber.jpg',
    sizes: ['GG', 'G', 'M', 'P', 'PP'],
    name: 'Camiseta Misfits', 
    price: 92.50, 
    category: { id: 1, name: 'CAMISETAS' } 
  },
  // { 
  //   id: 5, 
  //   urlImage: 'https://cdn.awsli.com.br/2500x2500/1374/1374172/produto/147570780/gloria-rc-mockup-kocjmnfqqk.png',
  // sizes: ['GG', 'G', 'M', 'P', 'PP'],
  //   name: 'Vinil Bad Omens - The Death of Peace of Mind', 
  //   price: 249.00, 
  //   category: { id: 4, name: 'COLECIONÁVEIS' } 
  // },
  // { 
  //   id: 6, 
  //   urlImage: 'https://cdn.awsli.com.br/2500x2500/1374/1374172/produto/147570780/gloria-rc-mockup-kocjmnfqqk.png',
  // sizes: ['GG', 'G', 'M', 'P', 'PP'],
  //   name: 'Jaqueta Bomber Architects', 
  //   price: 210.00, 
  //   category: { id: 2, name: 'CASACOS' } 
  // }
];

export default products