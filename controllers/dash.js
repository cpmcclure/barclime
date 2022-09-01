const ShotData = require('../models/ShotData')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getShotData: async(req, res)=>{
        console.log(req.user)
        try{
            console.log(req.user.id)
            let shotData = await ShotData.find({userId:req.user.id})
            res.render('dash.ejs', { lastShot: shotData.at(-1) ?? {
                grind: 5.5,
                dose: 23,
                weight: 38,
                time: 25,
                roastDate: "0000-00-00"
            } })
        }catch(err){
            console.log(err)
        }
    },
    addShotData: async(req, res) => {
        console.log(req.user.id)
        try{
            await ShotData.create({
                userId: req.user.id,
                grind: req.body.grind,
                dose: req.body.dose,
                weight: req.body.weight,
                time: req.body.time,
                roastDate: req.body.roastDate,
                currentTime: req.body.currentTime,
                temp: req.body.tempIn,
                press: req.body.pressIn,
                humid: req.body.humidIn
                })
            console.log('ShotData has been added!')
            res.redirect('/dash')
        }catch(err){
            console.log(err)
        }
    } 
}    