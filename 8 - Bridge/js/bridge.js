class EncoderTextAbstraction {

    constructor(encoder) {
        this.encoder = encoder;
    }

    encode(str) {
        return this.encoder.encode(str);
    }

    decode(str) {
        return this.encoder.decode(str);
    }

}

class Base64EncoderImplementor {

    encode(str) {
        return btoa(str);
    }

    decode(str) {
        return atob(str);
    }

}

class HTMLEncoderImplementor {

    encode(str) {
        return str.split('.').reduce((acc, char) => acc + '<p>' + char + '</p>', '');
    }

    decode(str) {
        return str.replace(/<p>/g, '').replace(/<\/p>/g, '. ');
    }

}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode('Hello World!'));
console.log(encoder1.decode('SGVsbG8gV29ybGQh'));

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder2.encode('Hello World. This is a test'));
console.log(encoder2.decode('<p>Hello World</p><p>This is a test</p>'));

