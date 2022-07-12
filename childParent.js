import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/GetAllAccounts.getAccounts'

export default class ChildParent extends LightningElement {

     //accountId
     @track value
     @track items=[]
 
     handleChange(event) {
         this.value = event.detail.value;
     }
 
     get options(){
         return this.items
     }
 
     @wire (getAccounts)
     WAccounts({ error, data}) {
         if (data) {  
             for(let i=0; i<data.length; i++) {
                 console.log('id=' + data[i].Id);
                 //spread operator
                 this.items = [...this.items ,{value: data[i].Id , label: data[i].Name}];                                   
             }  
            // console.log(JSON.stringify(data));
            
         } else if (error) {
            console.log(error);
         }else{
             console.log('unknown error')
         }
     }
 
     clickHandler(){
             const myevent = new CustomEvent('fetch',{
                 detail: this.value})
             this.dispatchEvent(myevent)
             console.log(this.value)
         }
 
}