class Vehicle {
  constructor(make,model) {
    this.make = make; 
    this.model = model; 
  }
}
class Car extends Vehicle {
    constructor(make,model,year,owners=[]) {
    super(make,model);
    this.year=year;
    this.owners=owners;
    }
    
    getCarInfo(){
        return this.make+ " "+this.model+" released in "+this.year;
    }
    
    addOwner(owner){
        this.owners.push(owner);
    }
    
    removeOwner(owner){
        var index = this.owners.indexOf(owner);
             if (index > -1) { 
             this.owners.splice(index, 1);
             }
         }
         
    getOwnersCount(){
        return this.owners.length;
    }     
    
    getOwnerNames(){
    return this.owners.map((owner) => owner.fullName());
     };
    getFullInfo(){
       return this.make+ " "+this.model+" from "+this.year+". "+this.getOwnersCount()+" person owns this car."+" These are - " + this.getOwnerNames()+ "."; 
    };
}

class Person {
    constructor(name, surname, age, gender, cars = []){
    this.name=name;
    this.surname=surname;
    this.age = age;
    this.gender = gender;
    this.cars= cars;
     }
    fullName() {
    return this.name+" "+this.surname;
        };
    countCars(){
        return this.cars.length;
    }
    buysCar(car){
         this.cars.push(car);
         car.addOwner(this);
    }
    sellsCar(car){
         
         var index = this.cars.indexOf(car);
             if (index > -1) { 
             this.cars.splice(index, 1);
             }
          car.removeOwner(this);
    }
    getAllCarsInfo(){
        return this.name+" owns these cars: "+this.cars.map((car) => car.getCarInfo());
    }
}