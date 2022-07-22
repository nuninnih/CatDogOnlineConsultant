function register() {
  let petname = document.getElementById("petname").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let type = document.getElementById("type").value;
  let diagnosa = document.getElementsByName("diagnosa");

  let arrDiagnosa = [];
  for (let diag of diagnosa) {
    let obj = {
      name: diag.value,
      status: diag.checked,
    };
    arrDiagnosa.push(obj);
  }
  arrDiagnosa = JSON.stringify(arrDiagnosa);
  console.log(arrDiagnosa);
  localStorage.setItem("arrDiagnosa", arrDiagnosa);
  // buat setItem buat value sisanya
  localStorage.setItem("petname", petname);
  localStorage.setItem("age", age);
  localStorage.setItem("gender", gender);
  localStorage.setItem("type", type);

  window.location.replace("./validasi.html");
}

function getdata() {
  let getdiagnosa = localStorage.getItem("arrDiagnosa");
  let getname = localStorage.getItem("petname");
  let getage = localStorage.getItem("age");
  let getgender = localStorage.getItem("gender");
  let gettype = localStorage.getItem("type");
  let diagnosa = JSON.parse(getdiagnosa);

  let result = [];
  for (let i = 0; i < diagnosa.length; i++) {
    if (diagnosa[i].status === true) {
      result.push(diagnosa[i].name);
    }
  }

  document.getElementById("getname").innerHTML = `Your pet's name is ${getname}`;
  document.getElementById("getage").innerHTML = `Your pet's type is ${getage}`;
  document.getElementById("getgender").innerHTML = `Your pet's age is ${getgender}`;
  document.getElementById("gettype").innerHTML = `Your pet's type is ${gettype}`;
  document.getElementById("getsymptom").innerHTML = `The symptoms are ${result}`;
}

function submit() {}

function edit() {}
