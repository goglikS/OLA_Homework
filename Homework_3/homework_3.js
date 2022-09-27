  const carInfo = {
       getCarInfo(){
        return this.make+ " "+this.model+" released in "+this.year;
    },
    
    addOwner(owner){
        this.owners.push(owner);
    },
    
    removeOwner(owner){
        var index = this.owners.indexOf(owner);
             if (index > -1) { 
             this.owners.splice(index, 1);
             }
         },
         
    getOwnersCount(){
        return this.owners.length;
    }     ,
    
    getOwnerNames(){
    return this.owners.map((owner) => owner.fullName());
     },
    getFullInfo(){
       return this.make+ " "+this.model+" from "+this.year+". "+this.getOwnersCount()+" person owns this car."+" These are - " + this.getOwnerNames()+ "."; 
    }
  };
  
function createCar(make, model, year) {
  let car = Object.create(carInfo);
  car.make = make;
  car.model = model;
  car.year = year;
  car.owners = [];

  return car;
}



function createPerson(name, surname, age, gender, cars = []) {
  let person = Object.create(personInfo);
  person.name = name;
  person.surname = surname;
  person.age = age;
  person.gender = gender;
  person.cars = cars;

  return person;
}
  const personInfo = {
     fullName() {
    return this.name+" "+this.surname;
        },
    countCars(){
        return this.cars.length;
    },
    buysCar(car){
         this.cars.push(car);
         car.addOwner(this);
    },
    sellsCar(car){
         
         var index = this.cars.indexOf(car);
             if (index > -1) { 
             this.cars.splice(index, 1);
             }
          car.removeOwner(this);
    },
    getAllCarsInfo(){
        return this.name+" owns these cars: "+this.cars.map((car) => car.getCarInfo());
    }
  }