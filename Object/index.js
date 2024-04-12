var student = new Object();

var teacher = {
  teacher_id: "001",
  teacher_name: "Gunawardhana",
  class_name: "10-E",
  count: {
    A: 1,
    B: 2,
  },
};

for (let key in teacher) {
  console.log(key + ":" + teacher[key]);
}

//-----------------------------------------------

student.student_id = "001";
student.student_name = "Kamal";
student.class_name = "10-E";

for (let key in student) {
  console.log(key + ":" + student[key]);
}
