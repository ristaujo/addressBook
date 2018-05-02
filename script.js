class addressBook {
  constructor () {
    this.contacts = [];
  }

  add(info) {
    let newcontact = new Contact(info.name, info.email, info.phone, info.relation);
    this.contacts.push(newcontact);
    console.log(this.contacts);
  }

  deleteAt(index) {
    this.contacts.splice(index, 1);
  }

  printThis() {
    console.log(this.contacts);
  }

};

class Contact {
  constructor (name, email, phone, relation) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.relation = relation;
  }
};

const address = new addressBook();
while (true) {
  let choice = prompt("Would you like to add, delete, print, or quit?");

  if (choice === "add") {
    let info = {
      name: prompt("What is the contact's name?"),
      email: prompt("What is the contact's email?"),
      phone: prompt("What is the contact's phone number?"),
      relation: prompt("What is the contact's relation to you?")
    }
    address.add(info);
  } else if (choice === "delete") {
    let index = prompt("Please specifiy which index you would like to delete.");
    address.deleteAt(index);
  } else if (choice === "print") {
    for (let i = 0; i < address.contacts.length; i++) {
      console.log(address.contacts[i]);
    }
  } else if (choice === "quit") {
    break;
  }
}
