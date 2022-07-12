import { LightningElement,wire,track } from 'lwc';
import getCaseRecords from '@salesforce/apex/GetAllAccounts.getCaseRecords';

export default class ParentChild extends LightningElement {

    @track accountId
     cases
    gotRecordId = false

    @wire (getCaseRecords, { Id: '$accountId' })
    wiredCaseRecords({error,data}){
        if (data) {  
           this.cases = data
        } else 
           console.log(error);
    }

    fetchhandler(event){
        this.accountId = event.detail
        this.gotRecordId=true

    }
}