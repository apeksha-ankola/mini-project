import bycryptjs from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res) => {
    
    try {
        const {fullName, username, password, confirmPassword, gender } = req.body;
        
        if(password != confirmPassword) {
            return res.status(400).json({error: "Password and Confirm Password do not match"});
        }

        const user = await User.findOne({username});
        if(user) {
            return res.status(400).json({error: "Username already exists"});
        }

        // Password Hashing
        const salt = await bycryptjs.genSalt(10);
        const hashedPassword = await bycryptjs.hash(password, salt);


        let profilePic = "";
        // image avatar:
        if(gender == "female") {
            profilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        }
        else {
            profilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        }

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic
        });

        if(newUser) {
            // Generate JWT token and set cookie
            await generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            return res.status(400).json({error: "Invalid user Data"});
        }
    } catch(err) {
        console.log("Error in signup controller ",err.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const login = async (req,res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user) {
            return res.status(400).json({error: "username does not exist"});
        }

        const isPasswordCorrect = await bycryptjs.compare(password, user.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({error: "Incorrect password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
          _id: user._id,
          fullName: user.fullName,
          username: user.username,
          profilePic: user.profilePic,
        });
    
    } catch(err) {
        console.log("Error in login controller ",err.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const logout = async (req,res) => {
    try {
        res.cookie("jwt","",{maxAge: 0});
        res.status(500).json({message: "Logged out Successfully"});
    } catch(err) {
        console.log("Error in logout controller ",err.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

