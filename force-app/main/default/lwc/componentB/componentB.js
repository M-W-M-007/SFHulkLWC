import { LightningElement, wire } from 'lwc';
import { publish, subscribe, MessageContext } from 'lightning/messageService';
import Component_Communication_Channel from '@salesforce/messageChannel/ComponentCommunicationChannel__c';

export default class ComponentB extends LightningElement {

    @wire(MessageContext)
    messageContext;

    subscription = null;
    recievedmessage = 'Message not recieived yet';
    connectedCallback() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                Component_Communication_Channel,
                (payload) => this.handleMessage(payload)
            );
        }
    }

    handleMessage(payload) {
        console.log('Message received in Component B:', payload);
        this.recievedmessage = payload.message;
    }

    

}