Student Management API
A simple REST API built with Node.js and Express.js to manage
student records using an in-memory array.
Setup and Run
1. Install dependencies:
   npm install
2. Start the server:
   node server.js
3. The server runs at:
   http://localhost:3000
Make sure Express is installed (npm install express) and your
project is configured for ES modules ("type": "module" in
package.json) when using import express from 'express'.

API Endpoints
1. POST /api/students -- Adds a new student using ID, name,
   email, course and age after checking mandatory fields and duplicate
   IDs.
2. GET /api/students -- Retrieves and displays all student
   records with status 200 OK.
3. GET /api/students/:id -- Searches for a student by ID and
   returns their details, or 404 Not Found if unavailable.
4. PUT /api/students/:id -- Updates the details of an existing
   student, or returns 404 Not Found if unavailable.
5. DELETE /api/students/:id -- Deletes a student record by ID and
   returns a success message, or 404 Not Found if unavailable.
Example Student JSON
Use this JSON body when testing the POST endpoint:
{
  "id": 101,
  "name": "Rahul Sharma",
  "email": "rahul@gmail.com",
  "course": "CSE",
  "age": 21
}
For PUT, send the updated name, email, course and age in the
request body.
HTTP Status Codes
  Status Code             Meaning                 Typical use
  200 OK                Request successful      GET, successful PUT or
DELETE

  201 Created           Resource created        Successful POST

  400 Bad Request       Invalid request         Missing mandatory
fields or invalid ID

  404 Not Found         Resource not found      Student ID does not
exist
409 Conflict          Conflict                Duplicate student ID
Notes
- Student records are stored in an in-memory array.
- Data is temporary and is cleared when the server restarts.
- Test the endpoints using Postman or another API client.
