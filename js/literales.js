"use strict";
let studentsApp = {
    items:
    {
        students: []
    },
    init: function () {
        $("#addBtn").click(studentsApp.addStudent);
        $("#print").click(studentsApp.showStudentsList);
        $("#update").click(studentsApp.updateDropout);
        $("#employability").click(studentsApp.updateDropout);
        $("#tech").click(studentsApp.topTech);
        $("#HSE").click(studentsApp.topHSE);
    },
    //add estudents
    addStudent: function () {
        let name = $("#name").val();
        let techGrade = parseInt($("#techGrade").val());
        let hseGrade = parseInt($("#gradeHSE").val());

        let Student = {
            name: name,
            techGrade: techGrade,
            hseGrade: hseGrade
        }
        studentsApp.items.students.push(Student);

    },
    //show students
    showStudents: function (student) {
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
    },
    //lista
    showStudentsList: function () {
        let div = document.getElementById("addNotes");
        let cadArr = " ";
        for (let i in studentsApp.items.students) {
            cadArr += studentsApp.showStudents(studentsApp.items.students[i]);
        }
        div.innerHTML = cadArr;
    },
    //filtrar estudiantes
    updateDropout: function () {
        let grade = studentsApp.items.students.filter(function (student) {
            return student.techGrade >= 70;
        });
        studentsApp.showEmployability(grade);
    },
    //showemployabolity
    showEmployability: function (grade) {
        let div = document.getElementById("addNotes");
        div.innerHTML = "";
        let cadArr = " ";
        for (let i in grade) {
            cadArr += studentsApp.showStudents(grade[i]);
        }
        div.innerHTML = cadArr;
    },
    //Top orden descendente notas tecnicas
    topTech: function () {
        let div = document.getElementById("addNotes");
        let cadArr = " ";
        div.innerHTML = "";
        //genera el top tech
        let topTech = studentsApp.items.students.filter(function (student) {
            return student.techGrade
        }).sort(function (a, b) {
            return b.techGrade - a.techGrade;
        });
        //imprime
        for (let i in topTech) {
            cadArr += studentsApp.showStudents(topTech[i]);
        }
        div.innerHTML = cadArr;

    },
    //Top orden descendente notas HSE
    topHSE: function () {
        let div = document.getElementById("addNotes");
        let cadArr = " ";
        div.innerHTML = "";
        //genera el topHSE
        let topHSE = studentsApp.items.students.filter(function (student) {
            return student.hseGrade
        }).sort(function (a, b) {
            return b.hseGrade - a.hseGrade;
        });
        //imprime
        for (let i in topHSE) {
            cadArr += studentsApp.showStudents(topHSE[i]);
        }
        div.innerHTML = cadArr;
    }
}
$(document).ready(studentsApp.init());