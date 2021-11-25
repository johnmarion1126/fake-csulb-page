import mongoose from 'mongoose';

const LogInInfoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const LogInfo = mongoose.model("LogInInfo", LogInInfoSchema);

export default LogInfo;