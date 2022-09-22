function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owners=[];
    this.getCarInfo=function(){
        return this.make+ " "+this.model+" released in "+this.year;
    }
    this.addOwner=function(owner){
        this.owners.push(owner);
    }
    this.removeOwner=function(owner){
        var index = this.owners.indexOf(owner);
             if (index > -1) { 
             this.owners.splice(index, 1);
             }
         }
    this.getOwnersCount=function(){
        return this.owners.length;
    }
    this.getOwnerNames=function(){
    return this.owners.map((owner) => owner.fullName());
     };
    this.getFullInfo=function(){
       return this.make+ " "+this.model+" from "+this.year+". "+this.getOwnersCount()+"person owns this car."+" These are - " + this.getOwnerNames()+ "."; 
    };
  };


  function Person(name, surname, age, gender, cars=[]) {
    this.name=name;
    this.surname=surname;
    this.age = age;
    this.gender = gender;
    this.cars= cars;
    this.fullName= function() {
    return this.name+" "+this.surname;
        };
    this.countCars=function(){
        return this.cars.length;
    }
    this.buysCar=function(car){
         this.cars.push(car);
         car.addOwner(this);
    }
    this.sellsCar=function(car){
         
         var index = this.cars.indexOf(car);
             if (index > -1) { 
             this.cars.splice(index, 1);
             }
          car.removeOwner(this);
    }
    this.getAllCarsInfo=function(){
        return this.name+" owns these cars: "+this.cars.map((car) => car.getCarInfo());
    }
    
    }