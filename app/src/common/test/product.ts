module app.product {
    export interface IProduct {
        name: string;
        price: number;
        showName(): string;
        showPrice(): number;
    }

    export class Product implements IProduct{
        constructor(public name: string,
                    public price: number) {
        }

        public showName = (): string => {
            return this.name;
        };

        public showPrice = (): number => {
            return this.price;
        }
    }
}
