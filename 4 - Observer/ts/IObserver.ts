interface IObserver<T> {
    notify(value: T): void;
}

interface ISubject<T> {
    observers: IObserver<T>[];

    subscribe(observer: IObserver<T>): void;

    unsubscribe(observer: IObserver<T>): void;

    sendNotification(value: T): void;
}

class Subject<T> implements ISubject<T> {
    observers: IObserver<T>[]

    constructor() {
        this.observers = [];
    }

    subscribe(observer: IObserver<T>) {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    sendNotification(value: T) {
        this.observers.forEach((observer) => observer.notify(value));
    }
}

class Observer<T> implements IObserver<T> {
    private readonly fn: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }

    notify(value: T) {
        this.fn(value);
    }
}

const observer1 = new Observer<number>((value) => console.log(`Observer 1: ${value}`));
const subject = new Subject<number>();
subject.subscribe(observer1);
subject.sendNotification(1.2);


const observer2 = new Observer<string>((value) => console.log(`Observer 2: ${value}`));
const subject2 = new Subject<string>();
subject2.subscribe(observer2);
subject2.sendNotification('Hello World');

