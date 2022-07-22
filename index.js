function register(){
    let petname = document.getElementById('petname').value
    let age = document.getElementById('age').value
    let gender = document.getElementById('gender').value
    let type = document.getElementById('type').value
    let diagnosa = document.getElementsByName('diagnosa')

    let arrDiagnosa = []
    for(let diag of diagnosa){
        let obj = {
            name : diag.value,
            status : diag.checked
        }
        arrDiagnosa.push(obj)
    }
    arrDiagnosa = JSON.stringify(arrDiagnosa)
    console.log(arrDiagnosa);
    localStorage.setItem('arrDiagnosa', arrDiagnosa)
    // buat setItem buat value sisanya
    localStorage.setItem('petname', petname)
    localStorage.setItem('age', age)
    localStorage.setItem('gender', gender)
    localStorage.setItem('type', type)

}

localStorage.getItem('arrDiagnosa')
localStorage.getItem('petname', petname)
localStorage.getItem('age', age)
localStorage.getItem('gender', gender)
localStorage.getItem('type', type)
let diagnosa = JSON.parse(arrDiagnosa)

