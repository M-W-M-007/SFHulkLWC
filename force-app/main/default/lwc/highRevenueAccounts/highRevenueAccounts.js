import { LightningElement, wire } from 'lwc';

import getHighRevenueRecords from '@salesforce/apex/AccountController.getHighRevenueRecords';
export default class HighRevenueAccounts extends LightningElement {

    accountToDisplay = [];
    countTheRecords = 5;

    @wire(getHighRevenueRecords, {count: '$countTheRecords'})
    getAccountHandler(response){
        const{data, error} = response;

if(error){
    console.log(error); 
    return;
    }
if(data){
    this.accountToDisplay = data;
}
}
 

onSetup(event){
    let inputValue = event.target.value;
    if (inputValue == '') return; 
    this.countTheRecords = event.target.value;
}
// onSetup(event){
//     this.countTheRecords = event.target.value;
//     console.log(this.countTheRecords);
//     getHighRevenueRecords({count: this.countTheRecords})
//         .then(result => {
//             this.accountToDisplay = result;
//         })
//         .catch(error => {
//             console.error('Error fetching accounts:', error);
//         });
}