const LocalStrategy = require("passport-local").strategy;
const { pool } = require("pg");
const bcrypt = require("bcrypt");
const passport = require("passport");



//conected to postgres
const pool = new pool({
    user: "postgres",
    host: "localhost",
    database: "signupsystemdb",
    password: "barcelona",
    port: 5432,
  });


function initialize(passport) {
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email)
        if(user == null){
            return done (null, false, {message: 'No user with this email'})
        }
        try {
            if(await bcrypt.compare(password, user.password)){
          
            }else{
                return done(null, false, {message: 'password incrrect'})
            }
        }catch(e){
            return done(e)
        }
    } 
}

passport.use(new LocalStrategy({ 
    usernameField: 'email'}),
authenticateUser)
passport.serializeUser((user, done)=>{})
passport.deserializeUser((id,done)=>{})

module.exports = initialize