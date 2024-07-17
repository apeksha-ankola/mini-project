import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required : true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum:['male','female'],
    },
    profilePic: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dperson%2Bicon&psig=AOvVaw1O2sAnOH1FOoxhBeMzRrui&ust=1719067883359000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi98Yj57IYDFQAAAAAdAAAAABAE",
    },
}, {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;