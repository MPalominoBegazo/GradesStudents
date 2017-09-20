$("#addBtn").click(addStudent);
$("#print").click(showStudentsList);
$("#update").click(updateDropout);
$("#employability").click(updateDropout);
$("#tech").click(topTech);
$("#HSE").click(topHSE);

let students = [];

//agregar studiante
function addStudent() {
    let name = $("#name").val();
    let techGrade = parseInt($("#techGrade").val());
    let hseGrade = parseInt($("#gradeHSE").val());

    let Student = {
        name: name,
        techGrade: techGrade,
        hseGrade: hseGrade
    }
    students.push(Student);

}

//mostrar estudiantes
function showStudents(student) {
    let resultado = `<li>
                        <div class="rotate-1 lazur-bg">
                            <div class='card blue-grey darken-1'>
                                        <div class='card-content white-text'>
                                            <p><strong>Nombre:</strong>${student.name}</p>
                                            <p><strong>Puntos Técnicos:</strong>${student.techGrade}</p>
                                            <p><strong>Puntos HSE:</strong>${student.hseGrade}</p>
                                        </div>
                            </div>
                        </div>
                    </li>`;


    return resultado;
}

//lista
function showStudentsList() {
    let div = document.getElementById("addNotes");
    let cadArr = " ";
    for (let i in students) {
        cadArr += showStudents(students[i]);

    }
    div.innerHTML = cadArr;
}

//filtrar estudiantes
function updateDropout() {
    let grade = students.filter(function (student) {
        return student.techGrade >= 70;
    });
    showEmployability(grade);


}

//showemployabolity
function showEmployability(grade) {
    let div = document.getElementById("addNotes");
    div.innerHTML = "";
    let cadArr = " ";

    for (let i in grade) {
        cadArr += showStudents(grade[i]);
    }
    div.innerHTML = cadArr;

}

//Top orden descendente notas tecnicas
function topTech() {
    let div = document.getElementById("addNotes");
    let cadArr = " ";
    div.innerHTML = "";

    //genera el top tech
    let topTech = students.filter(function (student) {
        return student.techGrade
    }).sort(function (a, b) {
        return b.techGrade - a.techGrade;
    });

    //imprime
    for (let i in topTech) {
        cadArr += showStudents(topTech[i]);
    }
    div.innerHTML = cadArr;

}

//Top orden descendente notas HSE
function topHSE() {
    let div = document.getElementById("addNotes");
    let cadArr = " ";
    div.innerHTML = "";
    //genera el topHSE
    let topHSE = students.filter(function (student) {
        return student.hseGrade
    }).sort(function (a, b) {
        return b.hseGrade - a.hseGrade;
    });

    //imprime
    for (let i in topHSE) {
        cadArr += showStudents(topHSE[i]);
    }
    div.innerHTML = cadArr;
}