import { students } from "../model/modelStundents.js";
import {studentsViewList} from "../views/viewStundents.js";
import {insertTitlesList} from "../views/viewStundents.js";

const buttonCall = document.getElementById("btnListar");
const getListStundents = (students) =>{
    let datos=[];
    for (let s of students) {
        let datosTemplate = `${s.name} ${s.lastName} ${s.age}`;
        datos.push(datosTemplate);
    }
    return datos;
}
buttonCall.addEventListener("click", ()=>{
    const response = getListStundents(students);
    studentsViewList(response);
    insertTitlesList();
}
);