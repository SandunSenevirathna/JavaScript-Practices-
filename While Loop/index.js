var studentData = [
  {
    s_ID: "001",
    data: {
      name: "sandun",
      age: 24,
      university: "RUSL",
    },
  },
  {
    s_ID: "002",
    data: {
      name: "nadeeshani",
      age: 23,
      university: "UOC",
    },
  },

  {
    s_ID: "003",
    data: {
      name: "udyani",
      age: 24,
      university: "UOGW",
    },
  },
];


var i = 0;
while (i < studentData.length) {
    document.write("Student ID: " + studentData[i].s_ID + "<br>");
    document.write("Name: " + studentData[i].data.name + "<br>");
    document.write("Age: " + studentData[i].data.age + "<br>");
    document.write("University: " + studentData[i].data.university + "<br>");
    document.writeln("----------" + "<br>");
    i++;
}
