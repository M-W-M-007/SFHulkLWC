import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import Component_Communication_Channel from '@salesforce/messageChannel/ComponentCommunicationChannel__c';

export default class ComponentA extends LightningElement {

    @wire (MessageContext)
    messageContext;
    handleButtonClick() {
        const messageInput = this.template.querySelector('lightning-input').value;
        const payload = { message: messageInput };
        publish(this.messageContext, Component_Communication_Channel, payload);
    }

}
