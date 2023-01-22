import mongoose from "mongoose";


const connectDB = (url) => {
    mongoose.set('strictQuery',true);
    mongoose.connect(url)
        .then(() => console.log("Connected Database"))
        .catch((err) => console.log(`Error came ${err}`));
}

export default connectDB;