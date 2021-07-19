//in next gen you don't need constructor just use variable
// and also methods are described in arrow function

class NHuman {
  gender = "Nmale";

  printMyGender = () => {
    console.log(this.gender); //still use
  };
}

class NPerson extends NHuman {
  name = "Nmax";

  printMyName = () => {
    console.log(this.name);
  };
}

const Nperson = new NPerson(); //creating and instance of the class
Nperson.printMyName();
Nperson.printMyGender();
