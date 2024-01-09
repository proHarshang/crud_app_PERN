import express from "express";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use(cors());

app.listen(3001, () => {
    console.log("Running on 3001");
})