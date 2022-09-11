// Component

class ProductComponent {

    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return this.name;
    }

}

// Decorator

class ProductDecorator {

    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }

}

class CommercialInfoProductDecorator extends ProductDecorator {

    constructor(productComponent, tradeName, brand) {
        super(productComponent);

        this.tradeName = tradeName;
        this.brand = brand;
    }

    getDetail() {
        return `${super.getDetail()} - ${this.tradeName} - ${this.brand}`;
    }

}

const productComponent = new ProductComponent('Product 1');
// console.log(productComponent.getDetail());

const commercialInfoProductDecorator = new CommercialInfoProductDecorator(productComponent, 'Trade Name 1', 'Brand 1');
console.log(commercialInfoProductDecorator.getDetail());


class StoreProductDecorator extends ProductDecorator {

    constructor(productComponent, storeName) {
        super(productComponent);

        this.storeName = storeName;
    }

    getDetail() {
        return `${super.getDetail()} - ${this.storeName}`;
    }

}

// Decorator 2 with component
const storeProductDecorator = new StoreProductDecorator(productComponent, 'Store 1');
console.log(storeProductDecorator.getDetail());


class HTMLProductDecorator extends ProductDecorator {

    getDetail() {
        return `<h1>Informacion del producto</h1><p>${super.getDetail()}</p>`;
    }

}

// Decorator 2 with decorator 1
const product = new StoreProductDecorator(commercialInfoProductDecorator, 'Store 1');
console.log(product.getDetail());

// Decorator 3 with decorator 2 with decorator 1
const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();