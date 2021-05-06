const router = require('express').Router();
const passport = require('passport');


router.get('/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

router.get( '/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/login',
        // successRedirect: '/dashboard'
}),(req,res)=> {
  console.log(process.env.CLIENT_SERVER+'/app/dashboard')
    res.redirect(process.env.CLIENT_SERVER+'/app/dashboard');

});
// logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  });

module.exports = router;