module.exports={
    ensureAuth:  (req, res, next)=> {
        if (req.isAuthenticated()) {
          return next()
        } else {
          res.status(400).json({payload:{isAuthenticated:false}});
        }
      },
      ensureGuest:  (req, res, next)=> {
        if (!req.isAuthenticated()) {
          return next();
        } else {
          res.redirect('/app');
        }
      }
} 