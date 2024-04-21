import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar:{
        type: String,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F6491%2Fprofile-default&psig=AOvVaw3tPApbtclJ0dgm14fCBjuH&ust=1711644839022000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLi46430lIUDFQAAAAAdAAAAABAJ'
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema)

export default User;