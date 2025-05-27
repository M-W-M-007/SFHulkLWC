import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    setValue() {
       let inputValue = this.template.querySelector('lightning-input').value;
        this.template.querySelector('c-child-component').childProperty2 = inputValue;
    }

    //empty text box
    emptyChildProperty2() {
        this.template.querySelector('c-child-component').clearChildProperty2();
    }

    childMessage = "No message recieved yet";
  
    //get message from child
    storeMessage(event) {
        this.childMessage = event.detail;
    }
}