import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect('mongodb+srv://ahmedshoura279:Fng8sFkAmRq47XJC@cluster0.ti4194e.mongodb.net/sara7a-g1').then(() => {
        console.log('db connected successfully');
    }).catch((err) => {
        console.log('fail to connect to db');
    })
}