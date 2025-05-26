import { LightningElement, track } from 'lwc';

export default class PremitiveImpremitiveTrack extends LightningElement {

    firstName = '';
    lastName = '';
    email = '';

    //premitive data types
    studentData = {};

    //non-premitive data types
   @track recievedStudentData = {};

    handleFirstName(event) {
        console.log('FirstName');
        //this.firstName = event.target.value;
        this.studentData.firstName = event.target.value;
        //this.recievedStudentData.firstName = event.target.value;
    }

    handleLastName(event) {
        console.log('Last Name');
        //this.lastName = event.target.value;
        this.studentData.lastName = event.target.value;
       //this.recievedStudentData.lastName = event.target.value;
    }

    handleEmail(event) {
        console.log('Email');
        //this.email = event.target.value;
        this.studentData.email = event.target.value;
        //this.recievedStudentData.email = event.target.value;
    }
}