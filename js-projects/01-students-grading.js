let arr = [
  {
    Name: "Nasir",
    Marks: {
      eng: 20,
      Math: 90,
      isl: 50,
    },
  },
  {
    Name: "Ali",
    Marks: {
      eng: 50,
      Math: 92,
      isl: 59,
    },
  },
  {
    Name: "Ahmad",
    Marks: {
      eng: 70,
      Math: 88,
      isl: 54,
    },
  }
];

arr.forEach((student) => {
  let total = Object.values(student.Marks).reduce((acc, curr) => acc + curr, 0);
  console.log(`${student.Name} ka total marks: ${total}`);
});
