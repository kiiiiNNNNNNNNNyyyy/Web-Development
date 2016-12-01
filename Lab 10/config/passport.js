var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.serializeUser(function(user, done){
	done(null, user._id);
});

passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err, user);
	});
});

passport.use('local-login', new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password',
	passReqToCallback: true
}, function(req, username, password,done){
	User.findOne({username:username}, function(err, user){
		if(err) return done(err);

		if(!user){
			return done(null, false, req.flash('loginMessage', 'No such user found'));
		}

		if(!user.comparePassword(password)){
			return done(null, false, req.flash('loginMessage', 'Wrong Password'));
		}

		return done(null, user);
	});
}));

exports.isAuthenticated = function(req, res, next){
	if(req.isAuthenticated()){
		next();
	}
	res.redirect('/');	
}