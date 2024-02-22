import express from "express";

import { apiRoute } from "../routes/api.mjs";

const app = express();



apiRoute.forEach(function (route) {
    app.use('/api', route);
})

export default app;
