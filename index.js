class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }

  //call 

  const myCat = new Cat('Whiskers', 'male');
const myDog = new Dog('Buddy', 'female');
const myMaleBird = new Bird('Polly', 'male');
const myFemaleBird = new Bird('Kiwi', 'female');

console.log(myCat.speak());        
console.log(myDog.speak());        
console.log(myMaleBird.speak());   
console.log(myFemaleBird.speak()); 
