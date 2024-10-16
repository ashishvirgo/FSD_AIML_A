const student={
    name: "XYZ",
    branch: "CS",
    sec: "A",
}
console.log(student);
const newStudent={id: 101,...student,sec: "B"};
//newStudent.name="ABC";
console.log(newStudent);
console.log(student);
const emp=["ABC",56,1000023.50];
console.log(emp);
const emp1=[101,...emp];
console.log(emp1);
