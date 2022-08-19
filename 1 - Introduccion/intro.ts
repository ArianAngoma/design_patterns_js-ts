class Drink {

    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    info(): string {
        return `Drink: ${this.name}`;
    }

}

interface Product {
    price: number;

    getPrice(): number;
}

class Beer extends Drink implements Product {
    private readonly alcohol: number;
    price: number

    constructor(name: string, alcohol: number, price: number) {
        super(name);

        this.alcohol = alcohol;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }

    info(): string {
        return `${super.info()} is a beer with alcohol ${this.alcohol}`;
    }

}

class Snack implements Product {
    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }
}

const drink = new Drink('Coffee');
console.log(drink.info());

const beer = new Beer('Pilsen', 4.5, 100);
console.log(beer.info());

const products: Product[] = [
    new Beer('Corona' ,7.8, 150),
    new Snack('Chips', 10)
]

const getPrice = (item: Product[]) => {
    for (const product of item) {
        console.log(product.getPrice());
    }
}

getPrice(products);
