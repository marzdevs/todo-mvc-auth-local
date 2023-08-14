const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

// checks ensureAuth, if logged in will run todosController.getTodos object
router.get('/', ensureAuth, todosController.getTodos)

// dont need to add ensureAuth to below lines because they are already logged in 
router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteT odo', todosController.deleteTodo)

module.exports = router