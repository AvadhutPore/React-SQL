import express, { json } from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();
app.use(cors());
app.use(json());

const port = process.env.PORT || 3050;

// Connection with MySql DB

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "simple_crud",
})

app.get("/", (req,res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result) => {
        if(err) {
            return res.json({Message: "Error Inside Server"});
        }
        else {
            return res.json(result);
        }
    })
})

app.post("/student", (req, res) => {
    const sql = "INSERT INTO student (`Name`,`Email`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email
    ]

    db.query(sql, [values], (err, result) => {
        if(err) {
            return res.json(err);
        }
        else {
            return res.json(result);
        }   
    })
})


app.listen(port, () => {
    console.log("Backend Is Started");
    
})