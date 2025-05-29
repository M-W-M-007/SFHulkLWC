import { LightningElement, wire } from 'lwc';
import { publish, subscribe, MessageContext } from 'lightning/messageService';
import Component_Communication_Channel from '@salesforce/messageChannel/ComponentCommunicationChannel__c';

export default class ComponentA extends LightningElement {
    @wire(MessageContext)
    messageContext;

    // Store the latest message from B
    receivedMessageFromB = 'No message received yet';

    // Subscription for Component B's messages
    subscription = null;

    connectedCallback() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                Component_Communication_Channel,
                (payload) => this.handleMessageFromB(payload)
            );
        }
    }

    // Handle incoming messages from B
    handleMessageFromB(payload) {
        if (payload.messageb) {
            this.receivedMessageFromB = payload.messageb;
        }
    }

    // Send message to B
    handleButtonClick() {
        const messageInput = this.template.querySelector('lightning-input').value;
        const payload = { messagea: messageInput };
        publish(this.messageContext, Component_Communication_Channel, payload);
    }
}