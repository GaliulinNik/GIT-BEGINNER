a = "111111";
b = a.toString();
c = Number(a);
let str = `привет ${c}`;

// console.log(str.toUpperCase());

if (100 < 11) {
  // console.log("правда");
} else {
  // console.log("ложь");
}

d = "";
// res = d ? console.log("тернар_правда") : console.log("тернар_ложь");

const arr = [12, 21, 51, 100];
const obj = {
  var1: "ура",
  var2: 500,
  var3: {
    var1: "ура2",
    var2: 444,
  },
};

// console.log(arr[0]);
// console.log(obj["var1"]);
// console.log(obj.var3.var1);

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
  // console.log(item.cost);
  return item + 1;
});

const newArr2 = data.filter((item) => {
  return item.cost >= 10002;
});
// console.log(newArr2);
arr.push(9999);
arr.shift();
// console.log(arr);

// arr.forEach((item) => console.log(item));
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// });
// console.log(3);
// console.log(4);

// const res1 = add(2, 3);
// const add = async (a, b) => {
//   a + b;
// };
// const res2 = await add(2, 3);
// console.log(res1);
// console.log(res2);

//замыкание
function getCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}
const count = getCounter();
// console.log(count());
// console.log(count());
// console.log(count());

function add(x) {
  function closure(y) {
    const z = x + y;
    console.log(`${x} + ${y} = ${z}`);
    return z;
  }
  return closure;
}
const res = add(3)(5);
console.log(res);

const add2 = (x) => (y) => {
  const z = x + y;
  console.log(`${x} + ${y} = ${z}`);
  return z;
};
const res2 = add2(3)(5);
console.log(res2);

const add3 = (x) => (y) => x + y;
const res3 = add3(3)(5);
console.log(res3);

const logger = (param) => {
  const colors = {
    warning: "\x1b[1;33m",
    error: "\x1b[0;31m",
    info: "\x1b[1;37m",
  };

  const color = colors[param] || colors.info;
  return (str) => {
    const date = new Date().toISOString();
    console.log(color + date + "\t" + str);
  };
};

const warning = logger("warning");
const error = logger("error");
const info = logger("info");
warning("warning warning warning warning");
error("error error error error error");
info("info info info info info info");
logger("warning");

const keyGen = (symbols) => {
  const max = symbols.length;

  return (length) => {
    let key = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * max);
      key = key + symbols[index];
    }
    return key;
  };
};
// const symbols = "qwerty";
// const genPass = keyGen(symbols);
// const newPass = genPass(7);
const newPass = keyGen("qwerty")(20);
console.log("newPass----", newPass);

const toy = {
  name: "Leo",
  voice() {
    console.log("Voice " + this.name);
  },
};

toy.voice();

const toy2 = {
  name: "Bird",
};

toy.voice.call(toy2); //можем передать аргументы
toy.voice.apply(toy2); //можем передать массив аргументов

function person() {
  let name = "Peter";

  return function displayName() {
    console.log(name);
  };
}

let peter = person();
peter(); // 'Peter'
