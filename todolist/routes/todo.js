const express = require('express')
const Sequelize = require('sequelize')
const Todo = require('../models/todo')
const router = express.Router()

//전체조회
router.get('/todo', async (req, res)=>{
    let todoList = []
    console.log("get메소드가 왜 안찍힐까???")
    try {
        todoList = await Todo.findAll()
        // console.log(todoList)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
    res.status(200).json(todoList)
})

// 👩‍💻 게시글 등록
router.post('/todo', async (req, res) => {
    const { name, status} = req.body;
    const newTodo = { name };
    let result = 0
    try {
        result = await Todo.create(newTodo)           // ✅ 데이터 등록
        res.status(200).json(`result`)
    } catch (error) {
        console.log(error);
        res.status(500).json(`등록실패`)
    }
    console.log(`등록 result : ${result}`);
});

// 👩‍💻 게시글 수정
router.put('/todo', async (req, res) => {
    const { no, status } = req.body;
    let result = 0
    try {
        if ( no == -1){
            result = await Todo.update({ status : 1 }, { where : {} })
            
        } else {
            result = await Todo.update({status : status}, {where : { no : `${no}`} })
        }
        res.status(200).json(`result`)
    } catch (error) {
        console.log(error);
        res.status(500).json(`등록실패`)
    }
    console.log(`수정 result : ${result}`);
});

//게시글 삭제
router.delete('/todo/:id', async (req, res)=>{
    const id = req.params.id;
    let result = 0;
    try {
        if (id == `-1`){
            result = await Todo.destroy({where : {}})
        } else {
            result = await Todo.destroy({where : { no : id}})
        }
        res.status(200).json(`result`)
    } catch (error) {
        console.log(error)
    }
    res.status(500)
})

module.exports = router;