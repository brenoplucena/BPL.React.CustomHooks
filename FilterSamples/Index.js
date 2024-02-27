let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let tooYoung = arr.filter((el) => el.age <= 14);
console.log(tooYoung);

// Output: [ { id: 1, age: 12, name: 'Manu' } ]
