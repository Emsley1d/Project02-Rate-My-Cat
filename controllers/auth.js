const {User} = require("../models/User");

// Require Passport Configurations
let passport = require("../helper/ppConfig");

const bcrypt = require("bcrypt");
const salt = 10

// need to create a user to sign up
// send to user sign up page
exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
}
// post user sign up data to DB
exports.auth_signup_post = (req, res) => {
     let user = new User(req.body);

     console.log(req.body.password);
     let hash = bcrypt.hashSync(req.body.password, salt);
     console.log(hash);
     user.password = hash;

    user.save()
    .then(() => {
        res.redirect("/");
    })
    .catch((err) => {
       console.log(err);
         res.send("Please try again later.")
     })
 }

// Render Sign in page
exports.auth_signin_get = (req, res) => {
     res.render("auth/signin");
}
// check sign in details with ppCongfig
exports.auth_signin_post = passport.authenticate('local', {
    successRedirect: "/", 
    failureRedirect: "/auth/signin"
})

 exports.auth_logout_get = (req, res) => {
    req.logout(function(err) {
        if(err) {return next(err);}
        req.flash("success", "You've logged out from RateMyCats.")
        res.redirect("/auth/signin");
    })
}