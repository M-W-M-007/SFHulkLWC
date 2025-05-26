import { LightningElement } from 'lwc';

export default class ParentLifeCycleHooks extends LightningElement {

    isVisible = true;

    constructor() {
        super();
        console.log('ParentLifeCycleHooks constructor()');
    }

    connectedCallback() {
        console.log('ParentLifeCycleHooks connectedCallback()');
}

renderedCallback() {
    console.log('ParentLifeCycleHooks renderedCallback()');
}

errorCallback(){
    console.log('Error Call Back From ParentLifeCycleHooks')
}

handleClick(){
    if(this.isVisible == true){
        this.isVisible = false;
    }else{
        this.isVisible = true;
    
    }
}



}