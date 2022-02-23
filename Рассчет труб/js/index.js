let res = document.querySelector('#res');
const btn = document.querySelector('#btn');
let inpl = document.querySelector('#l');
const pi = 3.14
const ro = 7950


btn.onclick =  () => {
    let s = +document.querySelector('#s').value;
    let d = +document.querySelector('#d').value;
    let l = +inpl.value;
    if (s == "") {
        alert("Ты дурак? Толщину я за тебя должен указать? Как я считать буду?");
    } else if (l == "") {
        alert("Ты не указал длину, как я считать буду?");
    } else if (d == "") {
        alert("Ты не указал диаметр, как я считать буду?");
    } else if (s > d) {
        alert("Толщина не может быть больше диаметра");
    } else if (l <= 0) {
        alert("Длина не может быть отрицательной")
    } else if (d <= 0) {
        alert("Диаметр не может быть отрицательным")
    } else if (s <= 0) {
        alert("Толщина не может быть отрицательной")
    } else {
        m = pi * ro * s * (d - s) * l / 1000000000;        
        res.innerHTML = m;
        inpl.value = "";
    }
}

