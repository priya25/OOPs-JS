//creating object in 2 different ways

//Empty Object
var myCar0 = {};

//Using Object constructor
var myCar1 = new Object();

//Object with properties and their values
var myCar={carName:"Maruti",model:"2015",
carOwner: function(){
        var name=prompt("Please enter your name");
        return name;
}
};

//getting values of poperties
console.log(myCar.carName);
console.log(myCar.carOwner);

//Setting values of poperties
myCar.carName="Suzuki";

//By using the above way of making object, if we need to make 10 types of cars then we need to give value to every property 10 types for 10 different cars, So, to avoid that repetition of work we need to create the object using constructor method like follows.
function carConstructor(carName, model, color, brand){
        this.theCarName = carName;
        this.theModel = model;
        this.theColor = color;
        this.theBrand = brand;
}
var car1 = new carConstructor("800", 2010, "Black", "Maruti");
var car2 = new carConstructor("dezire",2014,"White", "Maruti Suzuki");

//Now if we want to access any property of the object created using constructor, the following code needed
car2.theBrand
