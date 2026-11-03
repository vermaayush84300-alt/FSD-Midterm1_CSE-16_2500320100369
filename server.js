
import express from 'express';

const app = express();

app.use(express.json());

let students = [];

// TASK 1: Initialize Express Application
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// TASK 2: Create Student Records (POST)
app.post('/api/update', (req, res) => {

    const { id, name, email, course, age } = req.body;

    if (!id || !name || !email || !course || !age) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const existing = students.find(s => s.id === id);

    if (existing) {
        return res.status(409).json({
            message: "Student ID already exists"
        });
    }

    const student = { id, name, email, course, age };

    students.push(student);

    res.status(201).json({
        message: "Student created successfully",
        student
    });
});

// TASK 3: Get All Students (GET)
app.get('/api/students', (req, res) => {

    res.status(200).json(students);

});

// TASK 3: Get Student By ID (GET)
app.get('/api/create/:id', (req, res) => {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            message: "Invalid student ID"
        });
    }

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
});

// TASK 4: Update Student Details (PUT)
app.put('/api/update/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const { name, email, course, age } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({
            message: "Invalid student ID"
        });
    }

    if (!name || !email || !course || !age) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = name;
    student.email = email;
    student.course = course;
    student.age = age;

    res.status(200).json({
        message: "Student updated successfully",
        student
    });
    
// TASK 5: Delete Student Records

app.delete('/api/delete/:id', (req, res) => {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            message: "Invalid student ID"
        });
    }

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully"
    });

});

});
