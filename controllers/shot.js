const ShotData = require('../models/ShotData')

module.exports = {
    getShot: async (req, res) => {
      try {
          console.log(`Hello ${req.user.id}`)
          let shotData = await ShotData.find({_id: req.params.id})
          console.log(shotData)
        res.render("singleShot.ejs", { data: shotData, user: req.user });
      } catch (err) {
        console.log(err);
      }
    },
    getProfile: async (req, res) => {
        try {
            console.log(`Hello ${req.user.id}`)
            let shotData = await ShotData.find({userId:req.user.id})
            console.log(shotData)
          res.render("profile.ejs", { data: shotData, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
    editShotData: async (req, res) => {
        try {
            console.log(req.params.id)
            let shotData = await ShotData.find({_id: req.params.id})
            console.log(shotData)
        }
        catch(err) {
            console.log(err)
        }
      },
    deletePost: async (req, res) => {
        try {
          // Find post by id
          let post = await ShotData.findById({ _id: req.params.id });
          // Delete image from cloudinary
        //   await cloudinary.uploader.destroy(post.cloudinaryId);
          // Delete post from db
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
            console.log(shotData)
            res.render('shot.ejs', { lastShot: shotData.at(-1) ?? {
                grind: 5.5,
                dose: 23,
                weight: 38,
                time: 25,
                roastDate: new Date().toISOString().split('T')[0]
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