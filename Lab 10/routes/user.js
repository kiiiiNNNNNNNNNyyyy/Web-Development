var router  = require('express').Router();
var User = require('../models/user');
var passport = require('passport');
var passportConf = require('../config/passport');

router.get('/signup', function(req, res, next){
	res.render('accounts/signup', {
		errors: req.flash('errors')
	});
});

router.get('/', function(req, res){
	if(req.user) return res.redirect('/private');
	res.render('accounts/login', {message: req.flash('loginMessage')});
});

router.get('/private', function(req, res, next){
	User.findOne({_id: req.user._id},function(err, user){
		if(err) return next(err); 
		res.render('accounts/private', {user: user});
	});
});

router.post('/', passport.authenticate('local-login', {
	successRedirect: '/private',
	failureRedirect: '/',
	failureFlash: true
}));

router.post('/signup', function(req, res, next){
	var user = new User();
	 
	user.username = req.body.username;
	user.password = req.body.password;
	user.firstname = req.body.firstname;
	user.lastname = req.body.lastname;
	user.profession = req.body.profession;
	user.bio = req.body.bio;

	User.findOne({ username: req.body.username}, function(err, existingUser){
		if(existingUser){
			req.flash('errors', 'Account with that username already exist');	
			return res.redirect('/signup');
		}else{
			user.save(function(err){
				if(err) return next(err);

				res.redirect('/');
			}); 
		}
	});
});	

router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

module.exports = router;