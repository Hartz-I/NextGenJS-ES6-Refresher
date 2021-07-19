class Human {
  constructor() {
    this.gender = "male";
  }

  printMyGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); //used to initialize the parent class
    //adding a property using constructor
    this.name = "max";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person(); //creating and instance of the class
person.printMyName();
person.printMyGender();
