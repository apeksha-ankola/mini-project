import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({error: "Unauthorized: No Token Detected"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) {
            return res.status(401).json({error: "Unauthorized: Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user) {
            return res.status(404).json({error: "User not Found"});
        }

        req.user = user;
        next();

    } catch(err) {
        console.log("Error in protect Route ",err.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export default protectRoute;