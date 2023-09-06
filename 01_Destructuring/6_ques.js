// 06. Nested Objects.

// Write a function that takes an object representing a person as input and extracts the name and street properties from a nested object using object destructuring.
// The function should return an object with these two properties.
// A sample object is given below.

const person = {
    name: "Priyanka",
    age: 23,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
};

// solution

function extractData(obj) {
    const {
      name,
      address: { street },
    } = obj;
    return { name, street };
}
  
console.log(extractData(person)); // { name: 'Priyanka', street: 'B8, Block B, Industrial Area.' }
  
  
  
