const withAuth = (req, res, next) => {
    console.log(req.session)
if(req.session.logged_in) {
    next();
} else {
    res.redirect("/login")
}

}
module.exports = withAuth