const data = {
    name: 'Erdinger Prkantus',
    country: 'Germany',
    info: 'Erdinger Prkantus is a German company that manufactures and sells food product.',
    image: 'https://www.erdinger.com/wp-content/uploads/2018/01/erdinger-logo.png'
}

class InfoContext {
    constructor(strategy, data) {
        this.setStrategy(strategy);

        this.data = data;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    show() {
        return this.strategy.show(this.data);
    }
}

class ListStrategy {
    show(data) {
        return `${data.name}\n${data.country}\n${data.info}`;
    }
}

class DetailedListStrategy {
    show(data) {
        return `El nombre de la cerveza es ${data.name}, fue creada en ${data.country} y tiene una descripción: ${data.info}`;
    }
}

class ListWithImageStrategy {
    show(data) {
        return `La imagen de la cerveza es: ${data.image}`;
    }
}


const info = new InfoContext(new ListStrategy(), data);
console.log(info.show());

info.setStrategy(new DetailedListStrategy());
console.log(info.show());

info.setStrategy(new ListWithImageStrategy());
console.log(info.show());
