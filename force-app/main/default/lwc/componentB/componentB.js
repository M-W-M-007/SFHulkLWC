import { LightningElement, wire } from 'lwc';
import { publish, subscribe, MessageContext } from 'lightning/messageService';
import Component_Communication_Channel from '@salesforce/messageChannel/ComponentCommunicationChannel__c';

export default class ComponentB extends LightningElement {
    @wire(MessageContext)
    messageContext;

    // Store the latest message from A
    receivedMessageFromA = 'No message received yet';

    // Subscription for Component A's messages
    subscription = null;

    connectedCallback() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                Component_Communication_Channel,
                (payload) => this.handleMessageFromA(payload)
            );
        }
    }

    // Handle incoming messages from A
    handleMessageFromA(payload) {
        if (payload.messagea) {
            this.receivedMessageFromA = payload.messagea;
        }
    }

    // Send message to A
    handleButtonClick() {
        const messageInput = this.template.querySelector('lightning-input').value;
        const payload = { messageb: messageInput };
        publish(this.messageContext, Component_Communication_Channel, payload);
    }

    // Send message to C
    handleButtonClickC() {
        const messageInput = this.template.querySelector('lightning-input').value;
        const payload = { messagec: messageInput };
        publish(this.messageContext, Component_Communication_Channel, payload);
    }
}