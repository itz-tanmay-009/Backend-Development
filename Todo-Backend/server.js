const express = require("express");

const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
    res.send("Todo Backend Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});