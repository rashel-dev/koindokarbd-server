import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import cors from "cors";
const port = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//mysql connection
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
});

app.get("/", (req, res) => {
    res.send("Welcome to Koindokarbd Server");
});

app.get("/users", async (req, res) => {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});