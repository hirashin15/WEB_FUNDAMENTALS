var users = [
  {
    name: "Michael",
    age: 37
  },
  {
    name: "John",
    age: 30
  },
  {
    name: "David",
    age: 27
  }
];

// Print John's age
for (var user in users) {
  if(users[user].name == "John"){
    console.log(users[user].age);
  }
}


// Print name of the first object
console.log(users[0].name);

// Print name and age of each user using a for loop
for (var user in users) {
  console.log(users[user].name);
  console.log(users[user].age);
}