import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Developer" },
        { id: 2, name: "Designer" },
    ]);
});

app.post("/api/users", (req, res) => {
    const { name, email } = req.body;

    res.status(201).json({
        message: "User created",
        user: { name, email },
    });
});

app.listen(PORT, () => {
    console.log("Server is running >>>>");
});