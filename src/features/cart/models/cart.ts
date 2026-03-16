import type { Product } from "../../products/models/product";

interface CartItem {
    qntProduct: number,
    product: Product
}

export class Cart {
    constructor(
        public items: CartItem[],
    ) {}

    getFinalPrice() {
        const cartFinalPrice = this.items.reduce((acc, cur) => acc + (cur.product.price * cur.qntProduct ), 0);
        return cartFinalPrice;
    }

    getTotalItems() {
        return this.items.length;
    }

    addProduct(product:Product, qntProduct:number) {
        const isDuplicatedItem = this.items.some((cartItem) => product === cartItem.product );
        if (!isDuplicatedItem) {
            this.items.push({ qntProduct, product }) 
            return 'Item adicionado ao carrinho'
        } else {
            return 'Você já passui esse produto no carrinho'; 
        }        
    }
}