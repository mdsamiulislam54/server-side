import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next)=>{
    const token = req.header("Authorization")?.split(" ")[1];
    if(!token){
        return res.status(403).json({ message: "Access denied" });
    }
    try{
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        req.user = decoded;
        next()
    }catch (err) {
        return res.status(400).json({ message: "Invalid token" });
      }
}

export default verifyToken