import type { Product } from "../../products/models/product";

interface CartItem {
    qntProducts: 0,
    products: Product
}

export class Cart {
    constructor(
        public items: CartItem[],
        public totalValue: number
    ) {}

    getFinalPrice() {
        for(const item of this.items) {
            const productPrice = item.products.price * item.qntProducts;
            this.totalValue += productPrice;
            return this.totalValue;
        }
    }

    getTotalItems() {
        return this.items.length;
    }

    

}