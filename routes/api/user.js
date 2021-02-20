app.post(`/api/login`, (req, res) => {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, `/api/login`);
      })
      .catch(err => {

        res.status(401).json(err);
      });
})

// dania - client "/profile/{UserId}"
// dania - get "/api/user/{userId}"
