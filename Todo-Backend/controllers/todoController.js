let todos = [];

// Create Todo
const createTodo = (req, res) => {
    const todo = {
        id: Date.now(),
        title: req.body.title,
        completed: false
    };

    todos.push(todo);
    res.status(201).json(todo);
};

// Get Todos
const getTodos = (req, res) => {
    res.json(todos);
};

// Update Todo
const updateTodo = (req, res) => {
    const id = Number(req.params.id);

    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todo.title = req.body.title;

    res.json(todo);
};

// Delete Todo
const deleteTodo = (req, res) => {
    const id = Number(req.params.id);

    todos = todos.filter(t => t.id !== id);

    res.json({
        message: "Todo deleted"
    });
};

// Mark Read
const markRead = (req, res) => {
    const id = Number(req.params.id);

    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todo.completed = true;

    res.json(todo);
};

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    markRead
};