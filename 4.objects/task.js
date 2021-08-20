function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


Student.prototype.addMarks = function (mark1, mark2, mark3, ...rest) {
}

Student.prototype.addMark = function (mark) {
  this.mark = mark;
  this.marks.push(mark);
  for (let mark in this.marks) {
    if (this.marks === undefined) {
      this.marks.push(mark);
    } else {
      Student.prototype.addMarks();
    }
    delete this.mark;
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let mark of this.marks) {
    sum += mark;
    this.avg = sum / this.marks.length;
    this.avg = this.avg.toFixed(4);
  }
}

Student.prototype.exclude = function (reason) {
  this.reason = reason;
  delete this.subjectName;
  delete this.marks;
}

let student1 = new Student('Kolin', 'male', '28');
let student2 = new Student('Andra', 'male', '18');
let student3 = new Student('Anna', 'female', '17');
let student4 = new Student('Tally', 'female', '24');
let student5 = new Student('Spencer', 'male', '23');


student1.setSubject("Algebra");
student1.addMark(2);
student1.addMark(3);
student1.addMark(3);
student1.addMark(2);
//student1.exclude('Низкие оценки')
console.log(student1)
