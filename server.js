// import express from 'express';

// const app = express();

// app.use(express.json());

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


// // task2
// import express from "express";

// const app = express();
// const port = 3000;

// app.use(express.json());

// app.post("/student", (req, res) => {
//     const student = req.body;

//     res.json({
//         message: "Student information received successfully",
//         data: student
//     });
// });

// app.listen(3000, () => {
//     console.log(`Server running on port 3000`);
// });

import express from 'express';

const app = express();

app.use(express.json());

// In-memory student records task3
let students = [
    {
        id: 101,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        course: "CSE",
        age: 21
    }
];
app.get('/api/students', (req, res) => {

    res.status(200).json(students);

});
app.get('/api/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);

});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});