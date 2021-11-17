// 1. Create a function runningAverage() that returns a callable function object:
// // Example how it should work:
// runningAverage(10); //Outputs 10.0
// runningAverage(11); //Outputs 10.5
// runningAverage(12); //Outputs 11


// 2. Write a sum() function which will work properly when invoked using syntax below:
// sum(2,3); // Outputs 5
// sum(2)(3); // Outputs 5
// sum(1)(2)(3)(4); // Outputs 10


// 3. Create a function NamedOne() which takes first & last names as parameters and returns an object with firstName, lastName and fullName. If .firstName or .lastName are changed, then .fullName should also be changed. If .fullName is changed, then .firstName and .lastName should also be changed. Note: "input format" to .fullName will be firstName + space + lastName. If given fullName isn't valid then no property is changed.
// //Examples:
// var	namedOne = new NamedOne("Naomi","Wang");
// namedOne.firstName = "John"
// namedOne.lastName = "Doe"
// //...then...
// namedOne.fullName // -> "John Doe"
// // -- And:
// namedOne.fullName = "Bill Smith"
// //...then...
// namedOne.firstName // -> "Bill"
// namedOne.lastName // -> "Smith"
// // -- But:
// namedOne.fullName = "Tom" // -> no: lastName missing
// namedOne.fullName = "TomDonnovan" // -> no: no space between first & last names
// namedOne.fullName // -> "Bill Smith" (unchanged)
