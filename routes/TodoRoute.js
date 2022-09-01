const { Router } = require('express');
const { getTodo, saveTodo, deleteTodo, updateTodo } = require('../controllers/TodoController');

const router = Router();



router.get('/get-todo', getTodo);
router.post('/save-todo', saveTodo);
router.post('/delete-todo', deleteTodo);
router.post('/update-todo', updateTodo);

module.export = router;