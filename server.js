// import express from 'express';

// const app = express();

// app.use(express.json());

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


// task2
import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/student", (req, res) => {
    const student = req.body;

    res.json({
        message: "Student information received successfully",
        data: student
    });
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});