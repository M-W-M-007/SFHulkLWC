import { LightningElement, wire } from 'lwc';
import { publish, subscribe, MessageContext } from 'lightning/messageService';
import Component_Communication_Channel from '@salesforce/messageChannel/ComponentCommunicationChannel__c';

export default class ComponentA extends LightningElement {

    @wire (MessageContext)
    messageContext;


    /////////////////// A sending message ///////////////////////
    handleButtonClick() {
        const messageInput = this.template.querySelector('lightning-input').value;
        const payload = { messagea: messageInput };
        publish(this.messageContext, Component_Communication_Channel, payload);
    }


    ///////////////// A recieving message ///////////////////////

    subscriptiona = null;
    recievedmessagefromb = 'Message not recieived yet';
    connectedCallback() {
        if (!this.subscriptiona) {
            this.subscriptiona = subscribe(
                this.messageContext,
                Component_Communication_Channel,
                (payloadA) => this.handleMessageA(payloadA)
            );
        }
    }

    handleMessageA(payloadA) {
        console.log('Message received in Component A:', payloadA);
        this.recievedmessagefromb = payloadA.messageb;
    }

}
