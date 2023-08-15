
const studentsViewList = (resp)=>{
    const listado = document.getElementById("listStudents");
    const fragment = new DocumentFragment();
    const tem = document.getElementById("templateList").content;
    resp.forEach(element => {
        tem.querySelector("li").textContent = element;
        const miElemento = tem.cloneNode(true);
        fragment.appendChild(miElemento);
    });
    listado.appendChild(fragment);
}

const insertTitlesList = () =>{
const listado = document .getElementById("listDataStudent");
const title = document.createElement("h2");
title.innerHTML = "<strong>Listado de Estudiantes</strong>";
listado. insertAdjacentE1ement ("afterbegin",title);
}
export {studentsViewList,insertTitlesList} ;
