import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });

    res.cookie("jwt",token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,   // time in ms
        httpOnly: true,     // cross site scripting attacks
        sameSite: "strict", // cross site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;