// this is basically what authenticates users.
// If users provides the right credentials they get to move forward

const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
