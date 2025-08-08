import express from 'express';
import { changeStatus, createTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todoController.js';

const router = express.Router();


router.get('/:id',getTodo);
router.post('/',createTodo)
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo);
router.patch('/:id',changeStatus)



export default router