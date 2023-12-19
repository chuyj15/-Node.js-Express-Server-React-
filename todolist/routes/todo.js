const express = require('express')
const Sequelize = require('sequelize')
const Todo = require('../models/todo')
const router = express.Router()

//전체조회
router.get('/', async (req, res)=>{
    let todoList = []
    try {
        todoList = await Todo.findAll()
    } catch (error) {
        console.log(error)
    }
    res.render('index', {todoList})
})

// 👩‍💻 게시글 등록
router.post('/', async (req, res) => {
    const { name} = req.body;
    const newTodo = { name };

    let result = 0
    try {
        result = await Todo.create(newTodo)           // ✅ 데이터 등록
    } catch (error) {
        console.log(error);
    }
    console.log(`등록 result : ${result}`);
    res.redirect('/');
});

// 👩‍💻 게시글 수정
router.post('/update', async (req, res) => {
    console.log('게시글 수정...');
    const { no } = req.body;
    let result = 0
    try {
        if ( no == -1){
            result = await Todo.update({ status : 1 }, { where : {} })
        } else {
            result = await Todo.update({status : 1}, {where : { no : `${no}`} })
        }
    } catch (error) {
        console.log(error);
    }
    console.log(`수정 result : ${result}`);
    res.redirect(`/`);
});

//게시글 삭제
router.get('/:id', async (req, res)=>{
    console.log(`여기에 들어가는지?`)
    const id = req.params.id;
    let result = 0;
    try {
        if (id == `-1`){
            result = await Todo.destroy({where : {}})
        } else {
            result = await Todo.destroy({where : { no : id}})
        }
    } catch (error) {
        console.log(error)
    }
    res.redirect('/')
})

module.exports = router;