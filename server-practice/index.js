const express = require("express");

// create an express app

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hellloooooo");
});

let courses = [
  {
    id: 1,
    name: "java",
  },
  {
    id: 2,
    name: "php",
  },
  {
    id: 3,
    name: "go",
  },
];

app.get("/courses", (req, res) => {
  res.json(courses);
});
app.get("/course/:id", (req, res) => {
  console.log("====================================");
  console.log("iddd", req.params.id);
  console.log("====================================");

  const result = courses.filter(
    (course) => course.id === Number(req.params.id)
  );
  console.log("resres========", req);
  res.json(result);

  res.end();
});

app.post("/courses", (req, res) => {
  console.log("------", req.body);
  console.log("====================================");
  console.log(typeof req.body);
  console.log("====================================");

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  //   const newCourses = [...courses, course];

  courses.push(course);
  res.send(courses);

  res.end();
});

app.put("/course/:id", (req, res) => {
  try {
    const course = courses.find(
      (course) => course.id === Number(req.params.id)
    );

    if (!course) {
      res.status(404).send("unable to find the course");
    }

    course.name = course.name + "----";
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, (req, res) => {
  console.log("server started");
});
