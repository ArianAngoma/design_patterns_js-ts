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

class Observer {

    constructor(fn) {
        this.fn = fn;
    }

    notify(data) {
        this.fn(data);
    }

}

const observer1 = new Observer(data => console.log(`Observer 1: ${data}`));

const observer2 = new Observer(data => {
    div1.innerHTML = data;
});

const observer3 = new Observer(data => {
    div2.innerHTML = data.split('').reverse().join('');
})

const subject = new Subject();

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

// subject.unsubscribe(observer1);

function change() {
    subject.sendNotify(myText.value);
}