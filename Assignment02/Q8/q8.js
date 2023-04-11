           
let prevstudents = localStorage.getItem("students");
let students = prevstudents ? JSON.parse(prevstudents) :[];
function providestudents(){
    let std = {
   StdName : prompt("Enter your name:"),
   age : prompt("Enter your age:"),
   city : prompt("Enter your city:")
    };
    students.push(std);
    console.log (students);

    let stringify = JSON.stringify(students);
    localStorage.setItem("students", stringify);
}