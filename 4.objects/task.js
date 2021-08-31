function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  this.marks.push(...marks);
}


Student.prototype.getAverage = function () {
  let sum = 0;
  for (let mark of this.marks) {
    sum += mark;
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subjectName;
  delete this.marks;
}

let student1 = new Student('Kolin', 'male', '28');
let student2 = new Student('Andra', 'male', '18');
let student3 = new Student('Anna', 'female', '17');
let student4 = new Student('Tally', 'female', '24');
let student5 = new Student('Spencer', 'male', '23');

