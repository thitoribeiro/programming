const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

global.filename = "grades.json"


app.put("/", (req, res) => {
    let newGrade = req.body;
    newGrade.timestamp = new Date();

    fs.readFile(global.filename, (err, data) => {
        let json = JSON.parse(data);
        let oldIndex = json.grades.findIndex(grade => grade.id === newGrade.id);
        json.grades[oldIndex] = newGrade;

        fs.writeFile(global.filename, JSON.stringify(json, null, 2), err => {
            res.send(json.grades[oldIndex]);
        });
    })
})


app.post("/new-grade", (req, res) => {
    let newGrade = req.body;
    newGrade.timestamp = new Date();

    fs.readFile(global.filename, (err, data) => {
        let json = JSON.parse(data);
        newGrade = { id: json.nextId++, ...newGrade };
        json.grades.push(newGrade);

        fs.writeFile(global.filename, JSON.stringify(json, null, 2), err => {
            res.send(newGrade);
        });
    })
})

app.delete("/delete-grade/:id", (req, res) => {
    idToDelete = req.params.id;

    fs.readFile(global.filename, (err, data) => {
        let json = JSON.parse(data);
        let grades = json.grades.filter((grade) => {
            return grade.id !== parseInt(req.params.id, 10)
        })
        json.grades = grades;

        fs.writeFile(global.filename, JSON.stringify(json, null, 2), err => {
            res.send(json.grades[oldIndex]);
        });
    })
})


app.get("/consult-grade-value/:id", (req, res) => {
    fs.readFile(global.filename, (err, data) => {
        let json = JSON.parse(data);
        let grades = json.grades.filter((grade) => {
            return grade.id === parseInt(req.params.id, 10)
        })
        res.send(grades);
    })
})


app.get("/sum-subject-values", (req, res) => {
    let newGrade = req.body;

    fs.readFile(global.filename, (err, data) => {
        let json = JSON.parse(data);

        let grades = json.grades.filter((grade) => {
            return grade.student === newGrade.student
                && grade.subject === newGrade.subject
        })

        console.log("grades", grades)

        let sumValues = grades
            .map(grade => grade.value)
            .reduce((acc, cur) => acc + cur)

        tmp = JSON.stringify(sumValues)
        console.log("tmp", tmp)

        res.send(tmp);
    })
})


app.get("/avg-subject-type-values", (req, res) => {
    let newGrade = req.body;

    fs.readFile(global.filename, (err, data) => {
        let json = JSON.parse(data);

        let grades = json.grades.filter((grade) => {
            return grade.subject === newGrade.subject
                && grade.type === newGrade.type
        })

        console.log("grades", grades)

        let avgValues = grades
            .map(grade => grade.value)
            .reduce((acc, cur, _, { length }) => acc + cur / length, 0)

        tmp = JSON.stringify(avgValues)
        console.log("tmp", tmp)

        res.send(tmp);
    })
})


app.get("/top3-subject-type-values", (req, res) => {
    let newGrade = req.body;

    fs.readFile(global.filename, (err, data) => {
        let json = JSON.parse(data);

        let grades = json.grades.filter((grade) => {
            return grade.subject === newGrade.subject
                && grade.type === newGrade.type
        })

        res.send(
            grades.sort((b, a) => a.value - b.value)
        );
    })
})


app.listen(3000, () => {
    console.log("API started");
})