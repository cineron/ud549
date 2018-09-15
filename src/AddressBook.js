// function AddressBook(params) {

    // }

    // function addContact() {
//     //add a contact
// }
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    
    addContact(contact) {
        this.contacts.push(contact);
    }

    getContact(index) {
        return this.contacts[index];
    }
}

