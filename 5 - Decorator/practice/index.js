// Component
class ClientComponent {
    constructor(url) {
        this.url = url;
    }

    async getDate() {
        const response = await fetch(this.url);
        return await response.json();
    }
}

// Decorator
class ClientDecorator {
    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }

    async getDate() {
        return await this.clientComponent.getDate();
    }
}

// Decorator 2
class UpperCaseClientDecorator extends ClientDecorator {
    constructor(clientComponent) {
        super(clientComponent);
    }

    async getDate() {
        const data = await super.getDate();
        return data.map(item => ({...item, title: item.title.toUpperCase()}));
    }
}


// Decorator 3
class HTMLClientDecorator extends ClientDecorator {
    constructor(clientComponent) {
        super(clientComponent);
    }

    async getDate() {
        const data = await super.getDate();
        return data.map(item => ({...item, title: `<h1>${item.title}</h1>`, thumbnailUrl: `<img src="${item.thumbnailUrl}">`}));
    }
}

(async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;

    const client = new ClientComponent(url);

    const data = await client.getDate();
    // console.log(data);

    const upperCaseClient = new UpperCaseClientDecorator(client);

    const upperCaseData = await upperCaseClient.getDate();
    // console.log(upperCaseData);

    const htmlClient = new HTMLClientDecorator(upperCaseClient);
    const htmlData = await htmlClient.getDate();
    console.log(htmlData);

    divContent1.innerHTML = htmlData.reduce((acc, item) => acc + item.title + item.thumbnailUrl, '');

    const htmlClient2 = new HTMLClientDecorator(client);
    const htmlData2 = await htmlClient2.getDate();
    console.log(htmlData2);

    divContent2.innerHTML = htmlData2.reduce((acc, item) => acc + item.title + item.thumbnailUrl, '');

})();