module.exports = (app) => {
  app.get("/users/:id", (req, res) => { // show
    res.render("react")
  })

  app.post("/users", (req, res) => { // create
    // do something
    res.redirect("show")
  })
}


// index    GET: /users
// new      GET: /users/new
// create   POST: /users
// show     GET: /users/:id
// edit     GET: /users/:id/edit
// update   PATCH: /users/:id
// destroy  DELETE: /users/:id

// /clock_in => POST /punchins (punch in the current user)
// GET /punchins?from=somedate&to=sSOMEDATE
// /clock_out => POST /punchouts (punch in the current user)