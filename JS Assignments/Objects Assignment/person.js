const person={
    firstName:'Amrutha',
    lastName:'Nair'
}
//console.log(person.middleName);
person.middleName='sukumaran'
console.log(person)

eval(" person1={firstName:'Anjali', lastName:'Hudson'}")
console.log(person1)
person1.middleName='john'
console.log(person1)


var person3 = JSON.parse('{"firstName":"john", "lastName":"Hudson"}');
console.log(person3)