const students = [
  { id: 1, name: "Olha", group: "1" },
  { id: 2, name: "Vera", group: "2" },
  { id: 3, name: "Nastya", group: "2" },
  { id: 4, name: "Lera", group: "1" },
  { id: 5, name: "Natasha", group: "2" },
  { id: 6, name: "Tanya", group: "1" },
];
let newAllList = [];
let newGrList = [];
let activeList = [];

const ziro = (str) => {
  let newStr; 
  newStr = str<10? "0" + str : str;
  return newStr;
};

const getTime = () => {
  let now = new Date();
  let timeStr = "";
  timeStr = ziro(now.getHours()) + ":" + ziro(now.getMinutes()) +":" + ziro(now.getSeconds());
  document.getElementById("forTime").innerHTML = timeStr;
};

setInterval(getTime,1000); 

const sortList = () => {
  activeList.sort();
  document.querySelector(".showArea").innerHTML = "";
  activeList.map((e) => {
    document.querySelector(".showArea").innerHTML += e + "<br>";
  });
};

const showAllList = () => {
  newAllList = [];
  document.querySelector(".showArea").innerHTML = "";
  students.map((e) => {
    document.querySelector(".showArea").innerHTML += e.name + "<br>";
    newAllList.push(e.name);
  });
  console.log("New=", newAllList);
  activeList = newAllList;
};

const showGroupList = () => {
  newGrList = [];
  document.querySelector(".showArea").innerHTML = "";
  let num = document.getElementById("grSelect").value;
  inGruppNum = students.map((e) => {
    if (num === e.group) {
      document.getElementById("area").innerHTML += e.name + "<br>";
      newGrList.push(e.name);
      activeList = newGrList;
    }
  });
};
