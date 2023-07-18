a = "111111";
b = a.toString();
c = Number(a);
let str = `привет ${c}`;

console.log(str.toUpperCase());

if (100 < 11) {
  console.log("правда");
} else {
  console.log("ложь");
}

d = "";
res = d ? console.log("тернар_правда") : console.log("тернар_ложь");

const arr = [12, 21, 51, 100];
const obj = {
  var1: "ура",
  var2: 500,
  var3: {
    var1: "ура2",
    var2: 444,
  },
};

console.log(arr[0]);
console.log(obj["var1"]);
console.log(obj.var3.var1);

const data = [
  {
    title: "can you speak?",
    cost: 10001,
    description: "we a champion",
  },
  {
    title: "can you speak?",
    cost: 10002,
    description: "we a champion",
  },
  {
    title: "can you speak?",
    cost: 10003,
    description: "we a champion",
  },
];

const newArr = data.map((item) => {
  console.log(item.cost);
  return item + 1;
});

const newArr2 = data.filter((item) => {
  return item.cost >= 10002;
});
console.log(newArr2);
arr.push(9999);
arr.shift();
console.log(arr);

arr.forEach((item) => console.log(item));
