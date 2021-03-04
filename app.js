// create an array of objects
const userData = [
  {
    name: " Hope Anthony",
    age: "27",
  },
  {
    name: " Karis Elijah",
    age: "30",
  },
  {
    name: " Rich Halliday",
    age: "25",
  },
  {
    name: " Chisom Okoh",
    age: "25",
  },
  {
    name: " Goodnews Loveday",
    age: "25",
  },
  {
    name: " Wisdom Boms",
    age: "25",
  },
  {
    name: " Leah Koniseme",
    age: "25",
  },
  {
    name: " Nengi Tammy",
    age: "25",
  },
  {
    name: " Favour Obuge",
    age: "25",
  },
  {
    name: " Chimobi Mbah",
    age: "25",
  },
  {
    name: " Sam Ogbe",
    age: "25",
  },
  {
    name: " Chimobi Awaji",
    age: "25",
  },
  {
    name: " Anita Anokwuru",
    age: "20",
  },
  {
    name: " Ben Chinda",
    age: "22",
  },
  {
    name: " Imaobong Terry",
    age: "21",
  },
  {
    name: " Temple Odum",
    age: "25",
  },
  {
    name: " Brian Kalu",
    age: "25",
  },
  {
    name: " Rita Mex",
    age: "21",
  },
  {
    name: " Eddy Samuel",
    age: "24",
  },
  {
    name: " Esther Akpan",
    age: "25",
  },
];
function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
userData.sort(compare);
//store the array items in local storage
localStorage.setItem("user", JSON.stringify(userData));

//convert the string back to an object so iteraton is possible
const users = localStorage.getItem("user");
var obj = JSON.parse(users);
console.log(obj);
// const demo = document.querySelector("#demo");
obj.forEach((user) => {
  document.getElementById("demo").innerHTML += `<p>${user.name}</p>
  <p>${user.age}</p>`;
});

// demo.innerHTML = html;
