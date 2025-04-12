const requireAuth = (req, res, next) => {
    if(!req.session.user) {
        return res.status(401).json({ message: "Please register first!" });
    }
    next();
}

export default requireAuth;