interface Component {
    getDetail(): string
}

class ProductComponent implements Component {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    getDetail(): string {
        return this.name;
    }
}

abstract class ProductDecorator implements Component {

    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }

}

// Decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {

    private readonly tradeName: string;
    private readonly brand: string;

    constructor(component: Component, tradeName: string, brand: string) {
        super(component);
        this.tradeName = tradeName;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${super.getDetail()} - ${this.tradeName} - ${this.brand}`;
    }

}

const productComponent = new ProductComponent('Product 1');
console.log(productComponent.getDetail());

const commercialInfoProductDecorator = new CommercialInfoProductDecorator(productComponent, 'Trade Name 1', 'Brand 1');
console.log(commercialInfoProductDecorator.getDetail());


// Decorator 2
class StoreProductDecorator extends ProductDecorator {

    private readonly price: number;

    constructor(component: Component, price: number) {
        super(component);
        this.price = price;
    }

    public getDetail(): string {
        return `${this.price} - ${super.getDetail()}`;
    }

}

// const storeProductDecorator = new StoreProductDecorator(productComponent, 100);
const storeProductDecorator = new StoreProductDecorator(commercialInfoProductDecorator, 100);
console.log(storeProductDecorator.getDetail());

// Decorator 3
class HTMLProductDecorator extends ProductDecorator {

    public getDetail(): string {
        return `<h1>${super.getDetail()}</h1>`;
    }

}

const htmlProductDecorator = new HTMLProductDecorator(storeProductDecorator);
console.log(htmlProductDecorator.getDetail());
