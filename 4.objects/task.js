function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMark = function (mark) {
  this.mark = mark;
  marks = [];
  for (let mark in marks) {
    if (!Student.hasOwnProperty('mark')) {
      marks.push.mark[0];
    } else {
      marks = Object.assign([], ...mark);
    }
  }
}

Student.prototype.addMarks = function (mark1, mark2, mark3, ...rest) {
  marks = [];
  this.marks = marks;
  for (let mark in marks) {
    marks.push.this.mark;
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
    let avg = sum / marks.length;
  }
  return avg;
}

Student.prototype.exclude = function (reason) {
  this.reason = reason;
  delete this.subjectName;
  delete this.mark;
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
//student1.getAverage()
//student1.exclude('Низкие оценки')
console.log(student1)