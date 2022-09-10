class Subject {

    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => observer !== obs);
    }

    sendNotify(data) {
        this.observers.forEach(observer => observer.notify(data));
    }

}

class ItemsSubject extends Subject {

    constructor() {
        super();

        this.data = []
    }

    add(item) {
        this.data.push(item);
        this.sendNotify(this.data)
    }

}

class HtmlElementObserver {

    constructor(element) {
        this.element = element;
    }

    notify(data) {
        this.element.innerHTML = data.reduce((acc, item) => acc + `<li>${item}</li>`, '');
    }

}

class Observer {

    constructor(fn) {
        this.fn = fn;
    }

    notify(data) {
        this.fn(data);
    }

}

const div1Observer = new HtmlElementObserver(div1);
const div2Observer = new HtmlElementObserver(div2);

const observer1 = new Observer(data => div3.innerHTML = data.length);


const items = new ItemsSubject();

items.subscribe(div1Observer);
items.subscribe(div2Observer);


items.subscribe(observer1);

function add() {
    const name = txtName.value;

    items.add(name);
}