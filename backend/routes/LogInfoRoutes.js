import express from 'express';
import LogInModel from '../models/LogInfoModel.js';

const app = express();

app.post("/add_info", async (req, res) => {
    const info = new LogInModel(req.body);

    try {
        await info.save();
        res.send(info);
    } catch (err) {
        res.status(500).send(err);
    }
});

export default app;