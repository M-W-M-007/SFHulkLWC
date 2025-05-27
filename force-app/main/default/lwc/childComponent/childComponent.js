import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

   @api childProperty1 = '';
    @api childProperty2 = '';

    //Adtional Line to empty the text box

    @api clearChildProperty2() {
        console.log('clearChildProperty2 called');
        this.childProperty2 = '';
    }

    sendToParent(){
        console.log('Parent method get called');
       const inputValue = this.template.querySelector('lightning-input').value ;
             let evt = new CustomEvent('send', {detail: inputValue})   
        this.dispatchEvent(evt);      
    }

}