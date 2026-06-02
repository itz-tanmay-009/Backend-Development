const express = require("express");
const router = express.Router();

const {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    markRead
} = require("../controllers/todoController");

router.post("/", createTodo);

router.get("/", getTodos);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

router.patch("/:id/read", markRead);

module.exports = router;