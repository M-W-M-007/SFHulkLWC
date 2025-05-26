import { LightningElement } from 'lwc';

export default class ChildLifeCycleHooks extends LightningElement {

    constructor() {
        super();
        console.log('Child Life Cycle Hooks constructor()');
    }

    connectedCallback() {
        console.log('Child Life Cycle Hooks connectedCallback()');
}

renderedCallback() {
    console.log('Child Life Cycle Hooks renderedCallback()');
}

disconnectedCallback(){
    console.log('Child Life Cycle Hooks disconnectedCallback()');
}

}