import express from "express";
import stats from "./statsRoutes.js";
import sequences from "./sequenceRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Teste para desenvolvedor de chatbot Capgemini')
    })

    app.use(
        express.json(),
        stats,
        sequences
    )
}

export default routes
