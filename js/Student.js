class Student extends User{
    constructor(login,password,name){
        super(login,password)
        this.name = name;
    }
}
const student = new Student('student1','qwertyuiopuyt','Pavel')
console.log(student.checkPass())
