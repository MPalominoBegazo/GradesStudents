
class appStudent{
    constructor()
    {
        this.students=[];
    }
    init() {
        $("#addBtn").click(() => this.addStudent());
        $("#print").click(() =>this.showStudentsList());
        $("#update").click(() =>this.updateDropout());
        $("#employability").click(() =>this.updateDropout());
        $("#tech").click(() =>this.topTech());
        $("#HSE").click(() =>this.topHSE());
    }
    //add estudents
    addStudent() {
        let div = document.getElementById("addNotes");
        let name = $("#name").val();
        let techGrade = parseInt($("#techGrade").val());
        let hseGrade = parseInt($("#gradeHSE").val());
        let prom = (techGrade  + hseGrade)/2;

        let Student = {
            name: name,
            techGrade: techGrade,
            hseGrade: hseGrade,
            promedio: prom
        }
        this.students.push(Student);
       // console.log(this.students);
        div.innerHTML = this.showStudents(Student);

    }
    //show students
    showStudents(student) {
        let resultado = `<li>
                            <div class="rotate-1 lazur-bg">
                                <div class='card blue-grey darken-1'>
                                            <div class='card-content white-text'>
                                                <p><strong>Nombre:</strong>${student.name}</p>
                                                <p><strong>Puntos Técnicos:</strong>${student.techGrade}</p>
                                                <p><strong>Puntos HSE:</strong>${student.hseGrade}</p>
                                                <p><strong>Promedio:</strong>${student.promedio}</p>
                                            </div>
                                </div>
                            </div>
                        </li>`;
        return resultado;
    }
    //lista
    showStudentsList() {
        let div = document.getElementById("addNotes");
        let cadArr = " ";
        console.log(this.students);
        for (let i in this.students) {
            cadArr += this.showStudents(this.students[i]);
        }
        div.innerHTML = cadArr;
    }
    //filtrar estudiantes
    updateDropout() {
        let grade = this.students.filter(function (student) {
            
            return student.promedio >= 70;
        });
        this.showEmployability(grade);
    }
    //showemployabolity
    showEmployability(grade) {
        let div = document.getElementById("addNotes");
        div.innerHTML = "";
        let cadArr = " ";
        for (let i in grade) {
            cadArr += this.showStudents(grade[i]);
        }
        div.innerHTML = cadArr;
    }
    //Top orden descendente notas tecnicas
    topTech() {
        let div = document.getElementById("addNotes");
        let cadArr = " ";
        div.innerHTML = "";
        //genera el top tech
        let topTech = this.students.filter(function (student) {
            return student.techGrade
        }).sort(function (a, b) {
            return b.techGrade - a.techGrade;
        });
        //imprime
        for (let i in topTech) {
            cadArr += this.showStudents(topTech[i]);
        }
        div.innerHTML = cadArr;

    }
    //Top orden descendente notas HSE
    topHSE() {
        let div = document.getElementById("addNotes");
        let cadArr = " ";
        div.innerHTML = "";
        //genera el topHSE
        let topHSE = this.students.filter(function (student) {
            return student.hseGrade
        }).sort(function (a, b) {
            return b.hseGrade - a.hseGrade;
        });
        //imprime
        for (let i in topHSE) {
            cadArr += this.showStudents(topHSE[i]);
        }
        div.innerHTML = cadArr;
    }

  
}

let student = new appStudent();
student.init();