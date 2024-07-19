import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// npm run server

const app = express();
const PORT = process.env.PORT;

dotenv.config();


// middlewares
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// routes
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users", userRoutes);

app.get("/",(req,res) => {
    res.send("I am root route");
});


app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});