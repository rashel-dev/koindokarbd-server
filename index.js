import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "REMOVED",
    // database:"",
});

console.log("mysql server has been connected");

