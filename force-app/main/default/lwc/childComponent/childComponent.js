import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

   @api childProperty1 = '';
    @api childProperty2 = '';

    //Adtional Line to empty the text box

    @api clearChildProperty2() {
        console.log('clearChildProperty2 called');
        this.childProperty2 = '';
    }

}