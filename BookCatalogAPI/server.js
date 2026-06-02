const express = require("express");

const app = express();

const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());

app.use("/books", bookRoutes);

app.get("/", (req, res) => {
    res.send("Book Catalog API Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});