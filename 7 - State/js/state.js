class DocumentContext {

    constructor() {
        this.content = '';
        this.state = new BlankState();
    }

    setState(state) {
        this.state = state;
    }

    write(text) {
        this.state.write(this, text);
    }

}

class BlankState {

    write(documentContext, text) {
        documentContext.content = text;
        documentContext.setState(new WithContextState());
    }

}

class WithContextState {

    write(documentContext, text) {
        documentContext.content += " " + text;
    }

}

class ApprovedState {

    write(documentContext, text) {
        console.error("Document is approved, you can't change it");
    }

}

const documentContext = new DocumentContext();
// console.log(documentContext);

documentContext.write("Hello");
console.log(documentContext.content);
console.log(documentContext.state);

documentContext.write("World");
console.log(documentContext.content);
console.log(documentContext.state);

documentContext.write("!");
console.log(documentContext.content);
console.log(documentContext.state);

documentContext.setState(new ApprovedState());
documentContext.write("!");


documentContext.setState(new WithContextState());
documentContext.write("No way");

console.log(documentContext.state);
console.log(documentContext.content);

