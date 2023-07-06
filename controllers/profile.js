const ShotData = require('../models/ShotData')
const User = require('../models/User')

module.exports = {
    getProfile: async (req, res) => {
        try {
            console.log(`Hello ${req.user.id}`)
            let shotData = await ShotData.find({userId:req.user.id}).sort({currentTime: -1})
            console.log(shotData)
          res.render("profile.ejs", { data: shotData, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
      editProfile: async (req, res) => {
        try {
            console.log(req.user.id)
            console.log(req.body)
            await User.updateOne(
              { _id: req.user.id },
              {
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                zipCode: req.body.zipCode
              }
            );
            console.log("Data updated");
            res.redirect(`/profile`);
        }
        catch(err) {
            console.log(err)
        }
      },
}    