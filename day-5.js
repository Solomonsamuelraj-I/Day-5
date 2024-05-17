//1. question Class - Movie

class Movie {
 
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
     
    if (typeof this.rating === ‘undefined’) {
    this.rating = ‘PG’;
    }
    }
   }
 
   let mov1 = new Movie(‘Beast’, ‘Gold’);
   let mov2 = new Movie(‘Lion’, ‘Red’, ‘5’);
   let mov3 = new Movie(‘Tiger’, ‘silver’, ‘5’);
   let mov4 = new Movie(‘Red Moon’, ‘platinum’);
   console.log(mov1)
    
   function getPG(mov) {
    let res = []
    for (let i = 0; i < mov.length; i++) {
   if (mov[i].rating == ‘PG’) {
    res.push(mov[i].title);
    }
    }
    return res;
   }
   let arr = [mov1, mov2, mov3, mov4]
   console.log(getPG(arr))
     
   let mov5 = new Movie(‘Casino Royale’, ‘Eon Productions’, ‘PG13’);
   console.log(mov5);

   //Question 2.Convert the UML diagram to Typescript class. 

   class Circle {
    constructor(radius, color) {
            this.radius = radius;
            this.color = color;
        }
    getColor() { return this.color; }
        setColor(color) { this.color = color; }
        getRadius() { return this.radius; }
        setRadius(radius) { this.radius = radius; }
        tostring() {
            return ('[radius = ' + this.radius + ',color = ' + this.color + ']')
        }
    getArea() {
            return Math.PI * this.radius * this.radius;
        }
        getCircumference() { return 2 * (Math.PI) * this.radius }
    }
    let circ = new Circle(1.0, 'red');
    console.log(circ);
    console.log(circ.getColor());
    console.log(circ.getRadius());
    circ.setColor('blue')
    console.log(circ.getColor())
    circ.setRadius(5.0)
    console.log(circ.getRadius());
    console.log('Circle : ' + circ.tostring());
    console.log(circ.getArea());
    console.log(circ.getCircumference());

    //question 3.Write a “person” class to hold all the details.

    class Person {
        constructor(name, age, gender, designation) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.designation = designation;
        }
        get pName() { return this.name; }
        set pName(p) { this.name = p; }
        get pAge() { return this.age; }
        set pAge(p) { this.age = p; }
        get pGender() { return this.gender; }
        set pGender(p) { this.gender = p; }
        get pDesignation() { return this.designation; }
        set pDesignation(p) { this.designation = p; }
    }
    let person = new Person('solomon', 32, 'Male', 'Analyst');
    console.log(person);

    //question 4.write a class to calculate uber price.

    class Uber {
        distance = 10;
        wait = 5;
        consructor(distance, wait) {
            this.distance = distance;
            this.wait = wait;
        }
        get distance() { return this.distance; }
        set distance(value) { this.distance = value; }
        get wait() { return this.wait; }
        set wait(value) { this.wait = value; }
    calculatePrice(dis) {
            //1km = Rs.6
            //min = Rs.70
            let min = 70;
            this.distance = dis;
            let price = dis * 6;
            let res = 0;
            if (min > price) {
                res = min;
            } else {
                res = price;
            }
            console.log(res);
            return res;
    }
        calculateWait(w) {
            let res = 0;
    this.wait = w;
            let result = 0;
            //30min wait is Rs.100
            if (w > 15 && w < 30) {
                result = 50;
    }
            if (w < 15) {
                result = 0;
            }
            if (w > 30) {
                result = Math.floor(w / 30);
                res = result * 100;
    }
            console.log(res);
            return res;
        }
    }
    let raid = new Uber(300, 45);
    let p1 = (raid.calculatePrice(300))
    let w1 = (raid.calculateWait(45))
    console.log(p1 + w1);