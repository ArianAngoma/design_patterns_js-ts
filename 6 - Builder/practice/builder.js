class Form {

    constructor(controls, action) {
        this.controls = controls;
        this.action = action;
    }

    getContent() {
        return `<form action="${this.action}">
                    ${this.controls.reduce((acc, control) => acc + `<div>
                        ${this.getLabel(control)}
                        ${this.getInput(control)}
                    </div>`, '')}
                    
                    <button type="submit">Submit</button>
                </form>`;
    }

    getLabel(control) {
        return `<label>${control.text}</label>`;
    }

    getInput(control) {
        return `<input type="${control.type}" name="${control.name}">`;
    }

}

class FormBuilder {

    constructor() {
        this.reset();
    }

    reset() {
        this.action = '';
        this.controls = [];
    }

    setAction(action) {
        this.action = action;
        return this;
    }

    setText(name, text) {
        this.controls.push({name, text, type: 'text'});
        return this;
    }

    setMail(name, text) {
        this.controls.push({name, text, type: 'mail'});
        return this;
    }

    setCheckbox(name, text) {
        this.controls.push({name, text, type: 'checkbox'});
        return this;
    }

    setColor(name, text) {
        this.controls.push({name, text, type: 'color'});
        return this;
    }

    build() {
        const form = new Form(this.controls, this.action);
        this.reset();
        return form;
    }

}

const formBuilder = new FormBuilder();
const formPeople = formBuilder.setAction('/people')
    .setText('name', 'Name')
    .setText('surname', 'Surname')
    .setCheckbox('isAdult', 'Adult')
    .setMail('email', 'Email')
    .setColor('color', 'Color')
    .build();

form1.innerHTML = formPeople.getContent();

const formMail = formBuilder.setAction('/mail')
    .setText('name', 'Name')
    .setMail('email', 'Email')
    .build();

console.log(formMail.getContent());

form2.innerHTML = formMail.getContent();