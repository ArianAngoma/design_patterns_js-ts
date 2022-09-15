interface ListImplementor {

    elements: number[];

    addElement(element: number): void;

    getElement(): number[];

}

class OrderedList implements ListImplementor {

    elements: number[] = [];

    public addElement(element: number): void {

        this.elements.push(element);

        this.elements.sort((a, b) => a - b);

    }

    public getElement(): number[] {

        return this.elements;

    }

}

class UniqueList implements ListImplementor {

    elements: number[] = [];

    public addElement(element: number): void {

        if (this.elements.indexOf(element) === -1) {

            this.elements.push(element);

        }

    }

    public getElement(): number[] {

        return this.elements;

    }

}

interface DataAbstraction {

    implementor: ListImplementor;

    addElement(element: number): void;

    get(): number[];

    operation(fn: (number: number) => number): number[];

}

class DataRefinedAbstraction implements DataAbstraction {

    implementor: ListImplementor;

    constructor(implementor: ListImplementor) {

        this.implementor = implementor;

    }

    public addElement(element: number): void {

        this.implementor.addElement(element);

    }

    public get(): number[] {

        return this.implementor.getElement();

    }

    public operation(fn: (number: number) => number): number[] {

        return this.implementor.getElement().map(fn);

    }

}

const uniqueData = new DataRefinedAbstraction(new UniqueList());
uniqueData.addElement(1);
uniqueData.addElement(1);
uniqueData.addElement(1);
uniqueData.addElement(2);
uniqueData.addElement(2);
uniqueData.addElement(3);

console.log(uniqueData.get());

const orderedData = new DataRefinedAbstraction(new OrderedList());
orderedData.addElement(1);
orderedData.addElement(1);
orderedData.addElement(7);
orderedData.addElement(1);
orderedData.addElement(2);
orderedData.addElement(5);

console.log(orderedData.get());

const uniqueItems = uniqueData.operation((item: number) => item * 2);
console.log(uniqueItems);

const orderedItems = orderedData.operation((item: number) => item * 2);
console.log(orderedItems);