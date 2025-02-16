// document.querySelector(".btn").addEventListener("click", () => {
//   alert("hii");
// });

class persons {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `hello ${this.name}`;
  }
}

const p1 = new persons(1, "arief", 23);
const p2 = new persons(2, "fadillah", 19);
console.log(p1);
console.log(p1.sayHello());
