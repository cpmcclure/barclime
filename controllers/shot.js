const ShotData = require('../models/ShotData')
const User = require('../models/User')
const superagent = require('superagent')
const temperatureService = require('../services/temperature')
require('dotenv').config({path: './config/.env'})

module.exports = {
    getShot: async (req, res) => {
      try {
          console.log(`Hello ${req.user.id}`)
          let shotData = await ShotData.find({_id: req.params.id})
          console.log(shotData)
        res.render("singleShot.ejs", { data: shotData, user: req.user});
      } catch (err) {
        console.log(err);
      }
    },
    editShotData: async (req, res) => {
        try {
            console.log(req.params.id)
            console.log(req.body)
            await ShotData.updateOne(
              { _id: req.params.id },
              {
                grind:req.body.grind,
                dose: req.body.dose,
                weight: req.body.weight,
                time: req.body.time,
                roastDate: req.body.roastDate,
                tastingNotes: req.body.tastingNotes.split(', ')
              }
            );
            console.log("Data updated");
            res.redirect(`/shot/${req.params.id}`);
        }
        catch(err) {
            console.log(err)
        }
      },
    deletePost: async (req, res) => {
        try {
          await ShotData.remove({ _id: req.params.id });
          console.log("Deleted Post");
          res.redirect("/profile");
        } catch (err) {
          res.redirect("/profile");
        }
      },
    getShotData: async(req, res)=>{
        console.log(req.user)
        try{
            console.log(req.user.id)
            let shotData = await ShotData.find({userId:req.user.id})
            let lastShot = await shotData.at(-1) ?? {
              grind: 5.5,
              dose: 23,
              weight: 38,
              time: 25,
              roastDate: new Date("2023-01-22T00:00:00.000Z")}
            // let weatherData = await superagent.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHERKEY}&q=${req.user.zipCode}&days=1&aqi=no&alerts=no`)
            let temperatureData = await temperatureService.getTemperature()
            console.log(temperatureData)
            res.render('shot.ejs', { user: req.user, localWeather: temperatureData, lastShot: lastShot })
        }catch(err){
            console.log(err)
        }
    },
    addShotData: async(req, res) => {
        console.log(req.user.id)
        console.log(req.body)
        try{
            await ShotData.create({
                userId: req.user.id,
                grind: req.body.grind,
                dose: req.body.dose,
                weight: req.body.weight,
                time: req.body.time,
                roastDate: req.body.roastDate,
                tastingNotes: req.body.tastingNotes.split(', '),
                currentTime: new Date().toISOString().split(':').slice(0, 2).join(':'),
                temp: req.body.tempIn,
                press: req.body.pressIn,
                humid: req.body.humidIn
                })
            console.log('ShotData has been added!')
            res.redirect('/shot')
        }catch(err){
            console.log(err)
        }
    }, 
}    